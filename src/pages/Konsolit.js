import React from "react"
import { Link } from "react-router-dom";
import product5 from "./images/ps5.png";
import product6 from "./images/switch.png";
import product7 from "./images/xboxseriesX.png"

export default function Konsolit(){
  return (
    <>
    <label className="productlabel">Konsolit</label>
    <div className="Container">
      <div class="row product">
        <div class="col-md-3">
          <div className="Product border">
            <img src={product5} className="productimg"></img>
            <label>Name:Playstation 5</label>
            <p>Price:600€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product6} className="productimg"></img>
            <label>Name:Switch</label>
            <p>Price:300€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product7} className="productimg"></img>
            <label>Name:XboxseriesX</label>
            <p>Price:520€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product5} className="productimg"></img>
            <label>Name:Playstation 5</label>
            <p>Price:600€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product5} className="productimg"></img>
            <label>Name:Playstation 5</label>
            <p>Price:600€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product5} className="productimg"></img>
            <label>Name:Playstation 5</label>
            <p>Price:600€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product5} className="productimg"></img>
            <label>Name:Playstation 5</label>
            <p>Price:600€</p>
          </div>
        </div>
        <div class="col-md-3">
          <div className="Product border">
            <img src={product5} className="productimg"></img>
            <label>Name:Playstation 5</label>
            <p>Price:600€</p>
          </div>
        </div>

      </div>
      
    </div>
    </>
    );
}