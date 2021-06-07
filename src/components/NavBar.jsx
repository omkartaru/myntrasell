import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        
            <div>
                <nav class="container navbar navbar-expand-lg navbar-light bg-light" style={{zIndex:"2"}}>
  <Link class="navbar-brand" to="/"><i style={{fontSize:"20px", color:"tomato"}} class="fas fa-people-carry m-2"></i>MyntraSell</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home </Link>
      <Link class="nav-item nav-link" to="/about">About</Link>
      <Link class="nav-item nav-link" to="/contact">Contact</Link>
     
    </div>
  </div>
</nav>
            </div>
    )
}

export default NavBar
