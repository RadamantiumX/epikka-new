import React from 'react'
import "./AboutContent.css"
import MetadataImage from "../../assets/img/metadataimage.png";
import Form from "../form/Form"

function AboutContent() {
  return (
    <>
       <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <div class="imgContainer d-none d-md-block">
      {/* <img class="blueDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/> */}
      <img class="mainImg img-fluid " src={MetadataImage}/>
    </div>
    <div class="responsive-container-block textSide">
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
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg " src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            Value
          </p>
          <p class="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            Value
          </p>
          <p class="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            Value
          </p>
          <p class="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            Value
          </p>
          <p class="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    
    </div>
    <img class="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/>
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

  )
}

export default AboutContent