import { useParams } from "react-router-dom"
import Orden from "./Orden.jsx"
import { useState, useEffect } from "react" 
import axios from 'axios'
import dateFormat from "dateformat"

const ActualizarOrden = ()=>{

    const { id } = useParams()
    const [orden, setOrden] = useState(null)

    useEffect(()=>{
      axios
      .get("http://localhost:5000/orden/" + id)
      .then(response => {
        console.log(response.data.data)
        const fecha = response.data.data.fechaEmisor
        response.data.fechaEmisor = dateFormat(fecha, "yyyy-mm-dd")
        setOrden(response.data)
    })
}, [])

    return(
      <>
        {orden ? (
                <>
                    <Orden data ={orden} idOrden={id} />
                </>
            ) : ''}
      </>
    )
}

export default ActualizarOrden