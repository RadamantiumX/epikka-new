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
      <div >
        <div class="container services">
          <div class="row">

          
       

          <div style={{marginTop:"8rem", marginLeft: "2rem", marginRight: "2rem"}} className="sec-title" >
  <div className="left-content">
    <h2>Servicios totalmente integrados brindan resultados <br/> medidos en ingresos, no en clics</h2>
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


      


      <section id="contact">
        <div class="contact-wrapper">
          <div data-aos="fade-up">
            <Form />
          </div>
          <div class="direct-contact-container" data-aos="fade-left">
            <ul class="contact-list">
            <div className="sec-title">
                <div className="left-content">
                  <h2>Escribinos</h2>
                </div>
          </div>
             

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                    (+54)1165516622                                           
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
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
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
