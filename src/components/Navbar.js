import React from "react"
import { Link } from "react-router-dom";
import logo from "./Image.jpg"

export default function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logo} alt="logo" id="logo"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
              <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Tuoteryhmät
                </button>
              <ul class="dropdown-menu">
              <li><Link className="dropdownlink" to="/konsolit"><i class="fa-solid fa-gamepad fa-2xl"></i> Konsolit</Link></li><p></p>
              <li><Link className="dropdownlink" to="/pelit"><i class="fa-solid fa-compact-disc fa-2xl"></i> Pelit</Link></li><p></p>
              <li><Link className="dropdownlink" to="/lautapelit"><i class="fa-solid fa-chess fa-2xl"></i> Lautapelit</Link></li><p></p>
              <li><Link className="dropdownlink" to="/oheistuotteet"><i class="fa-solid fa-mug-saucer fa-2xl"></i> Oheistuotteet</Link></li>
              <li><hr class="dropdown-divider" ></hr></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
              </div>

              
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Products</a>
              </li>
              <li class="nav-item">
              <i class="fa-solid fa-cart-shopping fa-2xl"></i>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
}