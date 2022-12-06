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
      .get("http://localhost:3001/orden/" + id)
      .then(response => {
        console.log(response.data)
        const fecha = response.data.fecha
        response.data.fecha = dateFormat(fecha, "yyyy-mm-dd")
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