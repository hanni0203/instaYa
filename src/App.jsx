import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './NavBar'
import Footer from './componentes/footer'
import Home from './componentes/Home'
import Registro from './componentes/registro'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='instaYa'>
     <NavBar />
      
      
   
     {/* <Home /> */}
     <Registro />
    
    
     <Footer/>
     </div>
    
    </>
  )
}

export default App
