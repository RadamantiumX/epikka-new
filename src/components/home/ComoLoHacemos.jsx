import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Check from '../../assets/Icons/check-mark.png';
import Pencil from '../../assets/Icons/pencil.png';
import Wrench from '../../assets/Icons/wrench.png';
import Bullhorn from '../../assets/Icons/wrench.png';
import Coding from "../../assets/Icons/coding.png";
import Content from "../../assets/Icons/content.png";


function ComoLoHacemos() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);

  return (
    <>
      <div className="bg-section pb-3 pt-3">
        <div class="container my-5 " data-aos="fade-down">
          <div class="row">
            <div class="col-md-4">
              <div class="">
                <div className="sec-title">
                  <div class="left-content">
                    <h2>Sarasa</h2>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: "30px",
                    fontWeight: "400",
                    fontFamily: "'Lato', sans-serif;",
                  }}
                  className="text-about"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6 px-4 my-2">
                  <img
                    style={{ width: "3rem" }}
                    src={Check}
                    alt='check Epikka'
                  />
                  <div class="mt-3">
                    <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                      <a href="#" style={{ color: "#9B5DE5" }}>
                        Mejora la relación con tus clientes
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
                <div class="col-md-6 px-4 my-2">
                  <img
                    style={{ width: "3rem" }}
                    src={Pencil}
                    alt='Epikka Pencil'
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
                <div class="col-md-6 px-4 my-2">
                  <img
                    style={{ width: "3rem" }}
                    src={Wrench}
                    alt='Epikka Wrench'
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

      <div class="container my-5 " data-aos="fade-down">
       
            <div class="row  justify-content-center">
              <div class="col-md-4  px-4 my-2">
                <img
                  style={{ width: "4rem" }}
                  src={Bullhorn}
                  alt='Epikka Bullhorn'
                />
                <div class="mt-3">
                  <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                    <a href="#" style={{ color: "#9B5DE5" }}>
                      Marketing digital
                    </a>
                  </h5>
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Crecimiento orgánico   </li>
                    <li>Presencia de marca</li>
                    <li>SEO / SEM </li>
                    <li>Estrategias de conversión</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4  px-4 my-2">
                <img
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
                    <li>Armado completo de tu sitio web</li>
                    <li>Landing pages</li>
                    <li>SEO / SEM </li>
                    <li>Estrategias de conversión</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 px-4 my-2">
                <img
                  style={{ width: "4rem" }}
                  src={Content}
                  alt='Epikka Content'
                />
                <div class="mt-3">
                  <h5 class="mb-2" style={{ fontWeight: "bold" }}>
                    <a href="#" style={{ color: "#9B5DE5" }}>
                      Creación de contenidos
                    </a>
                  </h5>
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Crecimiento orgánico   </li>
                    <li>Presencia de marca</li>
                    <li>SEO / SEM </li>
                    <li>Estrategias de conversión</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-4'>
      <button  className="css-button-fully-rounded--black2">
  Hacenos tu Consulta
</button>
</div>
      </div>
   

    </>
  );
}

export default ComoLoHacemos;
