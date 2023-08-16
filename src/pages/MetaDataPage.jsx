import React, { useEffect, useState } from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import MetaDataContent from "../components/metadata/MetaDataContent";
import axiosClient from "../axios-client";

export default function MetaDataPage() {
    const [url, setUrl] = useState(
        {url:'Metadata'}
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
        <HeaderDefault params={'metadata'}/>
        <MetaDataContent/>
        </>    
    )
    
}