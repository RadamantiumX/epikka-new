import React, { useEffect } from 'react';
import "./ServiceContent.css";
import cardimg from "../../assets/img/metadata.jpg";
import imgrandom from "../../assets/img/about-us.jpg";
import Form from "../form/Form";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ServiceContent() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <div class="container services">
          <div class="row">
            <div style={{ marginTop: "4rem" }} className="col-md-12">
              <div style={{ marginBottom: "4rem" }} className=" text-center ">
                <div class="left-content">
                  <h2 style={{ color: "#000" }}>Servicios</h2>
                </div>
              </div>
            </div>

            <div class="col-md-3" data-aos="fade-down">
              <div class="service-item card">
              <img src="../../src/assets/img/marketingdigital.jpg" />
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
              <img src="../../src/assets/img/desarrolloweb.jpg" />
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
              <img src="../../src/assets/img/creacioncontenido.jpg" />
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
                <img src="../../src/assets/img/estrategiaventas.jpg" />
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

      <div class="container-fluid work-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="left-content" data-aos="fade-down">
                <span>Lorem ipsum dolor sit amet</span>
                <h2>Lorem ipsum dolor Lorem ipsum</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="right-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="count-content" data-aos="fade-down">
                      <h2>Lorem ipsum</h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-content" data-aos="fade-down">
                      <h2>Lorem ipsum</h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-content" data-aos="fade-down">
                      <h2>Lorem ipsum</h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-content" data-aos="fade-down">
                      <h2>Lorem ipsum</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}

      <div class="more-detail">
        <div class="container">
          <div class="more-info-content">
            <div class="row" data-aos="fade-down">
              <div class="col-md-6">
                <img src={imgrandom} />
              </div>
              <div class="col-md-6">
                <div class="right-content">
                  <div className="sec-title">
                    <div class="left-content">
                      <h2>Lorem Ipsum is simply dummy the printing</h2>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
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
