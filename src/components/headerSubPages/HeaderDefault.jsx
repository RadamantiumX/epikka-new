import React, {useState, useEffect} from "react";
import Fondo1 from '../../assets/img/portfolio.jpg';
import Fondo2 from '../../assets/img/metricas-service-desk.jpg';


//Este es el HEADER q llevan todas las sub-paginas pero cambia la imagen de fondo
export default function HeaderDefault() {
     const [bg, setBg] = useState('');
     const [text, setText] = useState('');
     const [header, setHeader] = useState();
     const [path, setPath] = useState();

     const handleSelect = (params)=>{
        switch (params) {
            case '/portfolio':
                setBg(`linear-gradient(to top, rgba(50, 84, 168,0.404)0%,rgba(62, 50, 168,0.404)100%), url('${Fondo1}');`);
                setText('Titulo para Portfolio');
                break;
            case '/service':
                setBg(`linear-gradient(to top, rgba(50, 84, 168,0.404)0%,rgba(62, 50, 168,0.404)100%), url('${Fondo2}');`);
                setText('Titulo para Servicio');    
                break;
            default:
                break;
        }
        header.style.backgroundImage = bg;
     }
useEffect(()=>{
    handleSelect(path);
    
    setHeader(document.querySelector('.header'));
    setPath(window.location.pathname)
    console.log(path)
},[])
    
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