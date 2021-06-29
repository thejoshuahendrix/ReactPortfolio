import React, { useState } from "react";

const Tooltips = (props) => {

  return (
    <div className="container">
      
      <article>
        <h1>We Bootstrapped this City!</h1>
        <p>
          This is a full stack Mern application I extended to take message
          titles, and authors.
        </p>
      </article>
      <section>
        <img src="https://github.com/thejoshuahendrix/WeBootStrappedThisCity/raw/main/images/webootstrappedthiscty1.PNG?raw=true"></img>
      </section>

      <article>
        <h1>Binary vs. Linear Search Visualizer </h1>

        <p>
          This application displays a visual representation of a binary and
          linear search. It was built with pure JavaScript
        </p>
      </article>
      <section>
        <img src="https://github.com/thejoshuahendrix/BinaryvsLinear/raw/main/binaryvslinear.gif?raw=true"></img>
      </section>

      <article>
        <h1>Binary Tree Visualizer </h1>
        <p>
          This application allows a user to build, and then subsequently search
          a binary tree. It is meant to visually teach how a binary tree is
          made.
        </p>
      </article>
      <section>
        <img src="https://github.com/thejoshuahendrix/BinaryTreeVisualizer/raw/main/binarytree.PNG?raw=true"></img>
      </section>

      <article>
        <h1>The Wall </h1>
        <p>
          This is a simple social media website I built to display my full stack
          abilities using a PHP/MySQL/Linux backend, and custom HTML and CSS
          template I designed.{" "}
        </p>
      </article>

      <section>
        <img src="https://github.com/thejoshuahendrix/TheWall/raw/main/Picture3.png?raw=true"></img>
      </section>
    </div>
  );
};

export default Tooltips;
