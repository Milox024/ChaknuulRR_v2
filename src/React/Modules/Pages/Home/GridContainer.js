import { Fragment, useEffect } from "react"
import { redirect } from "react-router-dom"



const GridContainer = () => {

    const eventoPrincipal = 
    {
        id: 1,
        actividad: "Proximo",
        img:"proximo.png",
        tag: "#proximo"
    }
    const listaActividades = 
    [
        {
            id: 2,
            actividad: "Especiales",
            img:"especiales.png",
            tag: "/especiales"
        },
        {
            id: 3,
            actividad: "Viajes",
            img:"viajes.png",
            tag: "/viajes"
        },
        {
            id: 4,
            actividad: "Frecuentes",
            img:"frecuentes.png",
            tag: "/frecuentes"
        },
        /*
        {
            id: 5,
            actividad: "Proyectos",
            img:"proyectos.png",
            tag: "#proyectos"
        },
        {
            id: 6,
            actividad: "Comunidad",
            img:"comunidad.png",
            tag: "#comunidad"
        },
        {
            id: 7,
            actividad: "Partners",
            img:"partners.png",
            tag: "#partners"
        },
        {
            id: 8,
            actividad: "Shop",
            img:"shop.png",
            tag: "#shop"
        },
        {
            id: 8,
            actividad: "Mas",
            img:"mas.png",
            tag: "#mas"
        }*/
    ]

    //-Eventos especiales 
    //-Viajes
    //-Proyectos
    //-Actividades Frecuentes
    //-Proyectos 
    //-Comunidad y blog
    //-Partners
    //-Chaknuul Shop


    return (
        <div className="eventosPresentacion">
            <hr></hr>
            <h6>Disfruta con nosotros nuestras actividades y colaboraciones</h6>
            <div className="mainEvent">
                <div className="grid-element">
                    <a href="/principal">
                        <div className="customCard" style={{ backgroundImage: `url('./images/principal/zipolite.png')` }}>
                            <div className="trans">
                                <span className="textoTitulo">Zipolite</span>
                                <br></br>
                                <span className="textoDescripcion">Encuentro Nudista 2025</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="grid-container grid-container--fill">
                {
                    listaActividades && listaActividades.map((activity, index) => 
                        <div key={index} className="grid-element">
                            <a href={activity.tag}>
                                <div className="customCard" style={{ backgroundImage: `url('./images/activities/${activity.img}')` }}>
                                    <div className="trans">
                                        <span className="textoPresentacion">{activity.actividad}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }
            </div>
            {/*
            <div className="btn-chaknuul" >
                Conoce más aqui
            </div>
            */}
        </div>
    )
}

export default GridContainer;