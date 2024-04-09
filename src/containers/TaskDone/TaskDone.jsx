import './TaskDone.css';

function TaskDone({ task }) {
  return (
    <div className="task-done-container">
      <div className="task-done">{task.name}</div>
    </div>
  );
}

export default TaskDone;
