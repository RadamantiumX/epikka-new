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
                    alt=""
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

      <section id="contact">
        <div class="contact-wrapper">
        <div data-aos="fade-up">
          <Form  />
          </div>
          <div class="direct-contact-container" data-aos="fade-left">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">lorem, State</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      lorem@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
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
