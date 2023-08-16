import React, { useEffect } from 'react';
import "./PortFolioContent.css";
import Form from "../form/Form"

import Noimage from "../../assets/img/sin-imagen.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Programmer from '../../assets/img/programmer.jpg';


export default function PortFolioContent() {
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
            <div class="content-column col-md-6 col-sm-12 col-xs-12 " data-aos="fade-up">
              <div class="inner-column">
                <div class="sec-title">
                  <h2>
                  Web y Mobile Landing Page
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: "30px",
                    fontWeight: "400",
                    marginTop: "35px",
                    fontFamily: "'Lato', sans-serif;",
                  }}
                  className="text-about"
                >
                 Creamos contenido en diversas plataformas que te permitirán mostrar todos tus productos y servicios de una manera atractiva y divertida. 
                </p>
              </div>
            </div>
            <div
            className="image-column col-lg-6 col-md-12 col-sm-12"
            data-aos="fade-left"
           >
            <div className="inner-column wow fadeInLeft d-none d-md-block">
              <figure className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img src={Programmer} alt="Analytics Epikka Portfolio" title='The best team in coding and web design.'/>
                </a>
              </figure>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div style={{marginBottom:"5rem"}} id="portfolio" >
        <div class="container">
          <div class="row">
            <div class="portfolio-col" data-aos="fade-down">
              <img src="https://i.ibb.co/gvMycv9/work-1.png" alt='Analytics Epikka icon Link'  title='Only in Epikka yor business is priority.'/>
              <div class="layer">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-col" data-aos="fade-down">
              <img src="https://i.ibb.co/QDQ3VWv/work-2.png" alt='Analytics Epikka icon Link 2' title='Only in Epikka yor business is priority.'/>
              <div class="layer">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-col" data-aos="fade-down">
              <img src="https://i.ibb.co/nc4vLyb/work-3.png" alt='Analytics Epikka icon Link 3' title='Only in Epikka yor business is priority.'/>
              <div class="layer">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
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
