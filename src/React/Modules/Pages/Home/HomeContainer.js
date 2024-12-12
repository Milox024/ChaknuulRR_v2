import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestHomeModuleInfo,
} from "../../../ReduxSaga/Actions/Home";
import GridContainer from "./GridContainer";

const HomeContainer = () => {
  
  const dispatch = useDispatch();

  const appReducers = {};
  appReducers.user = useSelector((state) => state.user);
  appReducers.home = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(requestHomeModuleInfo());
  },[])

  return (
    <div>
      <div className="onlyPc snap-container">
        <div className="floatingNavBar">
          <center>
          <a href="/" className="chaknuul" style={{ paddingLeft: 10 }}>
            <img src="images/chaknuul-logo.svg" alt="" className="logoPresentacion-navbar" />
          </a>
          </center>
          {/*
          <a className="chaknuul menuRight" style={{ paddingRight: 50 }}>&nbsp;</a>
          <a href="/partners" className="chaknuul menuRight" style={{ paddingRight: 30 }}>Partners</a>
          <a href="/especiales" className="chaknuul menuRight" style={{ paddingRight: 30 }}>Especiales</a>
          <a href="/frecuentes" className="chaknuul menuRight" style={{ paddingRight: 30 }}>Frecuentes</a>
          <a href="/viajes" className="chaknuul menuRight" style={{ paddingRight: 30 }}>Viajes</a>
          */}
        </div>
        <div className="PresentacionChaknuul">
          <center>
            <span className="ff-chaknuul" style={{ fontSize: 40, fontWeight: "bold" }}>Chaknúul</span>
            <p>Ser tú es suficiente.</p>
            <p style={{ fontSize: 18 }}>Grupo Nudista para Hombres en Ciudad de México, donde fomentamos la aceptación del cuerpo de manera natural a través de actividades físicas, recreativas, viajes y esparcimiento.</p>
          </center>
        </div>
        <hr></hr>
        <div className="eventosPc">
          <div className="uno" style={{ backgroundImage: `url("/images/principal/zipolite-banner-pc.png")` }}>
            <div className="cardMain">
                <a href="https://wa.me/5611035720?text=Hola, Me interesa 'Zipolite 2025', Me puedes dar más información" className="whatsapp" target="_blank">
                  <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp; Mas información</i>
                </a>
            </div>
          </div>
          <div className="dos" style={{ backgroundImage: `url("/images/frecuentes.png")` }}>
            <div className="cardMain">
                <a href="https://wa.me/5611035720?text=Hola, Me interesan las clases y actividades que organiza Chakúul" className="whatsapp" target="_blank">
                  <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp; Eventos Frecuentes</i>
                </a>
            </div>
          </div>
          <div className="tres" style={{ backgroundImage: `url("/images/viajes.png")` }}>
            <div className="cardMain">
                <a href="https://wa.me/5611035720?text=Hola, Me interesan los Viajes que organiza Chakúul" className="whatsapp" target="_blank">
                  <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp; Viajes</i>
                </a>
            </div>
          </div>
          <div className="cuatro" style={{ backgroundImage: `url("/images/fiestas.png")` }}>
            <div className="cardMain">
                <a href="https://wa.me/5611035720?text=Hola, Me interesan los Eventos que organiza Chakúul" className="whatsapp" target="_blank">
                  <i className="fa fa-whatsapp whatsapp-icon fa-1x">&nbsp; Eventos Especiales</i>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="onlyMobile snap-container">
        <div className="flex-left">
          <img src="images/chaknuul-logo.svg" alt="" className="logoPresentacion" />
          <p className="chaknuul-main">Chaknúul</p>
          <h5 className="lema-main">Ser tú es suficiente.</h5>
          <p className="lema-main onlyPc">Grupo Nudista para Hombres en Ciudad de México, donde fomentamos la aceptación del cuerpo de manera natural a través de actividades físicas, recreativas, viajes y esparcimiento.</p>
        </div>
        <GridContainer ></GridContainer>
      </div>
    </div>
  );
};

export default HomeContainer;