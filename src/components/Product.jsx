import { useState } from "react";
import { moneyFormat } from "../helpers";

function Product({ product, basket, setBasket, total, money }) {
  const productCss = {
    padding: 50,
    width: "40%",
    background: "#fff",
    border: "1px solid #ddd",
    marginBottom: 20,
  };
  const productImg = {
    width: "100%",
    height: "300px",
  };
  const productTitle = {
    fontSize: 20,
    marginBottom: 10,
  };
  const productAct = {
    display: "flex",
    alignItems: "center",
  };
  const productPrice = {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "lightblue",
  };
  const buyButton = {
    marginTop : 15,
    height: "40px",
    padding: "0 15px",
    flex: 1,
    background: "lightblue",
    fontSize: 14,
    fontWeight: 500,
    borderRadius: "0 4px 4px 0"

  };
  const sellButton = {
    marginTop : 15,
    height: "40px",
    padding: "0 15px",
    flex: 1,
    background: "#ccc",
    color: "#333",
    fontSize: 14,
    fontWeight: 500,
    borderRadius: "4px 0 0 4px"
  }
  const amountStyle = {
    marginTop : 15,
    width: "50px",
    textAlign: "center",
    border: "1px solid #ddd",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 17,
    fontWeight: "bold",

    
  };
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id), //item.id !== product.id olanları filtrele çünkü daha önce eklenmişti
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div className="product" style={productCss}>
        <img style={productImg} src={product.image} alt="" />
        <h4 style={productTitle}>{product.title}</h4>
        <div style={productPrice} className="price">
          $ {moneyFormat(product.price)}
        </div>
        <div style={productAct} className="actions">
          <button style={sellButton} disabled={!basketItem} onClick={removeBasket}>
            Sepetten Sil
          </button>
          <span  style={amountStyle} className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button style={buyButton} disabled={total + product.price > money} onClick={addBasket}>
            Sepete Ekle
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
