import React from "react"
import { Link } from "react-router-dom";
import pic1 from './alennus.png';
import pic3 from './Kova.png';


export default function Home(){
    return (
     <div class="home"> 
      <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="pic1" id="carousel" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="black">Aukaisu Ale!</h5>
        <p class="black">Uusi ps5 -20% alennuksella.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic1} class="d-block w-100" alt="pic1" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="black">placeholder</h5>
        <p class="black">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="pic3" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="black">Third slide label</h5>
        <p class="black">Coding experience in 2023</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
    <div class="container text-center">
  <div class="row product">
      <div class="col-md">
        <Link className="nav-link" to="/konsolit"><i class="fa-solid fa-gamepad fa-2xl"></i> Konsolit</Link>
      </div>
      <div class="col-md">
        <Link className="nav-link" to="/pelit"><i class="fa-solid fa-compact-disc fa-2xl"></i> Pelit</Link>
      </div>
      <div class="col-md">
       <Link className="nav-link" to="/lautapelit"><i class="fa-solid fa-chess fa-2xl"></i> Lautapelit</Link>
      </div>
      <div class="col-md">
        <Link className="nav-link" to="/oheistuotteet"><i class="fa-solid fa-mug-saucer fa-2xl"></i> Oheistuotteet</Link>
      </div>
    </div>
  </div>
    <div class="product">
      <div class="1stproduct"></div>
      <div class="2ndproduct"></div>
      <div class="3rdproduct"></div>
      <div class="4thproduct"></div>
    </div>
  </div>
    );
}