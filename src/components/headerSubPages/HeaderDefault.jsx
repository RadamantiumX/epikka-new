import React, { useState, useEffect } from "react";
import './styles-only-bg-routes.css'; // Estilos solo para cambio de background
import MonitorHeader from "../../assets/img/monitormetadata.png"

// Este es el HEADER que llevan todas las sub-páginas pero cambia la imagen de fondo dinámicamente
export default function HeaderDefault({ params }) {
  const [bg, setBg] = useState({}); // Background
  const [text, setText] = useState(''); // Texto para título
  const [header, setHeader] = useState(); // Seteo de selección de clase

  // Selección de "Background-Image" y texto del título
  const handleSelect = () => {
    switch (bg) {
      case 'service':
        header.classList.add('bg-service');
        setText('Nuestros Servicios');
        break;
      case 'portfolio':
        header.classList.add('bg-portfolio');
        setText(' Portafolio');
        break;
      case 'metadata':
        header.classList.add('bg-metadata');
        setText(' Metadata');
        break;
    
      case 'about':
        header.classList.add('bg-about');
        setText('Agencia');
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handleSelect();
    setBg(params)
    setHeader(document.querySelector('.header'));
    console.log(params)
  }, [bg, header])

  return (
    <>
      <div className="header">
        {bg === 'metadata' && (
          <img className="monitor-image  d-none d-md-block" src={MonitorHeader} alt="Epikka monitor" />
        )}
        <div className="contenedor head">
          <h1 className="title-head">{text}</h1>
        </div>
      </div>
    </>
  )
}
