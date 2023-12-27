import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import ViewComponent from './components/ViewComponent';
import FinalViewComponent from './components/FinalViewComponent';

const useQueue = () => {
  const [queue, setQueue] = useState([]);

  const enqueue = (item) => {
    setQueue((prevQueue) => [...prevQueue, item]);
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const [item, ...rest] = queue;
      setQueue(rest);
      return item;
    }
    return null;
  };

  const isEmpty = () => {
    return queue.length === 0;
  };

  return {
    enqueue,
    dequeue,
    isEmpty,
    queue,
  };
};

const App = () => {
  const inputQueue = useQueue();
  const finalQueue = useQueue();

  const pollQueue = useCallback(() => {
    const item = inputQueue.dequeue();
    if (item !== null) {
      finalQueue.enqueue(item);
    }
  }, [inputQueue, finalQueue]);

  useEffect(() => {
    const intervalId = setInterval(pollQueue, 10000);

    return () => clearInterval(intervalId);
  }, [pollQueue]);

  const handleEnd = () => {
    if (inputQueue.isEmpty()) {
      alert('Success!');
    } else {
      const intervalId = setInterval(() => {
        if (inputQueue.isEmpty()) {
          clearInterval(intervalId);
          alert('Success!');
        }
      }, 1000);
    }
  };

  const handleReset = () => {
    inputQueue.setQueue([]);
    finalQueue.setQueue([]);
  };

  return (
    <div>
      <Header />
      <InputComponent onAdd={(text) => inputQueue.enqueue(text)} />
      <ViewComponent queue={inputQueue.queue} />
      <FinalViewComponent
        finalQueue={finalQueue.queue}
        onEnd={handleEnd}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
