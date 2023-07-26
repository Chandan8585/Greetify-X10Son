import React, { useState } from 'react';
// import logo from '../../../public/vite.svg';

import './Home.css';
import Task from '../main/Task';

const Home = () => {
  const [userName, setUserName] = useState("");
  const [showMain, setShowMain] = useState(false);

  const handleName = (event) => {
    if (event.key === "Enter") {
      setUserName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setShowMain((previous) => !previous);
  };

  return (
    <div className='home-container'>
      {userName ? (
        <Task userName={userName} />
      ) : (
        <div>
          {/* <img src={logo} alt="" srcset="" /> */}
          <h1>Browser Extension</h1>
          <h1 className="main-heading">What is Your Name?</h1>
          <form onSubmit={handleName}>
            <input
              type="text"
              className='input'
            
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
