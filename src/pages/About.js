import React from "react";
import ModalExample from "../components/ModalExample";
import ReactTypingEffect from "react-typing-effect";

import NewCard from "../components/NewCard";
import Hero from "../components/Hero";

function About() {
  return (
    <div className="App-header">
      <Hero></Hero>
      <ReactTypingEffect style={{margin:'10px'}} text="This is my about me" className="react-type" />
      <ModalExample/>
      <h1 style={{color:'white',overflow:"visible"}}>My Skills</h1>
      <div className="card-wrapper">
      <NewCard
        title="Javascript"
        subtitle="Language"
        url="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg"
      />
      <NewCard
        title="React"
        subtitle="Library"
        url="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      />
      <NewCard
        title="MongoDB"
        subtitle="Database"
        url="https://www.svgrepo.com/show/303232/mongodb-logo.svg"
      />
      
      </div>
      <div className="card-wrapper">
      <NewCard
        title="Java"
        subtitle="Language"
        url="https://brandeps.com/logo-download/J/Java-logo-vector-01.svg"
      />
      <NewCard
        title="Node"
        subtitle="Server-side RTE"
        url="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
      />
      <NewCard
        title="Express"
        subtitle="HTTP Module"
        url="https://miro.medium.com/max/1532/0*r1BTGwo9cd8IGNQQ.jpeg"
      />
      </div>
     
    </div>

  );
}

export default About;
