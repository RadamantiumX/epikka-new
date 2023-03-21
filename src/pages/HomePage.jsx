import React from "react";
import ComoLoHacemos from "../components/home/ComoLoHacemos";
import QueHacemos from "../components/home/QueHacemos";
import ContactUs from "../components/home/ContactUs";
import Slogan from "../components/home/Slogan";
import HomeHeader from "../components/home/HomeHeader";


export default function HomePage() {
    return(
        <>
         <HomeHeader/>
         <QueHacemos/>
         <ComoLoHacemos/>
         <Slogan/>
         <ContactUs/>
        </>
        

    )
    
}