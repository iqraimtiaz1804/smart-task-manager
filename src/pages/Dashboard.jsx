import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const saveTasks = (updated) => {
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const addTask = () => {
    if (!title) return alert("Enter task title");

    const newTask = {
      id: Date.now(),
      title,
      category,
      priority,
      completed: false
    };

    saveTasks([...tasks, newTask]);
    setTitle("");
  };

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="container">
      <Navbar />

      <h1 style={{ color: "white" }}>📊 Productivity Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div className="card"><h3>Total</h3><h2>{total}</h2></div>
        <div className="card"><h3>Completed</h3><h2>{completed}</h2></div>
        <div className="card"><h3>Pending</h3><h2>{pending}</h2></div>
      </div>

      <div className="card">
        <h3>Add Task</h3>
        <input value={title} placeholder="Task title" onChange={(e) => setTitle(e.target.value)} />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Work</option>
          <option>Study</option>
          <option>Personal</option>
        </select>
        <select onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.map(task => (
        <TaskCard key={task.id} task={task} tasks={tasks} saveTasks={saveTasks} />
      ))}
    </div>
  );
}

export default Dashboard;
