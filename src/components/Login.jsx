import React from 'react'
export default function Login() {
  return (
     <form className='formularioingresar'>
      <div>
        <img src="../src/assets/img/login.png" alt="" />
      </div>

       <div className='fromlogin'>
          <div className='container'>
            <label htmlFor="">Digita tu usuario: </label> 
          </div>
          <div className='container'>
            <input type="text" />
          </div>
        </div> 
        <div className='fromlogin'>
          <div className='container'>
            <label htmlFor="">Digita tu contraseña:</label> 
          </div>
          <div className='container'>
            <input type="password" /><i class="fa-thin fa-eye"></i>
          </div>
        </div> 
         <div className='olvido'>
            <link href="#"/>¿ Olvidaste tu Contraseña ?
        </div>   
        
        <div className='btn-container'>
          <button className='btn' type='submit'>Ingresar</button>
        </div>
      </form> 
  )
}
