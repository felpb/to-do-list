import { useState } from 'react';
import './AddTask.css';

function InputAddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState('');

  const handleInputData = (event) => {
    setInputData(event.target.value);
  };

  const handleAddTask = () => {
    handleTaskAddition(inputData);
    setInputData('');
  };

  return (
    <div className="add-task-container">
      <input type="text" value={inputData} onChange={handleInputData} />
      <button type="button" onClick={handleAddTask}>
        ADD
      </button>
    </div>
  );
}

export default InputAddTask;
