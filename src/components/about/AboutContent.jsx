import React, { useEffect } from "react";
import "./AboutContent.css";
import MetadataImage from "../../assets/img/metadataimage.png";
import Form from "../form/Form";
import AOS from "aos";
import "aos/dist/aos.css";

import Marketing from '../../assets/img/marketingdigital.jpg';
import Respon from '../../assets/Icons/responsibility.png';
import Bussines from '../../assets/Icons/businessman.png';
import Discipline from '../../assets/Icons/discipline.png';
import Creativity from '../../assets/Icons/creativity.png';
import Trust from '../../assets/Icons/trust.png';
import Person from '../../assets/Icons/personalization.png';

function AboutContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <>

       
     <div class="container" data-aos="fade-down">
       
     <div style={{marginTop:"4rem",textAlign:"center" }}>
        <div class="sec-titlee">
    <span style={{ color: "#9B5DE5" }} className="title">
      ¿Quienes Somos?
    </span>
    <h2>Misión</h2>
  </div>
  <p
    style={{
      fontSize: "1.6rem",
      lineHeight: "30px",
      fontWeight: "400",
      fontFamily: "'Lato', sans-serif;",
      textAlign: "center"
    }}
    className="text-about"
  >
    Brindar las mejores estrategias de marketing digital para captar leads,
    ampliar la base de clientes, fidelizar los actuales y relevar nuevas
    tendencias del negocio. Asesoramiento en la estrategia comercial mediante
    el análisis y seguimiento de las principales métricas digitales. Estamos en
    constante búsqueda de nuevos retos y desafíos, adaptando nuestros métodos a
    la evolución de la tecnología, el consumo y la cultura.
  </p>
</div>
        </div>
     
    
        <div class="container" data-aos="fade-down">

        <div style={{marginTop:"6rem",textAlign:"center" }}>
        <div class="sec-titlee">
   
    <h2>Visión</h2>
  </div>
  <p
    style={{
      fontSize: "1.6rem",
      lineHeight: "30px",
      fontWeight: "400",
      fontFamily: "'Lato', sans-serif;",
      textAlign: "center"
    }}
    className="text-about"
  >
    Ser un proveedor de analítica y marketing digital que abarque todas las áreas comerciales del negocio. Para nosotros, cada uno de nuestros clientes es único e inigualable, porque cada empresa es un mundo y las soluciones reales son específicas para cada negocio, no hay reglas generales, por eso sabemos cómo adaptar nuestras herramientas de acuerdo a tus requerimientos.
  </p>
</div>

</div>

      <div className="container" data-aos="fade-down">
      <div style={{marginTop:"4rem",textAlign:"center" }}>
        <div class="sec-titlee">
  
    <h2>Valores</h2>
  </div>
  </div>
  <div className="row justify-content-center">
    <div style={{marginTop:"4rem"}} class="col-md-7">
      <div class="row">
        <div class="col-md-4 px-4 my-2 text-center">
          <img alt="Epikka customer Responsability" title="Responsability is our name, is Epikka" style={{width:"4rem"}} src={Respon}/>
          <div class="mt-3">
            <h5 class="mb-2" style={{ fontWeight: "bold", color: "#9B5DE5" }}>
              Responsabilidad & Honestidad.
            </h5>
          </div>
        </div>
        <div class="col-md-4 px-4 my-2 text-center">
          <img alt="Epikka customer Business" title="Improve your Business with Epikka" style={{width:"4rem"}} src={Bussines}/>
          <div class="mt-3">
            <h5 class="mb-2" style={{ fontWeight: "bold", color: "#9B5DE5" }}>
              Profesionalismo.
            </h5>
          </div>
        </div>
        <div class="col-md-4 px-4 my-2 text-center">
          <img alt="Epikka customer Discipline" title="Start the new face of yor business" style={{width:"4rem"}} src={Discipline}/>
          <div class="mt-3">
            <h5 class="mb-2" style={{ fontWeight: "bold", color: "#9B5DE5" }}>
              Disciplina.
            </h5>
          </div>
        </div>
        <div class="col-md-4 px-4 my-2 text-center">
          <img alt="Epikka customer creativity" title="Increase yor creativity with Epikka" style={{width:"4rem"}} src={Creativity}/>
          <div class="mt-3">
            <h5 class="mb-2" style={{ fontWeight: "bold", color: "#9B5DE5" }}>
              Creatividad.
            </h5>
          </div>
        </div>
        <div class="col-md-4 px-4 my-2 text-center">
          <img alt="Epikka customer Trust" title="Trust in our job, Epikka is the best choice" style={{width:"4rem"}} src={Trust}/>
          <div class="mt-3">
            <h5 class="mb-2" style={{ fontWeight: "bold", color: "#9B5DE5" }}>
              Confianza & Transparencia.
            </h5>
          </div>
        </div>
        <div class="col-md-4 px-4 my-2 text-center">
          <img alt="Epikka customer Persons" title="The customer performance and service" style={{width:"4rem"}} src={Person}/>
          <div class="mt-3">
            <h5 class="mb-2" style={{ fontWeight: "bold", color: "#9B5DE5" }}>
              Personalización.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section id="contact">
        <div class="contact-wrapper">
          <div data-aos="fade-up">
            <Form />
          </div>
          <div style={{marginLeft:"3.8rem"}} class="direct-contact-container" data-aos="fade-left">
            <ul class="contact-list">
              <div className="sec-title">
                <div className="left-content">
                  <h2>Escribinos</h2>
                </div>
              </div>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                
                    (+54)1165516622                                           
                   
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:epikka.agencia@gmail.com" title="Send me an email">
                    epikka.agencia@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100090325090524&mibextid=ZbWKwL" target="_blank" class="contact-icon">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/epikka.agencia/" target="_blank" class="contact-icon">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/541165516622?text=¡Hola! Estoy interesado/a en conocer más sobre tus servicios. ¿Podrías brindarme más información?" target="_blank" class="contact-icon">
                  <i class="fa fa-whatsapp" ></i>
                </a>
              </li>
         
            </ul>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutContent;


