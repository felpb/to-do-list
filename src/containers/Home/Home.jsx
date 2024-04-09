import { useState } from 'react';
import './Home.css';
import RenderTasks from '../RenderTasks/RenderTasks';

function Home() {
  const [tasks] = useState([
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

  return (
    <div className="container">
      <RenderTasks tasks={tasks.filter((task) => !task.done)} />
      <RenderTasks tasks={tasks.filter((task) => task.done)} />
    </div>
  );
}

export default Home;
