import React from "react"
import { Link } from "react-router-dom";
import product6 from "./images/legoharry.png";
import product7 from "./images/crash.png";
import product8 from "./images/Mario.png"
import product9 from "./images/Biomutant.png"
import product10 from "./images/Riders.png"
import product11 from "./images/Witcher.png"
import product12 from "./images/Symphony.png"
import product13 from "./images/MGSV.png"

export default function Pelit(){
    return (
      <div class="row product">
      <div class="col-md-3">
        <div className="Product border">
          <img src={product6} className="productimg"></img>
          <label>Name:Lego: Harry Potter Collection</label>
          <p>Price:19,99€</p>
        </div>
      </div>
      <div class="col-md-3">
        <div className="Product border">
          <img src={product7} className="productimg"></img>
          <label>Name:Crash Bandicoot N.Sane Collection</label>
          <p>Price:34,99€</p>
        </div>
      </div>
      <div class="col-md-3">
        <div className="Product border">
          <img src={product8} className="productimg"></img>
          <label>Name:Super Mario Party<br></br></label>
          <p>Price:54,99€</p>
        </div>
      </div>
      <div class="col-md-3">
        <div className="Product border">
          <img src={product9} className="productimg"></img>
          <label>Name:Biomutant</label>
          <p>Price:24,99€</p>
        </div>
      </div>
      <div class="col-md-3">
        <div className="Product border">
          <img src={product10} className="productimg"></img>
          <label>Name:Riders Republic</label>
          <p>Price:39,99€</p>
        </div>
      </div>
      <div class="col-md-3">
        <div className="Product border">
          <img src={product11} className="productimg"></img>
          <label>Name:The Witcher 3 Complete Edition</label>
          <p>Price:19,99€</p>
        </div>
      </div>
      <div class="col-md-3">
        <div className="Product border">
          <img src={product12} className="productimg"></img>
          <label>Name:Tales of Symphonia Remastered Edition</label>
          <p>Price:47,99€</p>
        </div>
      </div>
      <div class="col-md-3">
        <div className="Product border">
          <img src={product13} className="productimg"></img>
          <label>Name:Metal Gear Solid V The Definitive Edition</label>
          <p>Price:19,99€</p>
        </div>
      </div>
    </div>
    );
}