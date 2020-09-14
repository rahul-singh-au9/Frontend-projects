import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
// import Wallpaper from './wallpaper.jpg';

const Home = () => {
  const[heading, setHeading] = useState("Hi!");
  const[heading2, setHeading2] = useState("I'm Rahul");

  const set = () => {
    setHeading("I love building")
    setHeading2("THINGS !!")
  }
  

  const setBack = () => {
    setHeading("Hi!")
    setHeading2("I'm Rahul")
  }
  return (
    <>
      <div className="home" onMouseEnter={set} onMouseOut={setBack} id="introduction">
        <h1>{heading}<br/>
          {heading2}</h1> <br/>
        <button>VIEW CV
          <img src="https://img.icons8.com/plasticine/2x/download.png" alt=""/>
        </button> <br/>
        <button>VIEW PROJECTS
          <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/office-bag-2-486961.png" alt=""/>
        </button>
      </div>
    </>
  )
}

export default Home
