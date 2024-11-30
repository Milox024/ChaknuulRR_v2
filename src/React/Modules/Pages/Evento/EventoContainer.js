import { Fragment, useState } from "react"

//{this.props.match.params.id}

const EventoContainer = ({event}) => {

    const [panel, setPanel] = useState(0);

    const handleclickMoreInfo = (id) => {
        console.log("idClick", id)
        var panel = document.getElementById(`divinfo${event.id}`)
        if(panel.className.includes("active")){
            panel.style.display = "none";
            panel.classList.remove("active")
        }
        else
        {
            panel.style.display = "inline";
            panel.classList.add("active")
        }
    }

    return (
        <div className="divEventoMarco">
            <div className="divEvento">
            <div className="divEventoImg" style={{backgroundImage: `url('/eventos/${event.img}.png')` }}></div>
            <div className="divEventoDesc">
                <h5>{event.titulo}</h5>
                <i class="bi bi-geo-alt-fill"></i>
                <p style={{ fontSize: 10 }}>
                    {event.lugar} - {event.fechaDescriptiva}
                </p>
                <a style={{ textDecoration: "pointer" }} onClick={(e) => { handleclickMoreInfo(event.id) }}>Ver mas</a>
                <div class="panel" id={`divinfo${event.id}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default EventoContainer;