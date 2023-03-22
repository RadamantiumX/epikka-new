import React, {useState, useEffect} from "react";
import './styles-only-bg-routes.css';//Estilos solo para cambio de background


//Este es el HEADER q llevan todas las sub-paginas pero cambia la imagen de fondo dinamicamente
export default function HeaderDefault({params}) {
     const [bg, setBg] = useState({});//Background
     const [text, setText] = useState('');//Texto para titulo
     const [header, setHeader] = useState();//Seteo de seleccion de Tag clase
     
//Seleccion de "Backgorund-Image" y texto del titulo
     const handleSelect = ()=>{   
       switch (bg) {
        case 'service':
            header.classList.add('bg-service');
            setText('Titulo para servicio');
            break;
        case 'portfolio':
            header.classList.add('bg-portfolio');
            setText('Titulo para portfolio'); 
            break;
        case 'metadata':
            header.classList.add('bg-metadata');
            setText('Titulo para Metadata');
            break;
        case 'contact':
            header.classList.add('bg-contact');
            setText('Titulo para Contacto');
            break;
        case 'about':
            header.classList.add('bg-about');
            setText('Titulo para About');  
            break;              
        default:
            break;
       }      
     }

useEffect(()=>{
    handleSelect();
    setBg(params)
    setHeader(document.querySelector('.header'));  
    console.log(params)
},[bg, header])
    
    return(
        <>
         <div className="header">
            <div className="contenedor head">
                <h1 className="title-head">{text}</h1>
            </div>    
         </div>
        </>
    )
}