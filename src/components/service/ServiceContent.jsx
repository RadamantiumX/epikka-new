import React, { useEffect } from "react";
import "./ServiceContent.css";
import cardimg from "../../assets/img/metadata.jpg";
import imgrandom from "../../assets/img/about-us.jpg";
import Form from "../form/Form";
import AOS from "aos";
import "aos/dist/aos.css";

import Markentin2 from "../../assets/img/marketingdigital.jpg";
import Dev from "../../assets/img/desarrolloweb.jpg";
import Content2 from "../../assets/img/creacioncontenido.jpg";
import Strategy from "../../assets/img/estrategiaventas.jpg";

export default function ServiceContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <>
      <div >
        <div class="container services">
          <div class="row">
            <div
              style={{
                marginTop: "8rem",
                marginLeft: "2rem",
                marginRight: "2rem",
              }}
              className="sec-title"
            >
              <div className="left-content">
                <h2>
                  Servicios totalmente integrados brindan resultados <br />{" "}
                  medidos en ingresos, no en clics
                </h2>
              </div>
            </div>

            <div class="col-md-3" data-aos="fade-down">
              <div class="service-item card">
                <img src={Markentin2} alt="Epikka Marketing" title="The marketing and analytics professionals, we are Epikka"/>
                <div class="down-content">
                  <h4 style={{ color: "#000", marginBottom: "10px" }}>
                    Marketing digital
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.4",
                      marginBottom: "10px",
                    }}
                  >
                    Analizamos y hacemos el diagnóstico de tu mejor estrategia
                    de marketing. Posicionamos tu sitio en las principales redes
                    sociales (Facebook - Twitter - LinkedIn - Google My Business
                    (o Mi Negocio) - Instagram - Pinterest - YouTube - entre
                    otras) Posicionamiento Orgánico en Buscadores (SEO)
                    Posicionamiento Pago en Buscadores (SEM by Google Ads) Email
                    Marketing (Comunicados, Newsletters, Flyers, Promociones,
                    etc.)
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3" data-aos="fade-down">
              <div class="service-item card">
                <img src={Dev} alt="Epikka DevOps" title="The professionals developers is working now in yor project."/>
                <div class="down-content">
                  <h4 style={{ color: "#000", marginBottom: "10px" }}>
                    Diseño web
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.4",
                      marginBottom: "10px",
                    }}
                  >
                    Armar tu sitio de venta online es una de las primeras
                    acciones a llevar a cabo dentro de una Estrategia de
                    Marketing Digital. El sitio web se construye en base de un
                    objetivo claro pensando en la Usabilidad del Usuario para
                    que interaccione con la marca y cumpla las acciones
                    demarcadas. Se podrá construir un Sitio Web seguro,
                    accesible, amigable, mobile y hasta autoadministrable según
                    tus necesidades.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3" data-aos="fade-down">
              <div class="service-item card">
                <img src={Content2} alt="Epikka Dev Content" title="The best website content for yor business"/>
                <div class="down-content">
                  <h4 style={{ color: "#000", marginBottom: "10px" }}>
                    Creación de contenidos
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.4",
                      marginBottom: "10px",
                    }}
                  >
                    En base a estrategias de marketing lograremos crear la
                    atracción necesaria para que tu audiencia puedan finalmente
                    convertirse en clientes que estén comprometidos con tu
                    marca. Mantenemos el interés de tus clientes mediante la
                    publicación en blogs especializados, artículos de revistas
                    digitales, guías descargables, videotutoriales, podcasts,
                    infografías, etc.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3" data-aos="fade-down">
              <div class="service-item card">
                <img src={Strategy} alt="Epikka Strategy" title="The best strategy for yor business"/>
                <div class="down-content">
                  <h4 style={{ color: "#000", marginBottom: "10px" }}>
                    Estrategias de venta
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.4",
                      marginBottom: "10px",
                    }}
                  >
                    Analítica Web. Todos queremos saber qué pasa con nuestras
                    acciones en nuestro Sitio Web y esto es porque es nuestro
                    punto de venta o encuentro con nuestros clientes online.
                    Podrás conocer a tu público objetivo y cómo éste se comporta
                    y consume cada sección de tu Página Web.
                  </p>
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
