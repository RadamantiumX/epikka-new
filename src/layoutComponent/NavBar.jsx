import React,{ useState } from "react";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logoeppika.png";

export default function NavBar() {

    const [navbarScroll, setNavbarScroll] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    
  
    return (
      
        <AppBar
          sx={
            navbarScroll
              ? {
                  backgroundColor: "#000",
                  transition: "0.3s",
                  width: "100%",
                }
              : {
                  backgroundColor: "#000" ? "transparent" : "#000",
                  boxShadow: 0,
                  transition: "0.3s",
                  width: "100%",
                }
          }
          className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
          id="mainNav"
        >
          <div className="container d-flex justify-content-start navegacion d-flex justify-content-between">
           
             <a className="navbar-brand fw-bold" href="/home" title="Home page">
              {/*<h3 style={{ color: "#ffff" }}>Logo</h3>*/}<img src={Logo} alt="epikka logo type frontend" title="The original Epikka Logo" className="logo-img"/>
             </a>
           
            
  
            <button
              style={{ color: "#ffff" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fas fa-bars"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className=" navbar-nav ms-auto me-2 my-2 my-lg-0">
                <li className="nav-item">
                 
                    <a style={{fontWeight:"bold",fontSize:"1.3rem"}} class="nav-link me-lg-3" href="/service">
                      Servicios
                    </a>
             
                </li>
                <li className="nav-item">
                
                  <a style={{fontWeight:"bold",fontSize:"1.3rem"}} class="nav-link me-lg-3" href="/about">
                    Agencia
                  </a>
               
                  
                </li>
                <li className="nav-item">
                 
                  <a style={{fontWeight:"bold",fontSize:"1.3rem"}} class="nav-link me-lg-3" href="/portfolio">
                    Portafolio
                  </a>
                           
                </li>
                <li className="nav-item">
               
                  <a style={{fontWeight:"bold",fontSize:"1.3rem"}} class="nav-link me-lg-3" href="/metadata">
                    Metadata
                  </a>
                  
                  
                </li>
             
                <li className="nav-item">
        
                      <a style={{fontWeight:"bold",fontSize:"1.3rem"}} class="nav-link me-lg-3" href="/escribinos">Escribinos</a>
              
                  
                </li>
              </ul>
            </div>
          </div>
        </AppBar>  
        );
}