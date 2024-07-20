import "./App.css";
import { useState } from "react";
import { Home } from "./components/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./components/pages/category/Category";
import { Product } from "./components/pages/product/Product";

export default function App() {
  const [cartContent, setCartContent] = useState([]);

  function addItemToCart(item) {
    const existingItem = cartContent.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
      setCartContent([
        ...cartContent.filter((i) => i.id !== item.id),
        existingItem,
      ]);
    } else {
      setCartContent([...cartContent, item]);
    }
  }
  function removeItemFromCart(item) {
    const existingItem = cartContent.find((i) => i.id === item.id);
    if(existingItem){
      setCartContent([...cartContent.filter((i) => i.id !== item.id)]);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartContent={cartContent}
              removeItemFromCart={removeItemFromCart}
              addItemToCart={addItemToCart}
            />
          }
        ></Route>
        <Route 
          path="/category/:category" 
          element={
            <Category 
              cartContent={cartContent}
              removeItemFromCart={removeItemFromCart}
              addItemToCart={addItemToCart}/>
          }
        ></Route>
        <Route path="/product/:id" element={<Product cartContent={cartContent} removeItemFromCart={removeItemFromCart} addItemToCart={addItemToCart} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
