import React from "react";
import "./ContactContent.css";
import Form from "../form/Form";
export default function ContactContent() {
  


    return (
      <>
    <section style={{backgroundColor:"#000"}}>
       <div className="about-us section-padding " data-scroll-index="1">
          <div style={{marginTop:"8rem"}} className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-md-5 mb-50" data-aos="fade-up">
                <div className="section-info">
                  <div style={{marginTop:"1.3rem"}} className="sec-title">
                
                    <h2 style={{color:"#fff"}}>Hablemos y veamos juntos como mejorar tu presencia en redes sociales.</h2>

                    <p style={{fontSize:"1.3rem",lineHeight:"30px",fontWeight:"400",marginTop:"35px", fontFamily:"'Lato', sans-serif;", }}>
                    Siempre estamos para escucharte. En Epikka consideramos esencial tener en cuenta tus necesidades y como podemos usar la tecnología disponible para beneficiar tu negocio. Creemos que juntos podremos lograrlo. Si tenés alguna inquietud no dudes en ponerte en contacto con nosotros y te llamaremos a la brevedad. Escribimos ya mismo o bien contáctanos a través de nuestras redes sociales.
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
    );
}