import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";



import Check from '../../assets/Icons/check-mark.png';
import Pencil from '../../assets/Icons/pencil.png';
import Wrench from '../../assets/Icons/wrench.png';
import Bullhorn from '../../assets/Icons/wrench.png';
import Coding from "../../assets/Icons/coding.png";
import Content from "../../assets/Icons/content.png";
import Ventas from "../../assets/Icons/ventas.png";
import MarketingDigital from "../../assets/Icons/digital-marketing.png";


function ComoLoHacemos() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <div className=" pb-3 pt-3">
        <div class="container my-5 " data-aos="fade-down">
          <div class="row">
            <div class="col-md-12">
              <div class="row justify-content-center">
                <div class="col-md-4 px-4 my-2 text-center">
                  <img
                    style={{ width: "3rem" }}
                    src={Check}
                    alt='check Epikka'
                  />
                  <div class="mt-3">
                    <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                      <a href="#" style={{ color: "#9B5DE5" }}>
                        Mejorá la relación con tus clientes
                      </a>
                    </h5>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        lineHeight: "30px",
                        fontWeight: "400",
                        fontFamily: "'Lato', sans-serif;",
                      }}
                      className="text-about"
                    >
                      Planificá tu estrategia comercial y conocerás en
                      profundidad a tu audiencia.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 px-4 my-2 text-center">
                  <img
                    style={{ width: "3rem" }}
                    src={Pencil}
                    alt='Analitics metrics Epikka Pencil'
                  />
                  <div class="mt-3">
                    <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                      <a href="#" style={{ color: "#9B5DE5" }}>
                        Impactá de forma creativa
                      </a>
                    </h5>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        lineHeight: "30px",
                        fontWeight: "400",
                        fontFamily: "'Lato', sans-serif;",
                      }}
                      className="text-about"
                    >
                      Creá tu propia comunidad a través de la visualización de
                      contenido digital.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 px-4 my-2 text-center">
                  <img
                    style={{ width: "3rem" }}
                    src={Wrench}
                    alt='Analitics metrics Epikka Wrench'
                  />
                  <div class="mt-3">
                    <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                      <a href="#" style={{ color: "#9B5DE5" }}>
                        Analizá tus resultados
                      </a>
                    </h5>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        lineHeight: "30px",
                        fontWeight: "400",
                        fontFamily: "'Lato', sans-serif;",
                      }}
                      className="text-about"
                    >
                      Optimizá tus campañas a través del análisis de los
                      indicadores de la industria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     <div className="bg-section pb-3 pt-3">
      <div class="container my-5  " data-aos="fade-down">
      <div style={{marginTop:"4rem",textAlign:"center", marginBottom:"3rem" }}>
        <div class="sec-titlee">
   
    <h2>¿Cómo lo Hacemos?</h2>
  </div>
  </div>

        <div class="row  justify-content-center">
          <div class="col-md-3  px-4 my-2">
            <img
              alt='Epikka Marketing and Metrics'
              style={{ width: "4rem" }}
              src={MarketingDigital}
            />
            <div class="mt-3">
              <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                <a href="#" style={{ color: "#9B5DE5" }}>
                  Marketing digital
                </a>
              </h5>
              <ul style={{ listStyleType: "disc" }}>
                <li>Campañas en redes </li>
                <li>Social media</li>
                <li>Crecimiento orgánico </li>
                <li>Presencia de marca</li>
                <li>SEO / SEM</li>
              </ul>
            </div>
          </div>

          <div class="col-md-3  px-4 my-2">
            <img
              alt='Epikka Marketing and Metrics'
              style={{ width: "4rem" }}
              src={Ventas}
            />
            <div class="mt-3">
              <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                <a href="#" style={{ color: "#9B5DE5" }}>
                  Estrategia de Ventas
                </a>
              </h5>
              <ul style={{ listStyleType: "disc" }}>
                <li>Proceso de conversión de ventas </li>
                <li>Estrategias de conversión</li>
              
              </ul>
            </div>
          </div>

          <div class="col-md-3  px-4 my-2">
            <img
              alt='Epikka Marketing and Metrics'
              style={{ width: "4rem" }}
              src={Coding}
            />
            <div class="mt-3">
              <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                <a href="#" style={{ color: "#9B5DE5" }}>
                  Diseño Web
                </a>
              </h5>
              <ul style={{ listStyleType: "disc" }}>
                <li>Diseño apropiado para generación de leads</li>
                <li>Armado completo de tu sitio web</li>
                <li>Landing Pages</li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 px-4 my-2">
            <img
              alt='Epikka Marketing and Metrics'
              style={{ width: "4rem" }}
              src={Content}
            />
            <div class="mt-3">
              <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                <a href="#" style={{ color: "#9B5DE5" }}>
                  Creación de contenidos
                </a>
              </h5>
              <ul style={{ listStyleType: "disc" }}>
                <li>Creación de Blogs y posts </li>
                <li>Mail marketing</li>
           
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-4">
  <a href="/escribinos">
    <button className="css-button-fully-rounded--black2">
      Hacenos tu Consulta
    </button>
  </a>
</div>

      </div>
      </div>
    </>
  );
}

export default ComoLoHacemos;
