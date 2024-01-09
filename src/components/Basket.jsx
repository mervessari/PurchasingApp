import { useState } from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, products, total, resetBasket }) {

  const basketContainer = {
    padding: 20,
    background: "#fff",
    border: "1px solid #ddd",

  };

  const details = {
    fontSize: 20,
    marginBottom: 1,
    fontWeight: "bold",
    marginBottom: 10,
    color: "lightblue",
  }
  const totalStyle = {
    borderTop: "1px solid #ddd",
    paddingTop: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    color: "#448137",
  };
  const resetBasketStyle = {
    background: "lightblue",
    height : 40,
    fontSize: 16,
    fontWeight: 500,
    padding: "0px 20px",
    cursor: "pointer",
   
  };

  return (
    <div className="basket-container container" style={basketContainer}>
      <h3 style={details}>Alışveriş Detayları</h3>
     <ul>
      {basket.map((item) => (
        <BasketItem
          key={item.id}
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      </ul>

      <div style={totalStyle}>Toplam : ${total}</div>
      <button style={resetBasketStyle} onClick={resetBasket}>Sepeti Temizle</button>
    </div>
  );
}

export default Basket;
