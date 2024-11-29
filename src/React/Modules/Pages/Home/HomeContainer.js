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
    <div className="snap-container">
      <div className="flex-left">
        <img src="images/chaknuul-logo.svg" alt="" className="logoPresentacion" />
        <p className="chaknuul-main">Chaknúul</p>
        <h5 className="lema-main">Ser tú es suficiente.</h5>
        <p className="lema-main onlyPc">Grupo Nudista para Hombres en Ciudad de México, donde fomentamos la aceptación del cuerpo de manera natural a través de actividades físicas, recreativas, viajes y esparcimiento.</p>
      </div>
      <GridContainer ></GridContainer>
    </div>
  );
};

export default HomeContainer;