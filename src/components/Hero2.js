import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Hero2 = (props) => {
  return (
    <div>
      <Jumbotron style={{backgroundColor:"#222222", color:"white"}}>
        <h1 style={{overflow:"visible"}} className="display-3">Hello, world!</h1>
        <p className="lead">I am Joshua Hendrix, a passionate software developer. Building web applications is what I love to do</p>
        <hr className="my-2" />
        <p>I have been programming on and off for 15 years but have been working daily with programming since 2018.</p>
       
      </Jumbotron>
    </div>
  );
};

export default Hero2;