import { Fragment, useEffect } from "react"
import CardActivityContainer from "./Snaps/CardActivityContainer"



const GridContainer = ({setSnapActual}) => {

    const listaActividades = 
    [
        {
            id: 1,
            actividad: "Proximo",
            img:"proximo.png",
            tag: "#proximo"
        },
        {
            id: 2,
            actividad: "Especiales",
            img:"especiales.png",
            tag: "#especiales"
        },
        {
            id: 3,
            actividad: "Viajes",
            img:"viajes.png",
            tag: "#viajes"
        },
        {
            id: 4,
            actividad: "Proyectos",
            img:"proyectos.png",
            tag: "#proyectos"
        },
        {
            id: 5,
            actividad: "Frecuentes",
            img:"frecuentes.png",
            tag: "#frecuentes"
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

    useEffect(() => {
        console.log("listaActividades", listaActividades)
    },[])

    return (
        <div>
            <hr></hr>
            <h6>Disfruta con nosotros nuestras actividades y colaboraciones</h6>
            <div className="grid-container grid-container--fill">
                {
                    listaActividades && listaActividades.map((act, index) => 
                        <CardActivityContainer
                            activity={act}
                            key={index}
                            setSnapActual={setSnapActual}
                        ></CardActivityContainer>
                    )
                }
            </div>
        </div>
    )
}

export default GridContainer;