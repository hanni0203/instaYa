import { useParams } from "react-router-dom"
import Orden from "./orden.jsx"
import { useState, useEffect } from "react" 
import axios from 'axios'
import dateFormat from "dateformat"

const ActualizarOrden = ()=>{

    const { id } = useParams()
    const [orden, setOrden] = useState(null)

    useEffect(()=>{
      axios
      .get("http://localhost:4000/Orden/" + id)
      .then(response => {
        console.log(response.data.data)
        const fecha = response.data.data.fecha
        response.data.data.fecha = dateFormat(fecha, "yyyy-mm-dd")
        setOrden(response.data.data)
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