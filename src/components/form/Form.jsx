import React,{useRef, useEffect, useState} from "react";
import axiosClient from "../../axios-client";
import { Alert } from "react-bootstrap";


export default function Form() {

  const [formu, setFormu] = useState();
  const [notification, setNotification] = useState(null);
  const [show, setShow] = useState(false);
  
  const nombreRef = useRef();
  const emailRef = useRef();
  const telefonoRef = useRef();
  const mensajeRef = useRef();

  const sendData =(ev)=>{
    ev.preventDefault();
 
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
    
      
      <div style={{ marginTop: "-3rem" }} className="block-form">
      <div className="contact_form">
        <div className="formulario">

          <form onSubmit={sendData} id="formu">
            <p>
              <label for="nombre" class="colocar_nombre">
                Nombre
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                name="introducir_nombre"
                id="nombre"
                required="obligatorio"
                placeholder="Escribe tu nombre"
                ref={nombreRef}
              />
            </p>

            <p>
              <label for="email" className="colocar_email">
                Email
                <span className="obligatorio">*</span>
              </label>
              <input
                type="email"
                name="introducir_email"
                id="email"
                required="obligatorio"
                placeholder="Escribe tu Email"
                ref={emailRef}             
              />
            </p>

            <p>
              <label for="telefone" className="colocar_telefono">
                Teléfono
              </label>
              <input
                type="tel"
                name="introducir_telefono"
                id="telefono"
                placeholder="Escribe tu teléfono"
                ref={telefonoRef}
              />
            </p>

            <p>
              <label for="mensaje" className="colocar_mensaje">
                Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="introducir_mensaje"
                class="texto_mensaje"
                id="mensaje"
                required="obligatorio"
                placeholder="Deja aquí tu comentario..."
                ref={mensajeRef}
              ></textarea>
            </p>
              {show && <Alert className="m-2" variant="success" onClose={() => setShow(false)} dismissible>
                {notification}
              </Alert>}
            <button
              className="css-button-gradient--1"
              type="submit"
              name="enviar_formulario"
              id="enviar"
            >
             
              <p style={{color:"#ffff"}}>Enviar</p>
            </button>

            <p class="aviso">
              <span className="obligatorio"> * </span>los campos son
              obligatorios.
            </p>
          </form>
          
        </div>
      </div>
    </div>
  
    )
    
}