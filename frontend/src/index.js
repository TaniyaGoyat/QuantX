import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SignupPage from "./landing_page/signup/Signup"
import LoginPage from "./landing_page/Login/Login"
import AboutPage from "./landing_page/about/AboutPage"
import ProductPage from "./landing_page/products/ProductPage"
import PricingPage from "./landing_page/pricing/PricingPage"
import SupportPage from "./landing_page/support/SupportPage"
import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";
import NotFound from "./NotFound";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   
  <BrowserRouter>
        <AuthProvider>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<SignupPage/>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/products" element={<ProductPage/>}></Route>
    <Route path="/pricing" element={<PricingPage/>}></Route>
    <Route path="/support" element={<SupportPage/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>

  </Routes>
  <Footer/>
  </AuthProvider>
  </BrowserRouter>

);