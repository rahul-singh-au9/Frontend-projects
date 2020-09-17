import React from 'react';
import {HashLink as NavLink} from "react-router-hash-link";
// import {NavLink} from 'react-router-dom';
// import Pic from './Pic.jpg';
import Pic2 from './Pic2.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <>
      <div className="Sidebar">
        <div className="container-fluid">
          <img src={Pic2} alt="" width="100" height="110"/>
        </div>
        <h1>Rahul Singh</h1>
        <h5>rahulsg1508@gmail.com</h5>
        <ul>
          <li><NavLink smooth activeClassName="active_class" to="#introduction">INTRODUCTION</NavLink></li>
          <li><NavLink smooth activeClassName="active_class" to="#about">ABOUT</NavLink></li>
          <li><NavLink smooth activeClassName="active_class" to="#timeline">TIMELINE</NavLink></li>
          <li><NavLink exact activeClassName="active_class" to="/contact">CONTACT</NavLink></li>
        </ul>
        <ul className="social-icon">
          <li><NavLink exact  to="/"><img src="https://www.citypng.com/public/uploads/small/11595327074pnjwumqwhpj4fpi5l2mwql9dq1qtwwvlffjtv6pjmefr5xxzaxsotxqpxeercldxjif8zaor97badpjwncvrvjxjhcurbpq453nh.png" alt="social-icon"/></NavLink></li>

          <li><NavLink exact  to="/"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" alt="social-icon"/></NavLink></li>

          <li><NavLink exact  to="/"><img src="https://cdn.iconscout.com/icon/free/png-256/instagram-233-896451.png" alt="social-icon"/></NavLink></li>

          <li><NavLink exact  to="/"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-32-114604.png" alt="social-icon"/></NavLink></li>

          <li><NavLink exact  to="/"><img src="https://banner2.cleanpng.com/20190425/kuy/kisspng-computer-icons-github-clip-art-transparency-free-c-ebess-uq-undergrate-electrical-engineering-stude-5cc270f9d845d4.1334546315562467778859.jpg" alt="social-icon"/></NavLink></li>
        </ul> <br/>
        <span>Made with </span> <img src="https://e7.pngegg.com/pngimages/869/729/png-clipart-heart-like-heart-icon-miscellaneous-black.png" alt="heart" height="25px" widhth="25px"/>
        <span> and </span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjOIEyYUM6-wBXwiKl7n_lmO1lxO1NHCDYw&usqp=CAU" alt="heart" height="25px" widhth="25px"/>

        <br/><br/><p>Something coming soon !!</p>
      </div>
    </>
  )
}

export default Sidebar
