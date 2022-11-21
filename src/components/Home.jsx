import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        
        <div>
        
        <img className="imagenhome" src="src/assets/img/imagenhome.png" alt=" imagen logo" />
      
      </div>

      <div className='contac'>
        <div className="item">
          <Link to="/register">
            <img  src="src/assets/img/pc1.png" alt=" imagen logo" />
            <h4>Regístrate</h4>
          </Link>
        </div>
        <Link to="/ingresaorden">
          <div className="item">
            <img src="src/assets/img/carro2.png" alt=" imagen logo" />
            <h4>Ingresa una Orden</h4>
          </div>
        </Link>
        <Link to="/misordenes">
          <div className="item">
            <img src="src/assets/img/nota3.png" alt=" imagen logo" />
            <h4>Listado de Ordenes</h4>
          </div>
        </Link>
        <div className="item">
          <img  src="src/assets/img/rastreo4.png" alt=" imagen logo" />
          <h4>Rastrea una Orden</h4>
        </div>
        <div className="item">
          <img  src="src/assets/img/contactanos5.png" alt=" imagen logo" />
          <h4>Contáctanos</h4>
        </div>
      </div>

      <div className="App">
  
     </div>
        
    </div>
  )
}
