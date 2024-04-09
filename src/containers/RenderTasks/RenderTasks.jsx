import Task from '../Task/Task';
import './RenderTasks.css';

function RenderTasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
}

export default RenderTasks;
