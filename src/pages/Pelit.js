import React, { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCart from "./ShoppingCart";

export default function Konsolit({ categoryid }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/webshop/products/getproducts.php/${categoryid}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryid]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="Container">
      <h1>Videopelit:</h1>
      {products.map((product) => (
        <div key={product.id}>
          <div className="productcard">
            <h2>{product.name}</h2>
            <div className="productimage">
              <img src={"http://localhost:3000/" + product.image} className="productimg" alt={product.name}></img>
            </div>
            <p>{product.price} €</p>
            <br></br>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>Lisää ostoskoriin</button>
          </div>
        </div>
      ))}
      <ShoppingCart cart={cart} setCart={setCart} />
    </div>
  );
}