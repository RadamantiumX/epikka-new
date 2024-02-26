import React,{useRef, useEffect, useState} from "react";
// import axiosClient from "../../axios-client";
import { Alert } from "react-bootstrap";

import { useFormContext } from "../../context/ContextForm";

export default function Form() {

  
  const [notification, setNotification] = useState(null);
 // const [show, setShow] = useState(false);
  
  const { setPayload, setForm, form, response, show, setShow } = useFormContext()

  const nombreRef = useRef();
  const emailRef = useRef();
  const telefonoRef = useRef();
  const mensajeRef = useRef();

  const sendData =(ev)=>{
    ev.preventDefault();
    setPayload({
      nombre: nombreRef.current.value,
      email: emailRef.current.value,
      telefono: telefonoRef.current.value,
      mensaje: mensajeRef.current.value
    })
    
    if(response !== null) {
      setNotification(response)
      setShow(true)
      form.reset()
    }  
  }
  useEffect(()=>{
    setForm(document.getElementById('formu'));
  },[])

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
              className="css-button-fully-rounded--black"
              type="submit"
              name="enviar_formulario"
              id="enviar"
            >
             
              <p >Enviar</p>
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