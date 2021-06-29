import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Hero = (props) => {
  return (
    <div>
      <Jumbotron style={{backgroundColor:"#222222", color:"white"}}>
        <h1 style={{overflow:"visible"}} className="display-3">Hello, world!</h1>
        <p className="lead">I am Joshua Hendrix, a passionate software developer. Building web applications is what I love to do</p>
        <hr className="my-2" />
        <p>Take some time to explore and learn a little bit more about me.</p>
        <p className="lead">
          
        </p>
      </Jumbotron>
    </div>
  );
};

export default Hero;