import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../layoutComponent/NavBar";
import Footer from "../layoutComponent/Footer";

//Este es el contenido q comparten todas las RUTAS
//El OUTLET es la VISTA segun la RUTA

export default function GuestLayout(){
    return(
        <>
        
        <NavBar/>
          <Outlet/>
        <Footer/>
        </>
    )
}
