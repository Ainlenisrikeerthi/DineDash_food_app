"use client"

import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import ResForm from "./components/ResForm/ResForm"
import Checkout from "./components/Checkout/Checkout"
import { useTheme } from "./context/ThemeContext"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const { isDarkMode } = useTheme()

  return (
    <>
      <ScrollToTop />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}

      <div className={`app ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <div className="circle-shape circle-shape-1"></div>
        <div className="circle-shape circle-shape-2"></div>
        <div className="circle-shape circle-shape-3"></div>

        <Navbar setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order element" element={<PlaceOrder />} />
            <Route path="/reservation" element={<ResForm />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

