// InputComponent.js
import React, { useState } from 'react';
import './InputComponent.css';

const InputComponent = ({ onAdd }) => {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    if (inputText.trim() !== '') {
      onAdd(inputText);
      setInputText('');
    }
  };

  return (
    <div className="my-4">
      <div className="form-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text"
          className="form-control"
        />
        <button onClick={handleAdd} className="btn btn-primary mt-2">
          Add
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
