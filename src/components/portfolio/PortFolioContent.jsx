import React from "react";
import "./PortFolioContent.css";

import Noimage from "../../assets/img/sin-imagen.jpg";


export default function PortFolioContent() {
  return (
    <>
      <div class="about-section">
        <div class="container">
          <div class="row clearfix">
            <div class="content-column col-md-6 col-sm-12 col-xs-12">
              <div class="inner-column">
                <div class="sec-title">
                  <h2>
                    We Are The Leader In <br /> The Interiores
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div class="image-column col-md-6 col-sm-12 col-xs-12">
              <div
                class="inner-column "
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <img src={Noimage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginBottom:"5rem"}} id="portfolio">
        <div class="container">
          <div class="row">
            <div class="portfolio-col">
              <img src="https://i.ibb.co/gvMycv9/work-1.png" />
              <div class="layer">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-col">
              <img src="https://i.ibb.co/QDQ3VWv/work-2.png" />
              <div class="layer">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-col">
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
    </>
  );
}
