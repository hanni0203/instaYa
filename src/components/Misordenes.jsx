import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import '../assets/css/misordenes.css'

const labels = [
    "Código rastreo",
    "Fecha recogida",
    "Ciudad destino",
    "Direccion destino",
    "Estado"
]

const  Misordenes = () => {

    const [ordenes, setOrdenes] = useState(null)
    const [crea, setpost] = useState(false)
    useEffect(()=>{
        const userId = '638c034c72354a46ce9f1df6'
        axios
        .get('http://localhost:5000/orden?userId=' + userId)
            .then((response) =>{
                console.log(response.data.data)
                setOrdenes(response.data.data)
        })
    },[]);

    return (

        <div className='principal'>
            <div className='titulomisordenes'>
                <div>
                    <h1> Mis Ordenes</h1>
                </div>

                <div>
                   {/*  <img src="src/assets/img/misordenes.png" alt="" /> */}
                </div> 
            </div>
            <div className='ordenescodigo'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {labels.map((label, index)=>{
                                return(
                                    <th scope="col" key={index}>{label}</th>  
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {ordenes !== null ? ordenes.map((orden, index)=>{
                            return(
                                <tr key = {index}>
                                    <td scope="row"><Link to={'/actualizarOrden/'+orden._id+'/edit'}>{index}</Link></td>
                                    <td>{orden.fechaEmisor }</td>
                                    <td>{orden.ciudadReceptor}</td>
                                    <td>{orden.direccioReceptor}</td>
                                    <td className='text-success'>{orden.estado}</td>
                                    <td >
                                    <Link className="btn btn-primary books-home__create" to={'/IngresaOrden/'+'create'}>Create</Link>
                                    </td>

                                </tr>
                            )
                        }) : ''}
                    </tbody>
                </table>
            </div>
        </div>             
    )
}
export default Misordenes
