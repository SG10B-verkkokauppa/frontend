import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import pic1 from './alennus.png';
import pic3 from './AmiiboLuigisale.png';
import pic2 from './scrabblesale.png';
import axios from "axios";

export default function Home(){
  const url = "http://localhost/webshop/";
  const [categories, setCategories] = useState([]);

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
      <img src={pic2} class="d-block w-100" alt="pic2" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="black">Aukaisu Ale!</h5>
        <p class="black">Klassikko scrabble alennus nyt -50%.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="pic3" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="black">Aukaisu Ale!</h5>
        <p class="black">Huonompi veli alennus nyt -33%.</p>
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
    <br></br>
  <div class="col-md">
  {categories.map(category => (
                      <Link
                      className="nav-link"
                      to={"/products/" + category.id}>{category.name} 
                      </Link>
                  ))}
    </div>
  </div>
  <br></br>
  </div>
    );
}