import React from 'react'
import '../assets/css/login.css'
import {useForm} from 'react-hook-form'

export default function Login() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const customSubmit = (data) => { console.log('login data', data) }




  return (

     <form className='formularioingresar' onSubmit={handleSubmit(customSubmit)}>
        <div>
          <img className='iimg' src="../src/assets/img/login.png" alt="" />
        </div>
      

       <div className='fromlogin'>
          <div className='container'>
            <label  htmlFor="">Usuario: </label> 
          </div>
          <div className='container'>
            <input type="text" placeholder='ingresa tu Usuario' 
            {...register("usuario", { required: true, maxLength: 10 })}
            aria-onInvalid={errors.usuario ? "true" : "falso"}
            />

          
          </div>
        </div> 
        <div className='fromlogin'>
          <div className='container'>
            <label htmlFor="">Contraseña:</label> 
          </div>
          <div className='container'>
            <input type="password" placeholder='ingresa tu contraseña' 
            {...register("password", { required: true, maxLength: 10 })}
            aria-onInvalid={errors.password  ? "true" : "falso"}
            />
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
