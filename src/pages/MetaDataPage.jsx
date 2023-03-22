import React from "react";
import HeaderDefault from "../components/headerSubPages/HeaderDefault";
import MetaDataContent from "../components/metadata/MetaDataContent";

export default function MetaDataPage() {
    return(
        <>
        <HeaderDefault params={'metadata'}/>
        <MetaDataContent/>
        </>    
    )
    
}