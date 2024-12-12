import React, { useEffect, useState } from "react";


const HeaderContainer = (props) => {

    const [eventList, setEventList] = useState([])

    useEffect(() => {
        setEventList(props.eventList);
    },[])


    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
            <a className="navbar-brand chaknuul-navbar" href="/">
                <img src="/images/chaknuul-logo.svg" width="40" height="40" className="d-inline-block align-center" alt="" />
                &nbsp;Inicio
            </a>
            {
                /*
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                */
            }
        </nav>

        {React.cloneElement(props.children, { eventList })}
        
    </div>
    )
}

export default HeaderContainer;