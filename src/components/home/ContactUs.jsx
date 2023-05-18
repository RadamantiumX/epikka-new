import React, { useEffect } from 'react';
import Form from "../form/Form";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
    });
  }, []);


    return(
       <>
       <section className="bg-section">
       <div className="about-us section-padding " data-scroll-index="1">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-md-5 mb-50" data-aos="fade-up">
                <div className="section-info">
                  <div style={{marginTop:"1.3rem"}} className="sec-title">
                
                    <h2>Envianos tu Consulta</h2>

                    <p style={{fontSize:"1.3rem",lineHeight:"30px",fontWeight:"400",marginTop:"35px", fontFamily:"'Lato', sans-serif;", }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="fade-left">
              <Form/>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
       
       </section>
       </>
    )
    
}