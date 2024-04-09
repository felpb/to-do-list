import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
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
      <input
        type="text"
        value={inputData}
        onChange={handleInputData}
        className="input-add-task"
        placeholder="Add new task"
      />
      <button type="button" onClick={handleAddTask} className="button-add-task">
        <RiAddFill />
      </button>
    </div>
  );
}

export default InputAddTask;
