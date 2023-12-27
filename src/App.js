import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import InputComponent from './components/InputComponent/InputComponent';
import ViewComponent from './components/ViewComponent/ViewComponent';
import FinalViewComponent from './components/FinalViewComponent/FinalViewComponent';
import './App.css'

const App = () => {
  const [inputQueue, setInputQueue] = useState([]);
  const [finalQueue, setFinalQueue] = useState([]);

  const handleAdd = (text) => {
    setInputQueue((prevInputQueue) => [...prevInputQueue, text]);
  };

  const pollQueue = useCallback(() => {
    if (inputQueue.length > 0) {
      const item = inputQueue.shift();
      setFinalQueue((prevFinalQueue) => [...prevFinalQueue, item]);
    }
  }, [inputQueue]);

  useEffect(() => {
    const intervalId = setInterval(pollQueue, 10000);

    return () => clearInterval(intervalId);
  }, [pollQueue]);

  const handleEnd = () => {
    if (inputQueue.length === 0) {
      alert('Success!');
    } else {
      const intervalId = setInterval(() => {
        if (inputQueue.length === 0) {
          clearInterval(intervalId);
          alert('Success!');
        }
      }, 1000);
    }
  };

  const handleReset = () => {
    setInputQueue([]);
    setFinalQueue([]);
  };

  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <div className="input-view-wrapper">
          <InputComponent onAdd={handleAdd} />
          <ViewComponent queue={inputQueue} />
        </div>
        <FinalViewComponent finalQueue={finalQueue} onEnd={handleEnd} onReset={handleReset} />
      </div>
    </div>
  );
};

export default App;