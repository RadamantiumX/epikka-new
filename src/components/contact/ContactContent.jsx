import React,{useState,useEffect,useRef} from "react";
import "./ContactContent.css";
import axiosClient from "../../axios-client";
import { Alert } from "react-bootstrap";

export default function ContactContent() {
  const [formu, setFormu] = useState();
  const [notification, setNotification] = useState(null);
  const [show, setShow] = useState(false); 
  
  const nombreRef = useRef();
  const emailRef = useRef();
  const telefonoRef = useRef();
  const mensajeRef = useRef();


  const sendData=(ev)=>{
      ev.prventDefault();
      
      const payload = {
        nombre: nombreRef.current.value,
        email: emailRef.current.value,
        telefono: telefonoRef.current.value,
        mensaje: mensajeRef.current.value
      }
      axiosClient.post('/enviar', payload)
        .then(({data})=>{
          setNotification(data.message);
          setShow(true)
          formu.reset()
        })
  }
 
  useEffect(()=>{
    setFormu(document.getElementById('formu'));
  },[formu])
    return(
        <>
              <div class="arch_contact_us_duplicate">
  <div class="responsive-container-block big-container">
    <div class="responsive-container-block container">
      <div class="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
        <p class="text-blk section-head">
          Get in touch dolor sit
        </p>
        <p style={{fontSize:"1.4rem",lineHeight:"30px",fontWeight:"400",marginTop:"35px", fontFamily:"'Lato', sans-serif;"}} className="text-about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                 
                </p>
      </div>
      <div class="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
        <div class="form-wrapper">

          <form onSubmit={sendData} id="formu">
          <input class="input input-element" name="Name" placeholder="Name" ref={nombreRef}/>
          <input class="input input-element" name="Contact Number" placeholder="Contact Number" ref={telefonoRef}/>
          <input class="input input-element" name="Email" placeholder="Email" ref={emailRef}/>
          <textarea class="textinput input-element" placeholder="Message" useRef={mensajeRef}></textarea>
          {show && <Alert className="m-2" variant="success" onClose={() => setShow(false)} dismissible>
                {notification}
              </Alert>}
          <button class="css-button-fully-rounded--black" type="submit">
            Send
          </button>
          </form>


        </div>
        <div class="">
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
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}