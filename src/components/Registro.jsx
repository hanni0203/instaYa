import React from 'react'
import '../assets/css/formularioregistro.css'

import {useForm} from 'react-hook-form'
import axios from 'axios'

const Registro = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  /* const { register, formState: { errors }, handleSubmit } = useForm();
  const customSubmit = (data) => {
      axios
          .post("http://localhost:5000/orden/", data)
          .then(response => {
              if (response.status === '200') {
                  alert('Success!')
              }
          })
      console.log('register data', data)
  }  */

/* const customSubmit = (data) => { console.log('login data', data) } */ 

  const customSubmit = (dataForm) => { 

    const userObject = {
      name: dataForm.nombrecompleto,
      tipocc: dataForm.tipo ,
      numeroTipo: dataForm.identificacion,
      telefono: dataForm.telefonocontacto,
      email: dataForm.correoelectronico,
      username: dataForm.username,
      password: dataForm.password,
    }

    axios
      .post("http://localhost:5000/user/", userObject)
      .then(response => console.log(response.data.data))
  }

  return (
    <div>
      <div className='tituloFormRegistro'>
        <div><h1>Crea tu cuenta</h1></div>
        <div><img src="src/assets/img/imagenRegistro.png" alt=""    align= "right"/></div>
      </div> 
      <br/>
      <form action="" className='registro'onSubmit={handleSubmit(customSubmit)}>
        <div className='nombreycorreo'>
          <label>Nombre completo</label>
          <input type= 'text'  
            {...register("nombrecompleto", { required: true, maxLength: 40 })}
            aria-onInvalid={errors.nombrecompleto ? "true" : "false"}
            />
           
            
        </div>
        <div className='info'>
          <div>
            <label for="lang">CC/NIT:</label>
            <select name="Identificacion" id="lang"
              {...register("tipo", { required: true,})}
              aria-onInvalid={errors.tipo ? "true" : "false"}>
              

            <option value="Selecciona">Selecciona:</option>
            <option value="cc.">CC.</option>
            <option value="nit">NIT</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Numero de Identificacion</label>
            <input type="text" 
            {...register("identificacion", { required: true, maxLength: 30 })}
            aria-onInvalid={errors.identificacion ? "true" : "falso"}/>
           

          </div>
          <div>
            <label htmlFor="">Telefono de Contacto</label>
            <input type="text"
            {...register("telefonocontacto", { required: true, maxLength: 10 })}
            aria-onInvalid={errors.telefonocontacto ? "true" : "falso"}/>
            
          </div>
        </div>
        <div className='nombreycorreo'>
            <label htmlFor="">Correo Electronico</label>
            <input type="email" name="correo" id="correo" 
            {...register("correoelectronico", { required: true, maxLength: 30,
            pattern: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ })}
            aria-onInvalid={errors.correoelectronico ? "true" : "falso"}/>
            

        </div>
        <div className='contrasenia' >
            <div className='groupusu'>
              <div className='contraseniainput'><label htmlFor="">Crea Tu Usuario</label></div>
              <div className='contraseniainput'><input type="text"             
              {...register("username", { required: true, maxLength: 10 })}
                  aria-onInvalid={errors.username ? "true" : "falso"}/>
                 
              </div>
            </div>
            <div className='groupusu'>
              <div className='contraseniainput'><label htmlFor="">Crea Tu Contraseña</label></div>
              <div className='contraseniainput'><input type="password" 
               {...register("password", { required: true, maxLength: 20})}
                  aria-onInvalid={errors.password ? "true" : "falso"}/>
                 
               </div>
            </div>
            <div className='groupusu'>
              <div className='contraseniainput'><label htmlFor="">Confirma tu Contraseña</label></div>
              <div className='contraseniainput'><input type="password" 
                {...register("password2", { required: true, maxLength: 20 })}
                 aria-onInvalid={errors.password2 ? "true" : "falso"}/>
                
               </div>
            </div>            
        </div>
        <div>
          <input type="radio" 
          {...register("termionosycondiciones", { required: true, })}
            aria-onInvalid={errors.termionosycondiciones ? "true" : "falso"} />
            
          <label htmlFor="">Acepto términos y condiciones vigentes de la política de privacidad.</label>
        </div>
        <div>
          <button type="submit">Registrarme</button>
        </div>
    


      </form>
    </div>
  )
}
export default Registro
