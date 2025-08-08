import React from "react";

import { Routes, Route } from "react-router-dom";

import {
  Home,
  Cart,
  Login,
  Product,
  Products,
  Register,
  Checkout,
  AboutPage,
  ContactPage,
  PageNotFound,
} from "../pages";

import "../styles/_globals.css";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<Products />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
