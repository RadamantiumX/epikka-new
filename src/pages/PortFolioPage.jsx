import React from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import PortFolioContent from "../components/portfolio/PortFolioContent";

export default function PortFolioPage() {
    return(
        <>
        <HeaderDefault params={'portfolio'}/>
        <PortFolioContent/>
        </>
    )
    
}