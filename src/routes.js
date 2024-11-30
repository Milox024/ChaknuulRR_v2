import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseContainer from "./React/Modules/Base/BaseContainer";
import HomeContainer from "./React/Modules/Pages/Home/HomeContainer";
import HeaderContainer from "./React/Modules/Base/HeaderContainer";
import EventoContainer from "./React/Modules/Pages/Principal/PrincipalContainer";
import PrincipalContainer from "./React/Modules/Pages/Principal/PrincipalContainer";
import ViajesContainer from "./React/Modules/Pages/Viajes/ViajesContainer";
import EspecialesContainer from "./React/Modules/Pages/Especiales/EspecialesContainer";
import FrecuentesContainer from "./React/Modules/Pages/Frecuentes/FrecuentesContainer.js";

export default function routerApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <BaseContainer>
                        <HomeContainer /> 
                    </BaseContainer>
                    } 
                />
                <Route path="/principal" element={
                    <BaseContainer>
                        <HeaderContainer>
                            <PrincipalContainer /> 
                        </HeaderContainer>
                    </BaseContainer>
                    } 
                />
                <Route path="/viajes" element={
                    <BaseContainer>
                        <HeaderContainer>
                            <ViajesContainer /> 
                        </HeaderContainer>
                    </BaseContainer>
                    } 
                />
                <Route path="/especiales" element={
                    <BaseContainer>
                        <HeaderContainer>
                            <EspecialesContainer /> 
                        </HeaderContainer>
                    </BaseContainer>
                    } 
                />
                <Route path="/frecuentes" element={
                    <BaseContainer>
                        <HeaderContainer>
                            <FrecuentesContainer /> 
                        </HeaderContainer>
                    </BaseContainer>
                    } 
                />
                <Route path="/Evento/:id" element={
                    <BaseContainer>
                        <HeaderContainer>
                            <FrecuentesContainer /> 
                        </HeaderContainer>
                    </BaseContainer>
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}