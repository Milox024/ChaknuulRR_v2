import { Fragment, useEffect, useState } from "react";
import EventoContainer from "../Evento/EventoContainer";
import { useSelector } from "react-redux";


const ViajesContainer = () => {
    
    const appReducers = {};
    appReducers.home = useSelector((state) => state.home);
    const [hoy, setHoy] = useState(new Date());
    const [eventList, setEventList] = useState([]);
  

    useEffect(() => {
      let home = appReducers.home?.homeModuleEs;
      if(home?.code == 100)
        {
          console.log("Eventos reducer", home.eventos.result)
          setEventList(home.eventos.result)
        }
    },[appReducers.home?.homeModuleEs])

    return (
        <div className="backgroundPages bg-viajes">
            <p style={{ fontSize: 35 }} className="chaknuul">Viajes</p>
            <p style={{ fontSize: 16, color: "white", textAlign: "justify" }}>¿Estás listo para una experiencia única llena de aventura, interacción y nuevas amistades?, Unete a nuestras escapadas de la ciudad</p>
            {
                eventList && eventList.filter((e) => e.tipo == 1 && e.fecha > new Date()).map((event, key) => {return (<EventoContainer event={event} key={key}></EventoContainer>) })
            }
            {
                eventList.filter((e) => e.tipo == 1 && e.fecha > new Date()).length == 0 &&
                
                <div className="eventosMovilCard" style={{ backgroundImage: `url("/images/viajes.png")` }}>
                        <div className="eventosMovilCart-whats">
                            <a href="https://wa.me/5611035720?text=Hola, Me interesan los Viajes que organiza Chakúul" className="" target="_blank">
                                <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp; Mas Información</i>
                            </a>
                        </div>
                </div>
            }
        </div>
    )
}

export default ViajesContainer;