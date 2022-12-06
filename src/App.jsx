import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import Home from './components/Home'
import Registro from './components/Registro'
import Login from './components/Login'
import IngresaOrden from './components/IngresaOrden'
import Orden from './components/Orden'
import ActualizarOrden from './components/ActualizarOrden'
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
            <Route path="/IngresaOrden" element={<IngresaOrden />} />

            <Route path="/actualizarOrden/:id/edit" element={<ActualizarOrden />} />  

            <Route path="/misOrdenes" element={<Misordenes />} /> 
              
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
