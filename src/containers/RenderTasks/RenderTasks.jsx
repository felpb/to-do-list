import Task from '../Task/Task';
import TaskDone from '../TaskDone/TaskDone';

function RenderTasks({ tasks, handleTaskDeletion }) {
  return (
    <div>
      {tasks.map((task) =>
        task.done ? (
          <TaskDone task={task} key={task.id} />
        ) : (
          <Task
            task={task}
            key={task.id}
            handleTaskDeletion={handleTaskDeletion}
          />
        ),
      )}
    </div>
  );
}

export default RenderTasks;
