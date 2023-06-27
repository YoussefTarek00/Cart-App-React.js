import React from "react";
import "./App.css";
import AppNavbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
    <Route path="/" element={<Products/>} />
    <Route path="cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
