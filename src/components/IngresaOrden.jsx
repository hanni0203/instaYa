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
              <h3>Quien envia?</h3>
              <div className='nombreycorreo'>
                <label>Nombre completo:</label>
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
                  <label htmlFor="">Numero de Identificacion:</label>
                  <input type="text" />
                </div>
              </div>
              <div className='nombreycorreo'>
                <label>Direccion de recogida:</label>
                <input type= 'text'/>
              </div>
              <div className='info'>
                <div>
                  <label for="lang">Ciudad:</label>
                  <select name="Ciudad" id="lang">
                  <option value="Selecciona">Selecciona:</option>
                  <option value="1">Bogota</option>
                  <option value="2">Barranquilla</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Telefono:</label>
                  <input type="number" />
                </div>
              </div>
              <div className='info'>
                <div>
                  <label for="lang">Fecha:</label>
                  <input type="date" />
                </div>
                <div>
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
              <h3>Que envia?</h3>
              <div className='info'>
                <div>
                  <label for="lang">Tipo de encomienda:</label>
                  <select name="TipoEnc" id="lang">
                  <option value="Selecciona">Selecciona:</option>
                  <option value="1">Sobre</option>
                  <option value="2">Paquete</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Cantidad:</label>
                  <input type="number" />
                </div>
              </div>
              <div className='dimensiones'>
                <h6>Dimensiones:</h6>

                <div>
                    <label htmlFor="">Largo:</label>
                    <input type="text" /> <label htmlFor="">cms</label>
                </div>

                <div>
                    <label htmlFor="">Ancho:</label>
                    <input type="text" /> <label htmlFor="">cms</label>
                </div>
                <div>
                    <label htmlFor="">Alto:</label>
                    <input type="text" /> <label htmlFor="">cms</label>
                </div>
                <div>
                    <label htmlFor="">Peso:</label>
                    <input type="text" /> <label htmlFor="">kg</label>
                </div>

                <div>
                    <div>
                        <label htmlFor="">Delicado:</label>
                        <label htmlFor="">Si</label><input type="radio" />
                        <label htmlFor="">No</label><input type="radio" />
                    </div>
                </div>
              </div>

            </div>

            <div className='recibe'>
              <h3>Quien recibe?</h3>

            </div>

            
        </form>
    </div>
  )
}
