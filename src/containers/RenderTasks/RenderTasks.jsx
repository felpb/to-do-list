import Task from '../Task/Task';
import TaskDone from '../TaskDone/TaskDone';

function RenderTasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) =>
        task.done ? (
          <TaskDone task={task} key={task.id} />
        ) : (
          <Task task={task} key={task.id} />
        ),
      )}
    </div>
  );
}

export default RenderTasks;
