import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import MonitorHeader from "../../assets/img/monitormetadata.png"

function Slogan() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);
  return (
    <>
   <div id="header" className="jumbotron" data-aos="fade-down">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="mt-4 d-flex align-items-center justify-content-center">
        <div
            className=" col-lg-9 col-md-12 col-sm-12 order-2"
          
           >
              <div className="sec-title">
                <div className="left-content">
                  <h2>Metadata</h2>
                </div>
                <div className="left-content">
                  <h6 style={{color:"#ffff"}}>Análisis numéricos de tus campañas de marketing digital.</h6>
                </div>
              </div>
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "30px",
                  fontWeight: "400",
                  fontFamily: "'Lato', sans-serif;",
                color:"#fafafa"
                }}
                className="text-about"
              >
               Creamos los reportes que necesitás para la gestión eficiente de tus campañas digitales.
Evaluamos las principales métricas digitales y ajustamos la estrategia para mejorar la exposición de tu negocio en las redes sociales. 

              </p>
        

          </div>
        </div>
      </div>
      <div className="col-md-3 d-none d-md-block">
        <div className="mt-4 d-flex align-items-center justify-content-center">
        <img className="monitor-image  d-none d-md-block" src={MonitorHeader} alt="Epikka monitor customer service" title='The best service in Analytics & Marketing Digital, the improve of yor busines is our task.'/>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Slogan