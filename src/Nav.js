import React, {useState, useEffect} from 'react'
import "./styles/Nav.css";
function Nav() {
  return (
    <div className="nav">
        <img className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Hm_logo.svg"
        alt="Movie Home Logo"/>
        <img className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Usuario.jpg"
        alt="Movie Home Avatar"/>
    </div>
    
  )
}

export default Nav