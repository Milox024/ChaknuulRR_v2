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
            actividad: "Eventos",
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
            actividad: "Talleres",
            img:"frecuentes.png",
            tag: "/frecuentes"
        }
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
                    <a href="https://wa.me/5611035720?text=Hola, Me interesa el Viaje a Morelos" className="" target="_blank">
                        <div className="customCard" style={{ backgroundImage: `url("/images/principal/finde.png")` }}>
                            <div className="trans-main">
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