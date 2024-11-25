import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestHomeModuleInfo,
} from "../../ReduxSaga/Actions/Home";
import GridContainer from "./Components/GridContainer";
import HeaderContainer from "./Components/HeaderContainer";

const HomeContainer = () => {
  
  const dispatch = useDispatch();

  const appReducers = {};
  appReducers.user = useSelector((state) => state.user);
  appReducers.home = useSelector((state) => state.home);

  const [snapActual, setSnapActual] = useState("inicio")

  useEffect(() => {
    dispatch(requestHomeModuleInfo());
  },[])

  useEffect(() => {
    console.log("Cambio el snap a ", snapActual)
    var chkAsientos = document.getElementsByClassName("snap-section");
  },[snapActual])

  return (
    <div className="snap-container">
      <div className="snap-section" id="inicio">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Ser tú es suficiente.</h5>
          </div>
        </div>
        <GridContainer 
          setSnapActual={setSnapActual}
        ></GridContainer>
      </div>
      <div className="snap-section" id="proximo">
        <HeaderContainer></HeaderContainer>
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, exxxxs más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section" id="especiales">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, es más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section" id="viajes">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, es más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section" id="proyectos">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, es más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section" id="frecuentes">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, es más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section" id="comunidad">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, es más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section" id="partners">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, es más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section" id="shop">
        <div className="row">
          <div className="col-12">
            <img src="images/chaknuul-logo.svg" alt="" style={{ width: 150}} />
            <p className="chaknuul-main">Chaknúul</p>
            <h5 className="lema-main">Donde ser tú, es más que suficiente.</h5>
          </div>
        </div>
      </div>
      <div className="snap-section">
        prueba
      </div>
    </div>
  );
};

export default HomeContainer;