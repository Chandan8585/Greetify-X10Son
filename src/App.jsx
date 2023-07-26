import './App.css'
import { images } from './db/Image'
import Home from './pages/home/Home';
function App() {
  let randomIndex = Math.floor(Math.random()*images.length) ;
  const RandomImage = images[randomIndex].image ;   

  return (
    <>
     <div className='app' style={{backgroundImage: `url(${RandomImage}`}} alt="" >
    <Home/>
     </div>
    </>
  )
}

export default App
