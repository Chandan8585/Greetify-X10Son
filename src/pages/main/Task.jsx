import React from 'react';
import { useBrowser } from '../../context/BrowserContext';
const Task = () => {
  const {name } = useBrowser();
  return (
    <div>
      <h1>Welcome {name}</h1>
      {/* Other content related to the task component */}
    </div>
  );
};

export default Task;
