import { useState } from 'react';
import RenderTasks from '../RenderTasks/RenderTasks';
import './Home.css';

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
      <RenderTasks tasks={tasks} />
    </div>
  );
}

export default Home;
