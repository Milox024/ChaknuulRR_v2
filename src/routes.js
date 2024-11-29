import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseContainer from "./React/Modules/Base/BaseContainer";
import HomeContainer from "./React/Modules/Pages/Home/HomeContainer";
import PrincipalContainer from "./React/Modules/Pages/Principal/PrincipalContainer";
import HeaderContainer from "./React/Modules/Base/HeaderContainer";

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
            </Routes>
        </BrowserRouter>
    )
}