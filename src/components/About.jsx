import React from 'react'
import Hero from "./Hero"
const About = () => {
    return (

      <>
      <Hero/>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="/images/back.png" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/images/back2.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/images/cart.png" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>
    )
}

export default About
