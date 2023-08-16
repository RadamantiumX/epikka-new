import React, { useEffect, useState } from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import AboutContent from "../components/about/AboutContent";
import axiosClient from "../axios-client";


export default function AboutPage() {
    const [url, setUrl] = useState(
       {url:'Agencia'}
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
        <HeaderDefault params={'about'}/>
        <AboutContent/>

        </>
    )
    
}