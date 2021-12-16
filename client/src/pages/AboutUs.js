import React from "react";
import NavBar from "../components/NavBar";

import "../styles/aboutus.css";
function AboutUs() {
  return (
    <>
      <NavBar isLoggedIn={false} whiteBg={false} />
      <div className="aboutus">
      <div id="about">
            <h1>About Us</h1>
            <div className="info">
            <p id = "details">
             Miriam Alyesmerni
             <div id = "links">
             <a href="https://github.com/malyesh">Github</a> 
             
             <a href="http://linkedin.com/in/miriam-alyeshmerni">Linkedin</a>
             </div>
            </p>
            </div>
            <div className="info">
            <p id = "details">
             Aysenur Davulcu
             <div id = "links">
             <a href="https://github.com/aysenurdavulcu">Github </a>
      
             <a href="https://www.linkedin.com/in/aysenurdavulcu/">Linkedin</a> 
             </div>
           
            </p>
            </div>
            <div className="info">
            <p id = "details">
            Sean Yap
            <div id = "links">
            <a href="https://github.com/seanyap">Github</a>
         
            <a href="https://www.linkedin.com/in/seanwyap/">Linkedin</a>
            </div>
            </p>
            </div>
           
     </div>
      </div>
    </>
  );
}


export default AboutUs;
