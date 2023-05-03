import React from "react"
import { Link } from "react-router-dom";
import product2 from "./images/scrabble.png"

export default function Lautapelit(){
    return (
    <div className="Container">
      
      <div className="Product">
        <img src={product2} className="productimg"></img>
        <p>Name:Playstation 5</p><br></br>
        <p>Price:600€</p>
      </div>
    </div>
    );
}