import { Fragment, useEffect } from "react"


const PrincipalContainer = ({eventList}) => {

    useEffect(() => {
        console.log("eventList", eventList)
    },[]) 


    return (
        <div className="backgroundMain bg-principal">
            <div className="contenidoPrincipal">
                <div className="imagenPrincipal" style={{ backgroundImage: `url('./images/principal/zipolite-banner.png')` }}>
                {
                    /*
                    <span className="tituloPrincipal">Zipolite</span>
                    <span className="descPrincipal">Encuentro Nudista 2025</span>
                    */
                }
                </div>
                <div className="infoPrincipal">
                    <h6 style={{ textAlign: "center" }}>¡Únete al Encuentro Nudista 2025 en Zipolite!</h6>
                    <p style={{ fontSize: 10 }}>¿Por qué con CHAKNÚUL?<br></br>
                    Viajar en grupo es más divertido, y con CHAKNÚUL mucho mas, disfrutarás de una experiencia única</p>
                    
                    <span className="h7">Te Ofrecemos</span>
                    <lu style={{ fontSize: 10 }}>
                        <li>Transporte cómodo de ida y vuelta.</li>
                        <li>Vamos a vivir la aventura del campamento en la playa.</li>
                        <li>Convivencia y buena vibra desde el viaje</li>
                        <li>Ambiente seguro y divertido con el mejor grupo nudista masculino en México, CHAKNÚUL.</li>
                    </lu>
                    <span className="h7">Itinerario</span>
                    <lu style={{ fontSize: 10 }}>
                        <li>Salida, 30 Ene 8:00 pm Metro General Anaya</li>
                        <li>Llegada 31 Ene 7:00 am</li>
                        <li>Regreso 02 Feb 8:00 pm</li>
                        <li>Transporte en Autobús</li>
                    </lu>
                    <a href="https://wa.me/5611035720?text=Hola, Me interesa 'Zipolite 2025', Me puedes dar más información" className="whatsapp" target="_blank">
                        <i className="fa fa-whatsapp whatsapp-icon fa-1x"> Me apunto</i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PrincipalContainer;