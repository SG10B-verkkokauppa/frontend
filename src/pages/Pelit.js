import React from "react"
import { Link } from "react-router-dom";
import product6 from "./images/amiibolink.png"

export default function Pelit(){
    return (
    <div className="Container">
      
      <div className="Product">
        <img src={product6} className="productimg"></img>
        <p>Name:Playstation 5</p><br></br>
        <p>Price:600€</p>
      </div>
    </div>
    );
}