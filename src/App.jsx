import { useEffect } from 'react';
import './App.css'
import { useBrowser } from './context/BrowserContext';
import { images } from './db/Image'
import Home from './pages/home/Home';
import Task from './pages/main/Task';



let randomIndex = Math.floor(Math.random()*images.length);
const RandomImage = images[randomIndex].image ;  

function App() {


  const {name , Browserdispatch} = useBrowser();

  useEffect(()=>{
    let userName = localStorage.getItem("name");
    Browserdispatch({
      type: "NAME",
      payload: userName
    })
  }, [])

  // console.log("name", name);
  return (
    <>
     <div className='app' style={{backgroundImage: `url(${RandomImage})`}} alt="" >
    { name ?  <Task /> :
    <Home/> 
    }

     </div>
    </>
  )
}

export default App
