import { useState } from 'react';
import './Home.css';
import RenderTasks from '../RenderTasks/RenderTasks';
import AddTask from '../AddTask/AddTask';
import Header from '../../components/Header/Header';

function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Estudar Javascript',
      done: false,
    },
    {
      id: 2,
      name: 'Estudar Banco de dados',
      done: false,
    },
    {
      id: 3,
      name: 'Programar em java',
      done: true,
    },
  ]);

  const [lastId, setLastId] = useState(3);

  const handleTaskAddition = (taskName) => {
    const newTasks = [
      ...tasks,
      {
        id: lastId + 1,
        name: taskName,
        done: false,
      },
    ];
    setTasks(newTasks);
    setLastId(lastId + 1);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskCheck = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: true };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Header text="Tasks to do - 2" />
      <RenderTasks
        tasks={tasks.filter((task) => !task.done)}
        handleTaskDeletion={handleTaskDeletion}
        handleTaskCheck={handleTaskCheck}
      />
      <Header text="Done - 1" />
      <RenderTasks tasks={tasks.filter((task) => task.done)} />
    </div>
  );
}

export default Home;
