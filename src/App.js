import './App.css';
import { useState } from 'react';
import { Home } from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [cartContent, setCartContent] = useState([]);

  function addItemToCart(item){
    const existingItem = cartContent.find((i) => i.id === item.id);
    if(existingItem){
      existingItem.quantity += item.quantity;
      setCartContent([...cartContent.filter((i) => i.id !== item.id), existingItem]);
    }
    else{
      setCartContent([...cartContent, item]);
    }
  }
  function removeItemFromCart(item) {

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
      </Routes>
    </BrowserRouter>
  );
}
