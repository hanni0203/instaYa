import React from 'react'
import '../assets/css/ingresaOrden.css'

export default function IngresaOrden() {
  return (
    <div>
        <div className='tituloIngresaOrden'>
            <div><h1>Ingresa tu orden</h1></div>
            <div><img src="src/assets/img/IngresaOrden.png" alt="" align= "right"/></div>
        </div>  
        <br/>
        <form className='ingresaOrden'>
            <div className='envia'>
              <h3 className='titulos'>Quien envia?</h3>
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
                  <label for="lang">Ciudad:</label>
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

            <div className='encomienda'>
              <h3 className='titulos'>Que envia?</h3>
              <div className='info'>
                <div className='div3'>
                  <label for="lang">Tipo de encomienda:</label>
                  <select name="TipoEnc" id="lang">
                  <option value="Selecciona">Selecciona:</option>
                  <option value="1">Sobre</option>
                  <option value="2">Paquete</option>
                  </select>
                </div>
                <div className='div4'>
                  <label htmlFor="">Cantidad:</label>
                  <input type="number" />
                </div>
              </div>
              <h6 className='title'>Dimensiones:</h6>

              <div className='dimensiones'>

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

                <div className='tipo'>
                  <div className='titulo'>
                    <label htmlFor="">Delicado:</label>
                  </div>
                  <div className='radiobtn1'>
                    <input type="radio" id="si" name="fav_language" value="si"/>
                    <label for="si">Si</label><br/>
                  </div>
                  <div className='radiobtn1'>
                    <input type="radio" id="no" name="fav_language" value="no"/>
                    <label for="no">No</label><br/>
                  </div>
                </div>

              </div>

            </div>

            <div className='recibe'>
              <h3 className='titulos'>Quien recibe?</h3>
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
                  <label for="lang">Ciudad:</label>
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

              <div className='btn-container'>
                <button className='btn' type='submit'>Ingresar</button>
              </div>

            </div>

            
        </form>
        <div className='rastreo'>
          <div className='circle'>
            <div className='circleinput'>
              <img className='imgcheck' src="src/assets/img/check.png" alt="" align= "center"/>
              <input type="text" />
              <h4 className='titulos'>Código de rastreo</h4>
            </div>
          </div>
       </div>

    </div>
  )
}
