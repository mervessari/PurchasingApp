import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import products from "./products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";
import BasketItem from "./components/BasketItem";

function App() {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    ); // aldığımız ürünün fiyatını bulmak için products.json içindeki ürünlerin id'si ile basket içindeki id'yi karşılaştırıp eşleşen ürünün fiyatını buluyoruz ve aldığımız ürünün fiyatı ile çarpıp toplam fiyata ekliyoruz
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          products={products}
          basket={basket}
          total={total}
        />
      )}
    </>
  );
}

export default App;
