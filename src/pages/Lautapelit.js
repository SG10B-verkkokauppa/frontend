import React from "react"
import { Link } from "react-router-dom";
import product2 from "./images/scrabble.png";
import product3 from "./images/smart10.png";
import product4 from "./images/catan.png";
import product5 from "./images/rummikub.png";
import product6 from "./images/monopoly.png";
import product7 from "./images/tickettoride.png";
import product8 from "./images/terraformingmars.png";
import product9 from "./images/nemesis.png";

export default function Lautapelit(){
    return (
    <>
    <label className="productlabel">Lautapelit</label>
    <div className="Container">
      <div class="row product">
        <div class="col-md-3">
          <div className="Product border">
            <img src={product2} className="productimg"></img>
            <label>Name:Scrabble</label>
            <p>Price:28,99€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product3} className="productimg"></img>
            <label>Name:Smart10-visailupeli</label>
            <p>Price:25,99€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product4} className="productimg"></img><br></br>
            <label>Name:Catan</label>
            <p>Price:27,99€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product5} className="productimg"></img>
            <label>Name:Rummikub Classic</label>
            <p>Price:17,99€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product6} className="productimg"></img>
            <label>Name:Monopoly Classic</label>
            <p>Price:32,99€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product7} className="productimg"></img>
            <label>Name:Ticket to Ride Europe</label>
            <p>Price:39,99€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product8} className="productimg"></img>
            <label>Name:Terraforming Mars</label>
            <p>Price:38,99€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product9} className="productimg"></img>
            <label>Name:Nemesis</label>
            <p>Price:99,99€</p>
          </div>
        </div>

      </div>
      
    </div>
    </>
    );
}