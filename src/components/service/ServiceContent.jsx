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
                  <h2 style={{ color: "#000" }}>
                    Lorem Ipsum is simply dummy the printing
                  </h2>
                </div>
                <h4>Lorem Ipsum is simply dummy</h4>
              </div>
            </div>

            <div class="col-md-4"  data-aos="fade-down">
              <div class="service-item">
                <img src={cardimg} />
                <div class="down-content">
                  <h4 style={{ color: "#000" }}> Lorem Ipsum is simply</h4>
                  <p style={{ fontSize: "16px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4"  data-aos="fade-down">
              <div class="service-item">
                <img src={cardimg} />
                <div class="down-content">
                  <h4 style={{ color: "#000" }}> Lorem Ipsum is simply</h4>
                  <p style={{ fontSize: "16px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4"  data-aos="fade-down">
              <div class="service-item">
                <img src={cardimg} />
                <div class="down-content">
                  <h4 style={{ color: "#000" }}>Lorem Ipsum is simply</h4>
                  <p style={{ fontSize: "16px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
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
              <div class="left-content"  data-aos="fade-down">
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
                    <div class="count-content"  data-aos="fade-down">
                      <h2>Lorem ipsum</h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-content"  data-aos="fade-down">
                      <h2>Lorem ipsum</h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-content"  data-aos="fade-down">
                      <h2>Lorem ipsum</h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="count-content"  data-aos="fade-down">
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
              <div class="col-md-6"  >
                <img src={imgrandom} />
              </div>
              <div class="col-md-6"  >
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
