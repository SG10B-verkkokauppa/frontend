import React from "react"
import { Link } from "react-router-dom";
import product1 from "./images/gameboy.png";
import product2 from "./images/minecraftmug.png";
import product3 from "./images/amiibolink.png";
import product4 from "./images/charizardamiibo.png";
import product5 from "./images/AmiiboLuigi.png";

export default function Oheistuotteet(){
    return (
      <>
      <label className="productlabel">Oheistuotteet</label>
      <div className="Container">
        <div class="row product">
          <div class="col-xxl-3">
            <div className="Product border">
              <img src={product1} className="productimg"></img>
              <label>Name:Game boy avaimenperä</label>
              <p>Price:7,7€</p>
            </div>
          </div>
          <div class="col-xxl-3">
            <div className="Product border">
              <img src={product2} className="productimg"></img>
              <label>Name:Minecraft muki</label>
              <p>Price:9,9€</p>
            </div>
          </div>
          <div class="col-xxl-3">
            <div className="Product border">
              <img src={product3} className="productimg"></img>
              <label>Name:Amiibo 8-bit Link</label>
              <p>Price:24,9€</p>
            </div>
          </div>
          <div class="col-xxl-3">
            <div className="Product border">
              <img src={product4} className="productimg"></img>
              <label>Name:Amiibo Charizard No. 33 (SSB Collection)</label>
              <p>Price:24,9€</p>
            </div>
          </div>
          <div class="col-xxl-3">
            <div className="Product border">
              <img src={product5} className="productimg"></img>
              <label>Name:Amiibo Luigi (Super Mario Series)</label>
              <p>Price:24,9€</p>
            </div>
          </div>
  
        </div>
        
      </div>
      </>
      );
  }