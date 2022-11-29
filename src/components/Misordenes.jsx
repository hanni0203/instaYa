import React from 'react'
import '../assets/css/misordenes.css'

import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

export default function titulomisordenes () {
    const { id } = useParams()


    return (

        <div className='principal'>
            <div className='titulomisordenes'>
                <div>
                <h1> #{id} Mis Ordenes</h1>
                </div>

                <div>
                    <img src="src/assets/img/misordenes.png" alt="" />
                </div> 
            </div>
            
            <div className='ordenescodigo'>

                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Codigo de Rastreo</th>
                        <th scope="col">Fecha de recogida</th>
                        <th scope="col">Dirección de destino</th>
                        <th scope="col">Ciudad de destino</th>
                        <th scope="col">Estado Orden</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>guardado</td>
                        </tr>

                        <tr>
                            <th scope="row">1</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                           
                            <td> cumplido</td>
                        </tr>
                      
                    </tbody>

                    <div className='botonestabla'>                    
                       <button><Link to="/ingresaorden">Ingresar Orden</Link> </button>  
                       
                    </div>

                </table>

              
                <div className='contenedororden'>

                    <div className='tituloFormorden'>
                        <div><h2>Orden No.</h2></div>
                    </div> 

                    <div className='nombreorden'>
                        
                        
                        <div className='datos'>
                            
                            <div className='nombreycorreo'>
                                <label>Nombre completo:</label>
                                <input type= 'text'/>
                            </div>
                            <div className='info'>
                                <div className='div1'>
                                <label for="lang">CC/NIT:</label>
                                <select name="Identificacion" id="lang">
                                <option value="Selecciona">Selecciona:</option>
                                <option value="cc.">CC.</option>
                                <option value="nit">NIT</option>
                                </select>
                                </div>
                                <div className='div2'>
                                <label htmlFor="">Numero de Identificacion:</label>
                                <input type="text" />
                                </div>
                            </div>

                            <div className='nombreycorreo'>
                                <label>Direccion de recogida:</label>
                                <input type= 'text'/>
                            </div>

                            <div className='info'>
                                <div className='div1'>
                                <label for="lang">Ciudad de recogida:</label>
                                <select name="Ciudad" id="lang">
                                <option value="Selecciona">Selecciona:</option>
                                <option value="1">Bogota</option>
                                <option value="2">Barranquilla</option>
                                </select>
                                </div>
                                <div className='div2'>
                                <label htmlFor="">Telefono:</label>
                                <input type="number" />
                                </div>
                            </div>

                            <div className='nombreycorreo'>
                                <label>Direccion de Destino:</label>
                                <input type= 'text'/>
                            </div>

                            <div className='info'>
                                <div className='div1'>
                                <label for="lang">Ciudad de Destino:</label>
                                <select name="Ciudad" id="lang">
                                <option value="Selecciona">Selecciona:</option>
                                <option value="1">Bogota</option>
                                <option value="2">Barranquilla</option>
                                </select>
                                </div>
                                <div className='div2'>
                                <label htmlFor="">Telefono:</label>
                                <input type="number" />
                                </div>
                            </div>


                            <div className='info'>
                                <div className='div1'>
                                <label for="lang">Fecha:</label>
                                <input type="date" />
                                </div>
                                <div className='div2'>
                                <label htmlFor="">Hora:</label>
                                <select name="Hora" id="lang">
                                <option value="Selecciona">Selecciona:</option>
                                <option value="1">08:00</option>
                                <option value="2">09:00</option>
                                </select>
                                </div>
                            </div>
                        </div> 
                           

                            

                            <div className='dimensiones'>
                                
                                <h6 className='title'>Dimensiones:</h6>
                                <br/>
                                <div className='medidas'>
                                    <div className='divlabel1'><label htmlFor="">Largo:</label></div>
                                    <div className='divinput'><input type="text" /></div> 
                                    <div className='divlabel2'><label htmlFor="">cms</label></div>
                                </div>

                                <div  className='medidas'>
                                    <div className='divlabel1'><label htmlFor="">Ancho:</label></div>
                                    <div className='divinput'><input type="text" /> </div>
                                    <div className='divlabel2'><label htmlFor="">cms</label></div>
                                </div>
                                <div  className='medidas'>
                                    <div className='divlabel1'><label htmlFor="">Alto:</label></div>
                                    <div className='divinput'><input type="text" /> </div>
                                    <div className='divlabel2'><label htmlFor="">cms</label></div>
                                </div>
                                <div  className='medidas'>
                                    <div className='divlabel1'><label htmlFor="">Peso:</label></div>
                                    <div className='divinput'><input type="text" /> </div>
                                    <div className='divlabel2'><label htmlFor="">kg</label></div>
                                </div>

                                <div className='tiporadio'>
                                    <div className='titulo'>
                                        <label htmlFor="">Delicado:</label>
                                    </div>
                                    <div className='radiobtn2'>
                                        <input type="radio" id="si" name="fav_language" value="si"/>
                                        <label for="si">Si</label><br/>
                                    </div>
                                    <div className='radiobtn2'>
                                        <input type="radio" id="no" name="fav_language" value="no"/>
                                        <label for="no">No</label><br/>
                                    </div>
                                </div>
                        
                            </div>
                    </div>

                        <div className='tipocantidadestado'>
                            <div >
                                <label htmlFor="">Tipo de Encomienda</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Cantidad:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Estado Orden:</label>
                                <input type="text" />
                            </div>

                        </div>
                        
                        <div className='btn-container'>
                            <button className='btn' type='submit'>Cancelar Orden</button>
                        </div>
                    
                   
                
                
                </div>



            </div>
        </div>             
        
      
       
    )
}
