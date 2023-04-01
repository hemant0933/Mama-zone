import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="compareproduct" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
