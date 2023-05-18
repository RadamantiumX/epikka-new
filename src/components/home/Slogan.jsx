import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slogan() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);
  return (
    <>
      <div id="header" className="jumbotron" data-aos="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
             
            <div className="mt-4 d-flex align-items-center justify-content-center">
                
                  <h2 style={{color:"#ffff", fontSize:"50px"}}>
                  Lorem ipsum dolor sit 
                  Lorem ipsum dolor sit, con
                  </h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slogan