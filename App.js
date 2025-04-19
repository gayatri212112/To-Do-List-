import "./App.css";
import { useState } from "react";
import { CheckCircle , Circle} from "react";

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Write Documentation", completed: false },
    { id: 4, text: "Go for a walk", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
 
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  return (
    <div className="bg-slate-600 p-6 rounded-2xl shadow-md w-full max-w-sm mx-auto">
    <h2 className="text-2xl font-bold text-center mb-4">Todo List</h2>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center cursor-pointer"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? (
            <CheckCircle className="text-green-600 mr-3" />
          ) : (
            <Circle className="text-gray-400 mr-3" />
          )}
          <span
            className={`text-lg ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
