import React from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import ContactContent from "../components/contact/ContactContent";


export default function ContactPage() {
    return(
        <>
        <HeaderDefault params={'contact'}/>
        <ContactContent/>
        </>
    )
    
}