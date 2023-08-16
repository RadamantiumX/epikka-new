import React, { useEffect, useState } from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import PortFolioContent from "../components/portfolio/PortFolioContent";
import axiosClient from "../axios-client";

export default function PortFolioPage() {
    const [url, setUrl] = useState(
        {url:'Portafolio'}
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
        <HeaderDefault params={'portfolio'}/>
        <PortFolioContent/>
        </>
    )
    
}