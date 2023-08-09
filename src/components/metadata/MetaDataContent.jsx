import React, { useEffect } from 'react';
import LaptopMetadata from "../../assets/img/laptopmetadata.png";
import MetadataSection from "../../assets/img/metadasection.jpg";
import Form from "../form/Form"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MetaDataContent() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);
  return (
    <>
      <div class="about-section">
        <div class="container">
          <div class="row clearfix">
            <div class="content-column col-md-6 col-sm-12 col-xs-12" data-aos="fade-up">
              <div class="inner-column">
                <div class="sec-title">
                  <h2>
                  Hacemos el seguimiento de distintos indicadores de tu negocio través de tableros de gestión con la herramienta de Microsoft PowerBI.
                  </h2>
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
               Creamos los reportes que necesitás para la gestión eficiente de tus campañas digitales.
Evaluamos las principales métricas digitales y ajustamos la estrategia para mejorar la exposición de tu negocio en las redes sociales. 


                </p>
              </div>
            </div>
            <div class="image-column col-md-6 col-sm-12 col-xs-12" data-aos="fade-left">
              <div class=" " data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="image">
                  <img
                    style={{ width: "1000rem" }}
                    src={LaptopMetadata}
                    alt="Epikka Metadata Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "-10rem", marginBottom:"-10rem" }} class="about-section">
        <div class="container">
          <div class="row clearfix">
            <div class="content-column col-md-6 col-sm-12 col-xs-12" data-aos="fade-up">
              <div class="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="image">
                  <img
                    style={{ width: "1000rem" }}
                    src={MetadataSection}
                    alt="Epikka Meatadata and analytics"
                  />
                </div>
              </div>
            </div>
            <div class="image-column col-md-6 col-sm-12 col-xs-12" data-aos="fade-left">
              <div class="">
                <div class="sec-title">
                  <h2>
                  También elaboramos informes de gestión con las principales métricas de Analítica Web. De este modo podrás hacer un seguimiento de las campañas de marketing.
                  </h2>
                </div>
                {/* <p
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
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-section">
       <div className="about-us section-padding " data-scroll-index="1">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-md-5 mb-50" data-aos="fade-up">
                <div className="section-info">
                  <div style={{marginTop:"1.3rem"}} className="sec-title">
                
                    <h2>Hablemos y veamos juntos como mejorar tu presencia en redes sociales.</h2>

                    <p style={{fontSize:"1.3rem",lineHeight:"30px",fontWeight:"400",marginTop:"35px", fontFamily:"'Lato', sans-serif;", }}>
                    Siempre estamos para escucharte. En Epikka consideramos esencial tener en cuenta tus necesidades y como podemos usar la tecnología disponible para beneficiar tu negocio. Creemos que juntos podremos lograrlo. Si tenés alguna inquietud no dudes en ponerte en contacto con nosotros y te llamaremos a la brevedad. Escribimos ya mismo o bien contáctanos a través de nuestras redes sociales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="fade-left">
              <Form/>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
       
       </section>
    </>
  );
}
