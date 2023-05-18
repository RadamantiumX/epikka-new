import React from "react";
import LaptopMetadata from "../../assets/img/laptopmetadata.png";
import MetadataSection from "../../assets/img/metadasection.jpeg";
import Form from "../form/Form"

export default function MetaDataContent() {
  return (
    <>
      <div class="about-section">
        <div class="container">
          <div class="row clearfix">
            <div class="content-column col-md-6 col-sm-12 col-xs-12">
              <div class="inner-column">
                <div class="sec-title">
                  <h2>
                    Lorem ipsum dolor sit <br /> consectetur
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div class="image-column col-md-6 col-sm-12 col-xs-12">
              <div class=" " data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="image">
                  <img
                    style={{ width: "1000rem" }}
                    src={LaptopMetadata}
                    alt=""
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
            <div class="content-column col-md-6 col-sm-12 col-xs-12">
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
            <div class="image-column col-md-6 col-sm-12 col-xs-12">
              <div class="">
                <div class="sec-title">
                  <h2>
                    Lorem ipsum dolor sit <br /> consectetur
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact">
  <div class="contact-wrapper">
       <Form/>
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">lorem, State</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">lorem@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
        <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/>

       

      </div>
    
  </div>
  
</section>  
    </>
  );
}
