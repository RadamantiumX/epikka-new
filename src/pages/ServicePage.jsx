import React, { useEffect, useState } from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import ServiceContent from "../components/service/ServiceContent";
import axiosClient from "../axios-client";

export default function ServicePage() {
  const [url, setUrl] = useState(
    {url:'Servicios'}
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
          <HeaderDefault params={'service'}/>
          <ServiceContent/>
        </>
     )    
}