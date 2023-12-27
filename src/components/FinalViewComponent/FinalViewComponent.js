import React from 'react';
import './FinalViewComponent.css';

const FinalViewComponent = ({ finalQueue, onEnd, onReset }) => {
  return (
    <div className="my-4">
      <h2>Final View Component</h2>
      <ul className="list-group">
        {finalQueue.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      <div className="btn-container">
        <button onClick={onEnd} className="btn btn-primary mt-2 mr-2">
          End
        </button>
        <button onClick={onReset} className="btn btn-danger mt-2">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FinalViewComponent;
