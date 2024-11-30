import { Fragment, useEffect } from "react";
import EventoContainer from "../Evento/EventoContainer";


const ViajesContainer = ({eventList}) => {

    useEffect(() => {
        console.log("eventList", eventList)
    },[]) 

    return (

        <div className="backgroundPages bg-viajes">
            <p style={{ fontSize: 35 }} className="chaknuul">Viajes</p>
            <p style={{ fontSize: 18, color: "white", textAlign: "justify" }}>¿Estás listo para una experiencia única llena de aventura, interacción y nuevas amistades?, Unete a nuestras escapadas de la ciudad</p>
            {
                eventList.filter((e) => e.tipo == 'viaje').map((event, key) => {return (<EventoContainer event={event} key={key}></EventoContainer>) })
            }
        </div>
    )
}

export default ViajesContainer;