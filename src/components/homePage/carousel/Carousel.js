import React from 'react';
import Carousel1 from './carousel-1.jpg';
import Carousel2 from './carousel-22.jpg';
import Carousel3 from './carousel-img1.png';
//import CarouselTest from './carousel-test.svg';
import './carousel.scss';


const Carousel = () => {



    return (
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={Carousel2} class="d-block carousel-img w-100" alt="..." style={{maxHeight: '38rem'}}/>
    </div>

    <div class="carousel-item">
      <img src={Carousel3} class="d-block carousel-img w-100" alt="..." style={{maxHeight: '38rem'}}/>
    </div>

    <div class="carousel-item">
      <img src={Carousel1} class="d-block carousel-img w-100" alt="..." style={{maxHeight: '38rem'}}/>
    </div>

    <button class="carousel-control-next m-5 " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

  </div>
    
  
</div>
    )
}

export default Carousel