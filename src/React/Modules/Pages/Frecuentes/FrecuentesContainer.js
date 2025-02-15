import { Fragment, useEffect, useState } from "react"
import EventoContainer from "../Evento/EventoContainer";
import { useSelector } from "react-redux";


const FrecuentesContainer = () => {
    
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

        <div className="backgroundPages bg-frecuentes">
            <p style={{ fontSize: 35 }} className="chaknuul">Clases y Talleres</p>
            <p style={{ fontSize: 16, color: "white", textAlign: "justify" }}>Forma parte de nuestras clases y actividades dinámicas, Eventos diseñados para ofrecerte un espacio de aprendizaje, interacción y crecimiento personal.</p>
            {
                eventList && eventList.filter((e) => e.tipo == 3).map((event, key) => {return (<EventoContainer event={event} key={key}></EventoContainer>) })
            }
            {
                eventList.filter((e) => e.tipo == 3).length == 0 &&
                
                <div className="eventosMovilCard" style={{ backgroundImage: `url("/images/frecuentes.png")` }}>
                        <div className="eventosMovilCart-whats">
                            <a href="https://wa.me/5611035720?text=Hola, Me interesan las clases que organiza Chakúul" className="" target="_blank">
                                <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp; Mas Información</i>
                            </a>
                        </div>
                </div>
            }
        </div>
    )
}

export default FrecuentesContainer;