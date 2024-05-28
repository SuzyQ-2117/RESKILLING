import React from "react";
import CartList from "./components/CartList";
import ItemList from "./components/ItemList";
import { CartProvider } from "./context/cart-context";
import "./style.css";

function App() {
  return (
    <main>
      <h1>React Fruit Market</h1>
      <CartProvider>
        <CartList />
        <ItemList />
      </CartProvider>
    </main>
  );
}

export default App;