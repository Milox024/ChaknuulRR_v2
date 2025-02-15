import { Fragment, useEffect, useState } from "react"

//{this.props.match.params.id}

const EventoContainer = ({event}) => {

    const [fontSize, setFontSize] = useState(0);
    const [incluye, setIncluye] = useState([]);
    const [actividades, setActividades] = useState([]);
    const [itinerario, setItinerario] = useState([]);

    const handleclickMoreInfo = (id) => {
        console.log("idClick", id)
        var panel = document.getElementById(`divinfo${event.id}`)
        if(panel.className.includes("active")){
            panel.style.display = "none";
            panel.classList.remove("active")
            document.getElementById("lectura").text = "Ver más"
        }
        else
        {
            panel.style.display = "inline";
            panel.style.padding = "5px";
            panel.classList.add("active")
            document.getElementById("lectura").text = "Ver menos"
        }
    }

    useEffect(() => {
        var valores = 0;
        if(event.objetivo !== "") valores++;
        if(event.incluye !== "") {
            valores++;
            setIncluye(event.incluye.split("*"));
        }
        if(event.actividades !== "") {
            valores++;
            setActividades(event.actividades.split("*"));
        }
        if(event.itinerario !== "") {
            valores++;
            setItinerario(event.itinerario.split("*"));
        }
        if(event.comentarios !== "") valores++;
        if(event.llamada !== "") valores++;
        setFontSize(15-valores);
    }, [event])

    
    const getFechaFormateada = (fecha) => {
        var date = new Date(fecha);
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
        return ("0" + date.getDate()).slice(-2) + " " + meses[date.getMonth()].slice(0,3) + " " + date.getFullYear();
    }   

    return (
        <div className="divEventoMarco">
            <div className="divEvento">
            <div className="divEventoImg" style={{backgroundImage: `url('eventimages/${event.imagen}')` }}></div>
            <div className="divEventoDesc">
                <h5 className="chaknuul-sm">{event.titulo}</h5>
                <p style={{ fontSize: 10 }}>
                {getFechaFormateada(event.fecha)} - {event.lugar}
                </p>
                <a id="lectura" style={{ textDecoration: "pointer" }} onClick={(e) => { handleclickMoreInfo(event.id) }}>Ver mas</a>
                <div className="panel" id={`divinfo${event.id}`} style={{ textAlign: "justify", fontSize: fontSize }}>
                <hr></hr>
                <p>{event.informacion}</p>
                {
                    event.objetivo !== "" && (
                        <p>
                            <h6 className="chaknuul-smm">Objetivo</h6>
                            {event.objetivo}
                        </p>
                    )
                }
                {
                    event.incluye !== "" && (
                        <p>
                            <h6 className="chaknuul-smm">Incluye</h6>
                            <ul>
                            {
                                incluye.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))
                            }
                            </ul>
                        </p>
                    )
                }
                {
                    event.actividades !== "" && (
                        <p>
                            <h6 className="chaknuul-smm">Incluye</h6>
                            <ul>
                            {
                                actividades.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))
                            }
                            </ul>
                        </p>
                    )
                }
                {
                    event.itinerario !== "" && (
                        <p>
                            <h6 className="chaknuul-smm">Itinerario</h6>
                            <ul>
                            {
                                itinerario.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))
                            }
                            </ul>
                        </p>
                    )
                }
                {
                    event.comentarios !== "" && <p>{event.comentarios}</p>
                }
                {
                    event.llamada !== "" && <p>{event.llamada}</p>
                }
                <p></p>
                </div>
                <br></br>
                <a href={`https://wa.me/5611035720?text=Hola, Me interesa '${event.titulo}', Me puedes dar más información`} className="whatsapp-evento" target="_blank">
                    <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp;&nbsp;Quiero apartar mi lugar</i>
                </a>
                <br></br>
                
            </div>
            </div>
        </div>
    )
}

export default EventoContainer;