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

  const handleTaskAddition = (taskName) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.random(),
        name: taskName,
        done: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Header text="Tasks to do - 2" />
      <RenderTasks tasks={tasks.filter((task) => !task.done)} />
      <Header text="Done - 1" />
      <RenderTasks tasks={tasks.filter((task) => task.done)} />
    </div>
  );
}

export default Home;
