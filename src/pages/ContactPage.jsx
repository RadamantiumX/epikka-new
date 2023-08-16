import React, { useEffect, useState } from "react";

import ContactContent from "../components/contact/ContactContent";
import axiosClient from "../axios-client";


export default function ContactPage() {
    const [url, setUrl] = useState(
        {url:'Escribinos'}
         );
     const [load, setLoad] = useState(true)    
 
     useEffect(()=>{
         if(load){
          axiosClient.post('/data',url)
          .then(()=>{
            setLoad(false);
          })   
         }
         
     },[])
    return(
        <>
     
        <ContactContent/>
        </>
    )
    
}