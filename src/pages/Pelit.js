import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Konsolit({categoryid}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost/webshop/products/getproducts.php/${categoryid}`)
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryid]);

  return (
    <div className="Container">
      <h1>Videopelit:</h1>
      {products.map((product) => (
        <div key={product.id}>
          <div className="productcard">
          <h2>{product.name}</h2>
          <div className="productimage">
            <img src={product.image}></img>
          </div>
          <p>{product.price} €</p>
          <br></br>
          <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}