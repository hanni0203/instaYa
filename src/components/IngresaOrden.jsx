import '../assets/css/ingresaOrden.css'
import Orden from './orden'
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


const IngresaOrden = ()=>{

    return(
      <>
      <h2>formulario para crear la orden</h2> 
      <Orden datos={[]}/>
      </>
    )
}

export default IngresaOrden