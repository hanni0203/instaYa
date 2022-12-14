import '../assets/css/ingresaOrden.css'

import {useForm} from 'react-hook-form'
import axios from 'axios'


const IngresaOrden = ()=>{

  const { register, formState: { errors }, handleSubmit, setValue } = useForm();

  const customSubmit = (dataForm) => { 
    console.log(dataForm)

    const ordenObject = {
      // datos api y datos input 
      
      userName: "David",
      nameEmisor: dataForm.nombre,
      tipoCcEmisor: dataForm.tipo,
      numeroTipoEmisor: dataForm.numId,
      direccionEmisor: dataForm.direccionrecogida,
      ciudadEmisor: dataForm.ciudad,
      telefonoEmisor: dataForm.telefono,
      /* fechaEmisor: dataForm.fecha, */
      horaEmisor: dataForm.hora,

      tipoEmcomienda: dataForm.tipodeencomienda,
      cantidadEmcomienda: dataForm.cantidad,
      largoEmcomienda: dataForm.largo,
      anchoEmcomienda: dataForm.ancho,
      altoEmcomienda: dataForm.alto,
      pesoEmcomienda: dataForm.peso,

      nameReceptor: dataForm.nombreReceptor,
      tipoCcReceptor: dataForm.tipoIdReceptor,
      numeroTipoReceptor: dataForm.numeroIdReceptor,
      direccioReceptor: dataForm.direccionrecogida,
      ciudadReceptor: dataForm.ciudadReceptor,
      telefonoReceptor: dataForm.telefonoReceptor,
      userId: "638ad1e4f31b537d0b8a6097",
      /* estado: "Guardado" */

    }

    axios
        .post("http://localhost:5000/orden/", ordenObject)
        .then(response => console.log(response.data.data))
  }




    return(
      <div>
        <div className='tituloIngresaOrden'>
            <div><h1>Ingresa tu orden</h1></div>
            <div><img src='../assets/img/IngresaOrden.png' alt="" align= "right"/></div>
        </div>  
        <br/>
        <form className='ingresaOrden' onSubmit={handleSubmit(customSubmit)}>
            <div className='envia'>
              <h3 className='titulos'>Quien envia?</h3>
              <div className='nombreycorreo'>
                <label htmlFor="nombre">Nombre completo:</label>
                <input type= 'text'  placeholder=' '
                   {...register("nombre", { required: true })}
                    aria-invalid={errors.nombre ? "true" : "false"}
                  />
                  
              </div>
              <div className='info'>
                <div className='div1'>
                  <label htmlFor="tipo">CC/NIT:</label>
                  <select select name="Identificacion" id="lang"
                      {...register("tipo", { required: true })}
                      aria-invalid={errors.tipo ? "true" : "false"}
                    >
                    
                  <option value="Selecciona">Selecciona:</option>
                  <option value="cc.">CC.</option>
                  <option value="nit">NIT</option>
                  </select>
                </div>
                <div className='div2'>
                  <label htmlFor="numId">Numero de Identificacion:</label>
                  <input type="number"
                      {...register("numId", { required: true, maxLength: 30 })}
                      aria-invalid={errors.numId ? "true" : "false"}
                  />
                  
                </div>
              </div>
              <div className='nombreycorreo'>
                <label htmlFor="direccionrecogida">Direccion de recogida:</label>
                <input type= 'text'
                    {...register("direccionrecogida", { required: true, maxLength: 60 })}
                    aria-invalid={errors.direccionrecogida ? "true" : "false"}
                />
                
              </div>
              <div className='info'>
                <div className='div1'>
                  <label htmlFor="ciudad">Ciudad:</label>
                  <select name="Ciudad" id="lang"
                      {...register("ciudad", { required: true})}
                      aria-invalid={errors.ciudad ? "true" : "false"}
                  >
                    
                  <option value="Selecciona">Selecciona:</option>
                  <option value="Bogota">Bogota</option>
                  <option value="Barranquilla">Barranquilla</option>
                  </select>
                </div>
                <div className='div2'>
                  <label htmlFor="telefono">Telefono:</label>
                  <input type="number" 
                    {...register("telefono", { required: true, minLength:  10})}
                    aria-invalid={errors.telefono ? "true" : "false"}
                  />
                 
                </div>
              </div>
              <div className='info'>
                <div className='div1'>
                  <label htmlFor="fecha">Fecha:</label>
                  <input
                        type="date"
                        {...register("fecha", { required: false })}
                        aria-invalid={errors.fecha ? "true" : "false"}
                    />
                  
                </div>
                <div className='div2'>
                  <label htmlFor="hora">Hora:</label>
                  <input type="time"
                  {...register("hora", { required: true})}
                  aria-invalid={errors.hora ? "true" : "false"}
                  />
                 
                </div>
              </div>
            </div>

            <div className='encomienda'>
              <h3 className='titulos'>Que envia?</h3>
              <div className='info'>
                <div className='div3'>
                  <label htmlFor="tipodeencomienda">Tipo de encomienda:</label>
                  <select name="TipoEnc" id="lang"
                    {...register("tipodeencomienda", { required: true})}
                    aria-invalid={errors.tipodeencomienda ? "true" : "false"}
                  >
              
                  <option value="Selecciona">Selecciona:</option>
                  <option value="1">Sobre</option>
                  <option value="2">Paquete</option>
                  </select>
                </div>
                <div className='div4'>
                  <label htmlFor="cantidad">Cantidad:</label>
                  <input type="number"
                  {...register("cantidad", {required: true})}
                  aria-invalid={errors.cantidad ? "true" : "false"}
                  />
                </div>
              </div>
              <h6 className='title' >Dimensiones:</h6>

              <div className='dimensiones'>

                <div className='medidas'>
                    <div className='divlabel1'><label htmlFor="largo">Largo:</label></div>
                    <div className='divinput'><input type="number" 
                    {...register("largo", { required: true,  })}
                    aria-invalid={errors.largo ? "true" : "false"}
                    />
                    
                    </div> 
                    <div className='divlabel2'><label htmlFor="cms">cms</label></div>
                </div>

                <div  className='medidas'>
                    <div className='divlabel1'><label htmlFor="ancho">Ancho:</label></div>
                    <div className='divinput'><input type="number"
                    {...register("ancho", { required: true, })}
                    aria-invalid={errors.ancho? "true" : "false"}
                    /> 
                    
                    </div>
                    <div className='divlabel2'><label htmlFor="cms">cms</label></div>
                </div>
                <div  className='medidas'>
                    <div className='divlabel1'><label htmlFor="alto">Alto:</label></div>
                    <div className='divinput'><input type="number" 
                    {...register("alto", { required: true, })}
                    aria-invalid={errors.alto ? "true" : "false"}
                    /> 
                    
                    </div>
                    <div className='divlabel2'><label htmlFor="">cms</label></div>
                </div>
                <div  className='medidas'>
                    <div className='divlabel1'><label htmlFor="peso">Peso:</label></div>
                    <div className='divinput'><input type="number"
                    {...register("peso", { required: true,})}
                    aria-invalid={errors.peso? "true" : "false"}
                    /> 
                    </div>
                    <div className='divlabel2'><label htmlFor="kg">kg</label></div>
                </div>

                <div className='tipo'>
                  <div className='titulo'>
                    <label htmlFor="radio">Delicado:</label>
                  </div>
                  <div className='radiobtn1'>
                    <input type="radio" id="si" name="fav_language" value="si"
                      /* {...register("delicado", { required: true, })}
                      aria-invalid={errors.delicado ? "true" : "false"} */
                    />
                     

                    <label htmlFor="radio" >Si</label><br/>
                  </div>
                  <div className='radiobtn1'>
                    <input type="radio" id="no" name="fav_language" value="no"
                      /* {...register("delicado", { required: true, })}
                      aria-invalid={errors.delicado ? "true" : "false"} */
                    />
                    <label htmlFor="no">No</label><br/>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='recibe'>
              <h3 className='titulos'>Quien recibe?</h3>
              <div className='nombreycorreo'>
                <label htmlFor="nombreReceptor">Nombre completo:</label>
                <input type= 'text'
                {...register("nombreReceptor", { required: true, maxLength: 60 })}
                aria-invalid={errors.nombreReceptor  ? "true" : "false"}
                
                />
     
              </div>
              <div className='info'>
                <div className='div1'>
                  <label htmlFor="tipoIdReceptor">CC/NIT:</label>
                  <select name="Identificacion" id="lang"
                    {...register("tipoIdReceptor", { required: true,})}
                    aria-invalid={errors.tipoIdReceptor ? "true" : "false"}
                  >
        
                  <option value="Selecciona">Selecciona:</option>
                  <option value="cc.">CC.</option>
                  <option value="nit">NIT</option>
                  </select>
                </div>
                <div className='div2'>
                  <label htmlFor="numeroIdReceptor">Numero de Identificacion:</label>
                  <input type="text" 
                    {...register("numeroIdReceptor", { required: true, maxLength: 20 })}
                    aria-invalid={errors.numeroIdReceptor ? "true" : "false"}
                  />
   
                </div>
              </div>
              <div className='nombreycorreo'>
                <label htmlFor="direccionrecogida">Direccion de recogida:</label>
                <input type= 'text'
                  {...register("direccionrecogida", { required: true, maxLength: 60 })}
                  aria-invalid={errors.direccionrecogida ? "true" : "false"}
                />

              </div>
              <div className='info'>
                <div className='div1'>
                  <label htmlFor="ciudadReceptor">Ciudad:</label>
                  <select name="ciudadReceptor" id="lang"
                    {...register("ciudadReceptor", { required: true,})}
                    aria-invalid={errors.ciudadReceptor ? "true" : "false"}
                  >
    
                  <option value="S1elecciona">Selecciona:</option>
                  <option value="Bogota">Bogota</option>
                  <option value="Barranquilla">Barranquilla</option>
                  </select>
                </div>
                <div className='div2'>
                  <label htmlFor="telefonoReceptor">Telefono:</label>
                  <input type="number"
                    {...register("telefonoReceptor", { required: true, minLength: 10 })}
                    aria-invalid={errors.telefonoReceptor ? "true" : "false"}
                  />

                </div>
              </div>

              <div className='btn-container'>
                <input className='btn' type='submit' value='Crear Orden'/>
              </div>
            </div>
            
        </form>
        

    </div>
    )
}

export default IngresaOrden