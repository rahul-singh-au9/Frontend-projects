import React from 'react';
import About2 from './About2';
import './About.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const About = () => {
  return (
    <>
      <div className="About">
        <small>ABOUT US</small>
        <h4>WHO AM I?</h4>

        <p>I am a computer grad student from Nit-Jalandhar with ICT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)</p> <br/>

        <p>I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore :P</p>
        <br/>
        <br/>
        <hr/>
        <About2/>
      </div>
    </>
  )
}

export default About
