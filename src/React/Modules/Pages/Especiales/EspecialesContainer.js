import { Fragment, useEffect } from "react"
import EventoContainer from "../Evento/EventoContainer"


const EspecialesContainer = ({eventList}) => {
    

    return (
        <div className="backgroundPages bg-especiales">
            <p style={{ fontSize: 35 }} className="chaknuul">Eventos especiales</p>
            <p style={{ fontSize: 15, color: "white", textAlign: "justify" }}>Cuando la ocasión lo amerita, celebramos las fechas importantes del año, únete a la comunidad chaknúul y comparte los eventos importantes del año</p>
            {
                eventList && eventList.filter((e) => e.tipo == 'especial').map((event, key) => {return (<EventoContainer event={event} key={key}></EventoContainer>) })
            }
        </div>
    )
}


export default EspecialesContainer;