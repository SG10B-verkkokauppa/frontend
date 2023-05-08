import React from "react";

export default function ShoppingCart({ cart }) {
  return (
    <div>
      <h2>Ostoskori:</h2>
      {cart.length === 0 ? (
        <p>Ostoskori on tyhjä.</p>
      ) : (
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </div>
        ))}
        <p>Yhteensä: {cart.reduce((total, product) => total + product.price, 0)} €</p>
      </div>
      )}
    </div>
  );
}