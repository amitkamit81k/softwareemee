import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./components/Layout/Notfound";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

        {/* Other routes for your application */}
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
