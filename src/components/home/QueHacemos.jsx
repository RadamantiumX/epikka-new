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
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2" data-aos="fade-up">
            <div className="inner-column ">
              <div className="sec-title">
                <span style={{ color: "#9B5DE5" }} className="title">¿Qué Hacemos?</span>
                <div className="left-content">
                  <span>Lorem ipsum dolor sit amet</span>
                  <h2>Lorem Ipsum is simply dummy the printing</h2>
                </div>
              </div>
              <p style={{ fontSize: "1.4rem", lineHeight: "30px", fontWeight: "400", marginTop: "35px", fontFamily: "'Lato', sans-serif;" }} className="text-about">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          <div className="image-column col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
            <div className="inner-column wow fadeInLeft d-none d-md-block">
              <figure className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img
                    src={noImage}
                    alt=""
                  />
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
