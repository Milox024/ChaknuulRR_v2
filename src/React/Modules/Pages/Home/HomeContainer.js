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
      <img src="images/chaknuul-logo.svg" alt="" style={{ width: 120}} />
      <p className="chaknuul-main">Chaknúul</p>
      <h5 className="lema-main">Ser tú es suficiente.</h5>
      <GridContainer ></GridContainer>
    </div>
  );
};

export default HomeContainer;