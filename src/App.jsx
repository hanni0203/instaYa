import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import Home from './components/Home'
import Registro from './components/Registro'
import Login from './components/Login'
import IngresaOrden from './components/IngresaOrden'
import Misordenes from './components/Misordenes'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <div className='instaYa'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/login" element={<Login />} />  
          <Route path="/register" element={<Registro />} />
          <Route path="/ingresaOrden" element={<IngresaOrden />} />    
          <Route path="/misOrdenes" element={<Misordenes />} />    
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
