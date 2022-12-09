//import React from 'react'
import '../assets/css/login.css'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

/*   const { register, formState: { errors }, handleSubmit } = useForm();
  const customSubmit = (data) =>{ console.log(data)}  */

  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const customSubmit = (data) => {
      axios
          .post("http://localhost:3001/User", data)
          .then(response => {
              if (response.data.length != 0) {
                  localStorage.setItem('user_id', response.data[0]._id)
                  navigate("/books")
              } else {
                  alert('Invalid input data. Please, try again')
                  setValue('password', '')
              }
          })
  } 

  return (

     <form className='formularioingresar' onSubmit={handleSubmit(customSubmit)}>
        <div>
          <img className='iimg' src="../src/assets/img/login.png" alt="" />
        </div>
       <div className='fromlogin'>
          <div className='container'>
            <label  htmlFor="usuario">Usuario: </label> 
          </div>
          <div className='container'>
            <input 
              id = "username" 
              name = "username" 
              type="text" 
              placeholder='ingresa tu Usuario'
              //onChange={this.handleChange}
              /* value = {values.username} */ 
              /* onChange = {handleChange} */
              {...register("username", { required: true, maxLength: 10 })}
              aria-invalid={errors.username ? "true" : "false"}
            />
            {errors.username && <p>Debe ingresar su nombre de usuario</p>}
          </div>
        </div> 
        <div className='fromlogin'>
          <div className='container'>
            <label htmlFor="">Contraseña:</label> 
          </div>
          <div className='container'>
            <input 
              id = "password" 
              name = "password" 
              type="password" 
              //onChange={this.handleChange}
              placeholder='ingresa tu contraseña' 
              /* value = {values.password} 
              onChange = {handleChange} */
              {...register("password", { required: true, maxLength: 10 })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p>Debe ingresar su contraseña</p>}
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
