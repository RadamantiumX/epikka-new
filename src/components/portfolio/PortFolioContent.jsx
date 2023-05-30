import React, { useEffect } from 'react';
import "./PortFolioContent.css";
import Form from "../form/Form"

import Noimage from "../../assets/img/sin-imagen.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                  <img src="../../src/assets/img/programmer.jpg" alt="" />
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
              <img src="https://i.ibb.co/gvMycv9/work-1.png" />
              <div class="layer">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-col" data-aos="fade-down">
              <img src="https://i.ibb.co/QDQ3VWv/work-2.png" />
              <div class="layer">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-col" data-aos="fade-down">
              <img src="https://i.ibb.co/nc4vLyb/work-3.png" />
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
