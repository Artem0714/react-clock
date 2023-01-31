import React from "react";
import Calculator from "./components/Calculator";
import Clock from "./components/Clock";
import { ProductRow } from "./components/listProducts/ProductRow";
import TemperatureInput from "./components/TemperatureInput";

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function App() {
  return (
    <div>
      {products.map((product) => {
        return <ProductRow key={product.name} name={product.name} price={product.price} />
      })}
    </div>
  );
}

export default App;