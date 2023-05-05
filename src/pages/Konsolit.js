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
      <p>Konsolit:</p>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}