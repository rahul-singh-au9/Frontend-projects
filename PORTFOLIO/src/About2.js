import React from 'react';
import Card from './Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './About2.css';
import card2 from './card2.png'
const About2 = () => {
  return (
    <>
      <div className="container" id="about">
        <div className="row">
          <small>WHAT I DO?</small>
        </div>
        <div className="row">
          <h4>HERE ARE SOME OF MY EXPERTISE</h4>
        </div>
        <div className="row">
          <div className="col-md-5 offset-md-1"><Card
          imgscr="https://skillvalue.com/wp-content/uploads/sites/7/2019/12/developpeur-full-stack-poste-cdi-paris.png"
          para="I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS"
          heading="WEB DEVELOPMENT"/></div>

          <div className="col-md-4 offset-md-1"><Card
          imgscr= {card2}
          para="As coming from the CS background, I have good grasp over fundamental concepts of DSA"
          heading="D S & ALGORITHMS"/></div>
        </div>
      </div>
    </>
  )
}

export default About2
