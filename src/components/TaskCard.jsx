function TaskCard({ task, tasks, saveTasks }) {

  const deleteTask = () => {
    saveTasks(tasks.filter(t => t.id !== task.id));
  };

  const completeTask = () => {
    saveTasks(
      tasks.map(t =>
        t.id === task.id ? { ...t, completed: true } : t
      )
    );
  };

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>Category: {task.category}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</p>

      {!task.completed && (
        <button onClick={completeTask} style={{ marginRight: "10px" }}>
          Mark Complete
        </button>
      )}
      <button onClick={deleteTask} style={{ background: "#ff4d4d" }}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
