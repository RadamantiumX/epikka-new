import React from "react";
import "./ContactContent.css";
import Form from "../form/Form";
export default function ContactContent() {
  


    return(
        <>
              <div class="arch_contact_us_duplicate">
  <div class="responsive-container-block big-container">
    <div class="responsive-container-block container">
      <div class="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
        <p class="text-blk section-head">
        ESCRIBINOS
        </p>
        <p style={{fontSize:"1.4rem",lineHeight:"30px",fontWeight:"400",marginTop:"35px", fontFamily:"'Lato', sans-serif;"}} className="text-about">
        Podés charlar con nosotros  a través de los distintos canales de comunicación,  dejanos un teléfono para contactarte o bien envianos un whatsapp   
                 
                </p>
      </div>
      <div className="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
        <div className="form-wrapper">
        <Form/>
        </div>
        <div className="">
        <ul className="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}