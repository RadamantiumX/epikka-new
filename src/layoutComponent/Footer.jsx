import React from "react";
import Logo from "../assets/img/logoeppikafooter.png";
import { Link } from "react-router-dom";


export default function Footer() {
 
  

  
    return (
        <>
          <div  className="footer-section">
            <footer className=" text-center footer-section " id="contact">
              <div className="container text-center   ">
                <div style={{ marginTop: "5rem" }} className="row ">
                  <div className="col-12 col-lg-4">
                    <h4
                      className="d-flex justify-content-start"
                      style={{
                        color: "#fff",
                        width: "10rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <img style={{width:"10rem"}} src={Logo} alt='logo-brand-top ' className='brand-top'/>
                    </h4>
    
                      <p style={{ color: "#fff" }} class="text-start text-responsive">
                     Somos una agencia de marketing digital enfocada en hacer crecer tu negocio mediante el uso de las más modernas herramientas digitales aplicadas a las redes sociales y la generación de campañas en el ámbito del marketing digital.
                    </p> 
                  </div>
    
                  <div className="linea col-1 d-none d-sm-block">
                    <hr class="vertical" width="2px" noshade="noshade" />
                  </div>
                  <div className="col-6 col-lg-2">

               
                    <a
                      style={{
                        textDecoration: "none",
                        marginBottom: "1rem",
                        color: "#fff",
                      }}
                      class="nav-link me-lg-3  text-start text-uppercase fw-bold"
                      href="/service"
                      title="Services"
                    >
                      SERVICIOS
                    </a>
                   
                
                    <a
                      style={{
                        textDecoration: "none",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        color: "#fff",
                      }}
                      class="nav-link me-lg-3 text-start text-uppercase fw-bold"
                      href="/about"
                      title="About Us"
                      
                    >
                     AGENCIA
                    </a>
            
                    
                   
                    
              
                     <a
                      style={{
                        textDecoration: "none",
                        marginBottom: "1rem",
                        color: "#fff",
                      }}
                      class="nav-link me-lg-3 text-start text-uppercase fw-bold"
                      href="/portfolio"
                      title="Portfolio"
                    >
                      PORTAFOLIO
                    </a>
                   
              
                     <a
                      style={{
                        textDecoration: "none",
                        marginBottom: "1rem",
                        color: "#fff",
                      }}
                      class="nav-link me-lg-3 text-start text-uppercase fw-bold"
                      href="/metadata"
                      title="Portfolio"
                    >
                     METADATA
                    </a>
              
                   
                 
                    <a
                      style={{
                        textDecoration: "none",
                        marginBottom: "1rem",
                        color: "#fff",
                      }}
                      class="nav-link me-lg-3 text-start text-uppercase fw-bold"
                      href="/escribinos"
                      title="Contact"
                    >
                      ESCRIBINOS
                    </a>
                  
                   
                  </div>
                  <div className="linea col-1 d-none d-sm-block">
                    <hr
                      style={{ color: "#fff" }}
                      class="vertical"
                      width="2px"
                      noshade="noshade"
                    />
                  </div>
                  <div className="col-12 col-lg-3 ">
                    <h5
                      style={{ color: "#fff", marginTop: "1rem" }}
                      class="d-flex justify-content-center"
                    >
                      Seguinos en nuestras Redes
                    </h5>
                    <div className="d-flex justify-content-center">
  <a  href="https://www.facebook.com/profile.php?id=100090325090524&mibextid=ZbWKwL" target="_blank">
    <img
      className="red-social"
      src="https://uploads-ssl.webflow.com/60af88a5233e422dc4f1f472/60b0dfde88780c69eb5758df_FB.svg"
      alt="Epikka Socials networks 1"
    />
  </a>

  <a  href="https://www.instagram.com/epikka.agencia/" target="_blank">
    <img
      className="red-social"
      src="https://uploads-ssl.webflow.com/60b05ed14ad9e52e356697b8/60b0faf22717fc829eecd466_IG.svg"
      alt="Epikka Socials networks 2"
    />
  </a>
</div>

                  </div>
                </div>
    
                <div className='row'>
                <div style={{marginTop:"10rem", color:"#fff"}} className='col'>
                &copy; Eppika 2023 . All Rights Reserved | Design by <a style={{color:"#ffff"}} href="https://epsiweb.com/">EpsiWeb</a>
                </div>
    
                </div>
                  
    
    
              </div>
            </footer>
          </div>
    
          {/* <div className="footer-section">
        <footer style={{marginTop:"8rem"}} >
            <div  className='container'>
            <div  className='row'>
             
            </div>
    
            </div>
            </footer>
            </div> */}
        </>
      );
}