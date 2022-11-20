import React from 'react'
import '../assets/css/formularioregistro.css'

export default function Registro() {
  return (
    <div>
      <div className='tituloFormRegistro'>
        <div><h1>Crea tu cuenta</h1></div>
        <div><img src="src/assets/img/imagenRegistro.png" alt=""    align= "right"/></div>
      </div> 
      <form action="" className='registro'>
        <div className='nombreycorreo'>
          <label>Nombre completo</label>
          <input type= 'text'/>
        </div>
        <div className='info'>
          <div>
            <label for="lang">CC/NIT:</label>
            <select name="Identificacion" id="lang">
            <option value="Selecciona">Selecciona:</option>
            <option value="cc.">CC.</option>
            <option value="nit">NIT</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Numero de Identificacion</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Telefono de Contacto</label>
            <input type="text" />
          </div>
        </div>
        <div className='nombreycorreo'>
            <label htmlFor="">Correo Electronico</label>
            <input type="email" name="correo" id="correo" />
        </div>
        <div className='contrasenia' >
            <div className='groupusu'>
              <div className='contraseniainput'><label htmlFor="">Crea Tu Usuario</label></div>
              <div className='contraseniainput'><input type="text" /></div>
            </div>
            <div className='groupusu'>
              <div className='contraseniainput'><label htmlFor="">Crea Tu Contraseña</label></div>
              <div className='contraseniainput'><input type="password" /></div>
            </div>
            <div className='groupusu'>
              <div className='contraseniainput'><label htmlFor="">Confirma tu Contraseña</label></div>
              <div className='contraseniainput'><input type="password" /></div>
            </div>            
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Acepto términos y condiciones vigentes de la política de privacidad.</label>
        </div>
        <div>
          <button type="submit">Registrarme</button>
        </div>
    


      </form>
    </div>
  )
}
