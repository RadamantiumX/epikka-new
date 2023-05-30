import React,{useState,useEffect, useRef} from "react";
import { Carousel } from "react-bootstrap";

export default function HomeHeader() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            <div className="d-block header1" alt="First slide">
              <div className="carousel-text">
                <h1>
                  Acompañamos el crecimiento de tu negocio a través de los
                  distintos medios digitales
                </h1>
                <p className="d-none d-md-block" style={{ fontSize: "1.6rem" }}>
                  Estrategia global de marketing a tu disposición para mejorar
                  tus ventas. Todos los planes a tu medida con distintos
                  objetivos de crecimiento en redes sociales.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block header2" alt="Second slide">
            <div className="carousel-text">
                <h1>
                Posicionamos tu marca con las más modernas estrategias de comunicación digital
                </h1>
                <p className="d-none d-md-block" style={{ fontSize: "1.6rem" }}>
                Elaboramos diferentes campañas de marketing digital según los objetivos planteados. Definimos el alcance y audiencia para tu negocio.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block header3" alt="Third slide">
            <div className="carousel-text">
                <h1>
                Contamos con un equipo de profesionales expertos en marketing digital
                </h1>
                <p className="d-none d-md-block" style={{ fontSize: "1.6rem" }}>
                Nuestra filosofía de trabajo abarca todas las etapas que hacen a la concreción de las ventas, desde la generación de leads, captación, conversión y fidelización de la cartera de clientes.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
}