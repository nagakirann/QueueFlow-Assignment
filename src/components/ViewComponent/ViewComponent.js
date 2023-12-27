import React from 'react';
import './ViewComponent.css'

const ViewComponent = ({ queue }) => {
  return (
    <div className="my-4">
      <h2>View Component (Queue)</h2>
      <ul className="list-group">
        {queue.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewComponent;
