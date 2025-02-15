import { Fragment, useEffect, useState } from "react"
import EventoContainer from "../Evento/EventoContainer"
import { useSelector } from "react-redux";


const EspecialesContainer = () => {
    
    const appReducers = {};
    appReducers.home = useSelector((state) => state.home);
    const [eventList, setEventList] = useState([]);
  

    useEffect(() => {
      let home = appReducers.home?.homeModuleEs;
      if(home?.code == 100)
        {
          console.log("Eventos reducer", home.eventos.result)
          setEventList(home.eventos.result)
        }
    },[appReducers.home?.homeModuleEs])
    
    useEffect(() => {
        console.log("eventList Especiales", eventList)
    },[eventList])

    return (
        <div className="backgroundPages bg-especiales">
            <p style={{ fontSize: 35 }} className="chaknuul">Eventos</p>
            <p style={{ fontSize: 15, color: "white", textAlign: "justify" }}>Cuando la ocasión lo amerita, celebramos las fechas importantes del año, únete a la comunidad chaknúul y comparte los eventos importantes del año</p>
            {
                eventList && eventList.filter((e) => e.tipo == 1).map((event, key) => {return (<EventoContainer event={event} key={key}></EventoContainer>) })
            }
            {
                eventList.filter((e) => e.tipo == 1).length == 0 &&
                
                <div className="eventosMovilCard" style={{ backgroundImage: `url("/images/fiestas.png")` }}>
                        <div className="eventosMovilCart-whats">
                            <a href="https://wa.me/5611035720?text=Hola, Me interesan los Eventos que organiza Chakúul" className="" target="_blank">
                                <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp; Mas Información</i>
                            </a>
                        </div>
                </div>
                
            }
        </div>
    )
}


export default EspecialesContainer;