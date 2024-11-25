import { Fragment } from "react"


const CardActivityContainer = ({activity, setSnapActual}) => {

    return (
        <div className="grid-element">
            <a href={activity.tag}>
                <div className="customCard" style={{ backgroundImage: `url('./images/activities/${activity.img}')` }}>
                    <div className="trans">
                        <p className="textoPresentacion">{activity.actividad}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardActivityContainer;