import { createContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
