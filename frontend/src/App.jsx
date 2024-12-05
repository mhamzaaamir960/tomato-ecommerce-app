import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Footer, Navbar } from "./components";
import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import Cart from "./pages/Cart/Cart";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && (
        <LoginPopUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}

      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/cart" element={<Cart />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
