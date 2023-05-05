import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import logo from "./Image.jpg"
import axios from "axios";

export default function Navbar(){
    const [categories, setCategories] = useState([]);
    const url = "http://localhost/webshop/"
    
    useEffect(() => {
      console.log(url);
      axios.get(url + "products/getcategories.php")
      .then((response) => {
        const json = response.data;
        setCategories(json);
        console.log(json)
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
    }, [])


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
              {categories.map(category => (
                    <li>
                      <Link
                      className="dropdown-item"
                      to={"/products/" + category.id}>{category.name}
                      </Link>
                    </li>
                  ))}
              <li><hr class="dropdown-divider" ></hr></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
              </div>

              
              </li>
              <li class="nav-item">
              <Link className="dropdownlink" to="/order"><i class="fa-solid fa-cart-shopping fa-2xl"></i></Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
}