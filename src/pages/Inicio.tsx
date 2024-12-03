import Slider from "../components/Slider.tsx";
import VehicleBrands from "../components/VehicleBrands.tsx";
import Footer from "../components/Footer.tsx";
import Requisitos from "../components/Requisitos.tsx";
import React from "react";

const Inicio: React.FC = () => {
    return (
        <>
            <Slider/>
            <VehicleBrands/>
            <Requisitos/>
            <Footer/>
        </>
    )
}
export default Inicio;