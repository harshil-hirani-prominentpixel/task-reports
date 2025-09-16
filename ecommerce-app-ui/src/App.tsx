import React from "react";
import { Routes, Route } from "react-router-dom";

import UserLayout from "./layout/UserLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Register from "./pages/Register";
import Login from "./pages/Login";


const App: React.FC = () => {
  return (
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='shop' element={<Shop />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
  );
};

export default App;
