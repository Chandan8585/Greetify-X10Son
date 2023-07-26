import React from 'react';

const Task = (props) => {
  console.log(props.userName)
  return (
    <div>
      <h1>Welcome {props.userName}</h1>
      {/* Other content related to the task component */}
    </div>
  );
};

export default Task;
