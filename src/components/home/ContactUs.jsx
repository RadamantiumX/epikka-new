import React from "react";
import Form from "../form/Form";


export default function ContactUs() {
   

    return(
       <>
       <section className="bg-section">
       <div className="about-us section-padding " data-scroll-index="1">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-md-5 mb-50">
                <div className="section-info">
                  <div className="">
                    <hr
                      class="mb-3 mt-0 divider   "
                      style={{
                        width: "70px",
                        backgroundColor: "#df92fe",
                        height: "3px",
                      }}
                    />
                    <h4>Envianos tu Consulta</h4>

                    <p>
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
              <div className="col-md-3">
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