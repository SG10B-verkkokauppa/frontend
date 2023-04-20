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
              <Link className="nav-link disabled" >placeholder</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Products</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}