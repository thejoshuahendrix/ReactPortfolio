import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="App-header">
      <h1 style={{ color: "white", marginBottom: "50px" , overflow:'visible'}}>Contact Me</h1>
      <ul style={{color:"white"}}>
        <li>+1 740 396 2213</li>
        <li>thejoshuahendrix@gmail.com</li>
      </ul>
      <ContactForm />
    </div>
  );
}

export default Contact;
