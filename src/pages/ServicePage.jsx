import React from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import ServiceContent from "../components/service/ServiceContent";

export default function ServicePage() {
     return(
        <>
          <HeaderDefault params={'service'}/>
          <ServiceContent/>
        </>
     )    
}