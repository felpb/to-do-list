import { IoMdCheckmark, IoMdTrash } from 'react-icons/io';
import './Task.css';

function Task({ task, handleTaskDeletion }) {
  return (
    <div className="task-container">
      <div>{task.name}</div>

      <div className="task-buttons">
        <button className="check-button" type="button">
          <IoMdCheckmark />
        </button>
        <button
          className="delete-button"
          type="button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <IoMdTrash />
        </button>
      </div>
    </div>
  );
}

export default Task;
