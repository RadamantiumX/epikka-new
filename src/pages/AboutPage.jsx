import React from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import AboutContent from "../components/about/AboutContent";


export default function AboutPage() {
    return(
        <>
        <HeaderDefault params={'about'}/>
        <AboutContent/>

        </>
    )
    
}