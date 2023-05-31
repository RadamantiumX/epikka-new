import React, { useEffect } from 'react';
import noImage from "../../assets/img/sin-imagen.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function QueHacemos() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div
            className=" col-lg-6 col-md-12 col-sm-12 order-2"
            data-aos="fade-up"
          >
              <div className="sec-title">
                <div className="left-content">
                  <h2>¿Qué Hacemos?</h2>
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
                Somos una agencia de marketing digital enfocada en hacer creecer
                tu negocio mediante el uso de las más modernas herramientas
                digitales aplicadas a las redes sociales y la generación de
                campañas en el ámbito del marketing digital. Nuestra meta es
                mejorar la relación y comunicación con tus clientes, optimizando
                los resultados de tu negocio a través de los canales digitales.
              </p>
              <button 
              className="css-button-fully-rounded--black2"
            >
             
           Hacenos tu Consulta
            </button>

          </div>

          <div
            className="image-column col-lg-6 col-md-12 col-sm-12"
            data-aos="fade-left"
           >
            <div className="inner-column wow fadeInLeft d-none d-md-block">
              <figure className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img src={noImage} alt="Epikka test" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QueHacemos;
