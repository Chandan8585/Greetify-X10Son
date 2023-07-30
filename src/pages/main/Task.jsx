import React, { Fragment, useEffect, useState } from 'react';
import { useBrowser } from '../../context/BrowserContext';
import { quotes } from '../../db/Quote';
import { Todo } from '../../components/todoList/TodoList';


let randomIndex = Math.floor(Math.random()*quotes.length);
let randomQuote = quotes[randomIndex].quote ;
const Task = () => {
 const [isChecked, setIsChecked] = useState(false);
 const [isTodoOpen, setIsTodoOpen] = useState(false);

 const handleToDoClick = () => {
  setIsTodoOpen(isTodoOpen => !isTodoOpen);
}

  const {time,name ,message, task, Browserdispatch} = useBrowser();

  //getCurrentTime function
  useEffect(()=>{
   getCurrentTime();
  },[time])


  //Checkstatus
 useEffect(()=> {
 const checkStatus = localStorage.getItem("Checked");
  checkStatus ==="true" ? setIsChecked(true) : setIsChecked(false)
 },[])

 useEffect(()=> {
  const userTask = localStorage.getItem("task");
  Browserdispatch({
    type: "TASK",
    payload: userTask
  });
 }, [])
 const handleDelete = ()=> {
  Browserdispatch(
    { type: "CLEAR",
    
    }); 
       setIsChecked(false);
      localStorage.removeItem("checkedStatus");
      localStorage.removeItem("task");
    
     
 }
  const handleChecked = (event)=> {
  
    if(event.target.checked                 ){
      setIsChecked(isChecked => !isChecked)
    }
    else{
      setIsChecked(isChecked => !isChecked)
    }
    localStorage.setItem("checkedStatus", !isChecked);
  }

function handleFormSubmit(event){
      event.preventDefault();
}
function handleTaskChange(event){
   if(event.key ==="Enter" && event.target.value.length > 0){
    Browserdispatch({
      type: "TASK",
      payload: event.target.value
    });
    localStorage.setItem("task", event.target.value);
    localStorage.setItem("data", new Date.getDate());
  }
}
  const getCurrentTime = ()=> {
    const today =new Date;
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const hour = hours < 10 ? ("0" + hours) : hours ; 
    const minute = minutes < 10 ? ("0" + minutes) : minutes ; 
    const currentTime = `${hour} : ${minute}`
    setTimeout(getCurrentTime, 1000);
    Browserdispatch({
      type:"TIME",
      payload: currentTime
    })
    Browserdispatch({
      type:"MESSAGE",
      payload: hours
    })
  }


  return (
    
 <div className="task-container d-flex direction-column align-center relative">
          
            <span className="time">{time}</span>
            <h1 className="message">{message} {name}</h1>
  
                      
          { name!==null && task===null ?
             <Fragment>
             <span className="focus-question">What is your main focus for today?</span>
             <form onSubmit={handleFormSubmit}>
                 <input required className="input task-input" onKeyPress={handleTaskChange}/>
             </form>
         </Fragment> : <div className='today-task'> 
          <h1>Today's Focus</h1>
            <div className='assigned-task'>
              <label htmlFor="task" className={`${isChecked ? "strike-through" : ""}`} onChange={handleChecked} >
              <input type="checkbox" name='task' className='checkbox' 
            
              checked= {isChecked}
            />
                {task} 
                <button onClick={handleDelete}>
                <span className="material-icons-outlined"  >
                 clear
                </span>
                </button>
                </label>
             
            </div>
                
            <Fragment>
                  <p className='quote-container'>{randomQuote}</p>
            </Fragment>

            {isTodoOpen && <Todo />  }
            <div className="todo-btn-container absolute">
                <button className="button cursor todo-btn" onClick={handleToDoClick}>ToDo</button>
            </div>
            </div>
        }
           
          
           
    </div>
  );
};

export default Task;
