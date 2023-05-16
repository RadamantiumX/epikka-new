import React from "react";
import "./ServiceContent.css"
import cardimg from "../../assets/img/metadata.jpg"
import imgrandom from "../../assets/img/about-us.jpg"
import Form from "../form/Form"

export default function ServiceContent() {
    return (
      <>
	  <div style={{backgroundColor:"#f4f4f4"}}>
        <div class="container services">
          <div class="row">
		  <div style={{marginTop:"4rem"}} className="col-md-12">
		  <div style={{ marginBottom: "4rem" }} className=" text-center ">
                <div class="left-content">
                  <h2 style={{ color: "#000" }}>
                    Lorem Ipsum is simply dummy <em> the printing</em>
                  </h2>
                </div>
                <h4>Lorem Ipsum is simply dummy</h4>
              </div>
            </div>

            <div class="col-md-4">
              <div class="service-item">
                <img src={cardimg} />
                <div class="down-content">
                  <h4 style={{color:"#000"}}> Lorem Ipsum is simply</h4>
                  <p style={{fontSize:"16px"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
				  <button
              className="css-button-gradient--1"
            >
              <p style={{color:"#ffff"}}>Enviar</p>
            </button>
                </div>
              </div>
            </div>
			<div class="col-md-4">
              <div class="service-item">
			  <img src={cardimg} />
                <div class="down-content">
                  <h4 style={{color:"#000"}}> Lorem Ipsum is simply</h4>
                  <p style={{fontSize:"16px"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <button
              className="css-button-gradient--1"
            >
              <p style={{color:"#ffff"}}>Enviar</p>
            </button>
                </div>
              </div>
            </div>
			<div class="col-md-4">
              <div class="service-item">
			  <img src={cardimg} />
                <div class="down-content">
                  <h4 style={{color:"#000"}}>Lorem Ipsum is simply</h4>
                  <p style={{fontSize:"16px"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
				  <button
              className="css-button-gradient--1"
            >
              <p style={{color:"#ffff"}}>Enviar</p>
            </button>
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
                <div class="left-content">
                  <span>Lorem ipsum dolor sit amet</span>
                  <h2>
				  Lorem ipsum dolor <em>Lorem ipsum</em>
                  </h2>
                  <p>
				  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    <br />
                    <br />
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </p>
                 
                </div>
              </div>

              <div class="col-md-6">
                <div class="right-content">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="count-content">
                        
                        <h2>Lorem ipsum</h2>
                      </div>
                    </div>
                    <div class="col-md-6">
					<div class="count-content">
                        
                        <h2>Lorem ipsum</h2>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="count-content">
                        
                        <h2>Lorem ipsum</h2>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="count-content">
                       
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
              <div class="row">
                <div class="col-md-6">
                  <img src={imgrandom} />
                </div>
                <div class="col-md-6">
                  <div class="right-content">
                   
                    <h2 style={{color:"#000"}}>
					Lorem Ipsum is simply <em>simply dummy</em>
                    </h2>
                    <p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      <br />
                      <br />
					  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    </p>
                  
                  </div>
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
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/>

       

      </div>
    
  </div>
  
</section>  


      </>
    );
}