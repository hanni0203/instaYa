import React from 'react'
import  '../assets/css/footer.css'

export default function Registro() {
  return (
    <>
      <div className='texto__crea-tucuenta'>
        <label htmlFor=""><h3>Crea Tu Cuenta</h3> </label>
        <img src="src/assets/img/imagenRegistro.png" alt="" />
      </div>
 
     <from className ='registro'>
      <div className='formulario'>
        <div className='nombre'>
          <div>
          <label htmlFor="">Nombre Completo </label>
          </div>
          <div>
          <input type="text" />
          </div>
        </div>
           
        <div>
          <label for="lang">CC/NIT:</label>
          <select name="Identificacion" id="lang">
          <option value="Selecciona">Selecciona:</option>
          <option value="cc.">CC.</option>
          <option value="nit">NIT</option>
          </select>
          <label htmlFor="">Numero de Identificacion</label>
          <input type="text" />
          <label htmlFor="">Telefono de Contacto</label>
              <input type="text" />
            </div>
          <div className='correo'>
              <label htmlFor="">Correo Electronico</label>
              <input type="email" name="correo" id="correo" />
          </div>
          
          <div className='contraseña' >
            <label htmlFor="">Crea Tu Usuario</label>
            <input type="text" />
            <label htmlFor="">Crea Tu Contraseña</label>
            <input type="password" />
            <label htmlFor="">Confirma tu Contraseña</label>
            <input type="password" />
          </div>

            <div>
              <input type="radio" />
              <label htmlFor="">Acepto términos y condiciones vigentes de la política de privacidad.</label>
            </div>
            <div>
              <button type="submit">Registrarme</button>
            </div>
      
      
      </div>
        
    </from>
    </>
  )
}
