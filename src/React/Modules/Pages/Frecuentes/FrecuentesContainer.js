import { Fragment, useEffect, useState } from "react"
import EventoContainer from "../Evento/EventoContainer";


const FrecuentesContainer = ({eventList}) => {

    const [hoy, setHoy] = useState(new Date());

    useEffect(() => {
        console.log("eventList", eventList)
    },[])
    
    return (

        <div className="backgroundPages bg-frecuentes">
            <p style={{ fontSize: 35 }} className="chaknuul">Eventos Frecuentes</p>
            <p style={{ fontSize: 16, color: "white", textAlign: "justify" }}>Forma parte de nuestras clases y actividades dinámicas, Eventos diseñados para ofrecerte un espacio de aprendizaje, interacción y crecimiento personal.</p>
            {
                eventList && eventList.filter((e) => e.tipo == 'clase' && e.fecha > new Date()).map((event, key) => {return (<EventoContainer event={event} key={key}></EventoContainer>) })
            }
        </div>
    )
}

export default FrecuentesContainer;