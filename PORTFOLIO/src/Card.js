import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
  return (
    <>
      <h4>{props.heading}</h4>
      <div class="card" style={{width: "20rem"}}>
        <img class="card-img-top" src={props.imgscr} alt="Card img" height="250px"/>
        <div class="card-body">
          <p class="card-text">{props.para}</p>
        </div>
        <br/>
      </div>
    </>
  )
}

export default Card
