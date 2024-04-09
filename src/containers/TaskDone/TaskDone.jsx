import './TaskDone.css';

function TaskDone({ task }) {
  return (
    <div className="task-done-container">
      <div>{task.name}</div>
    </div>
  );
}

export default TaskDone;
