"use client"

import { useState, useEffect, useContext } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./Navbar.css"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

const Navbar = ({ setShowLogin, setIsLoggedIn: updateIsLoggedIn }) => {
  const [menu, setMenu] = useState("home")
  const [showPopup, setShowPopup] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [userName, setUserName] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems, getTotalCartAmount } = useContext(StoreContext)

  const handleCartClick = () => {
    if (getTotalCartAmount() === 0) {
      setShowPopup(true)
    } else {
      navigate("/cart")
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const handleNavClick = (section) => {
    setMenu(section)

    if (section === "home") {
      navigate("/")
      // If we're already on the home page, scroll to top
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else if (section === "cart") {
      navigate("/cart")
    } else if (section === "reservation") {
      navigate("/reservation")
    } else {
      // For sections that are part of the home page
      navigate(`/#${section}`)
    }

    // Close mobile menu if open
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const total = Object.values(cartItems).reduce((sum, count) => sum + count, 0)
    setTotalItems(total)
  }, [cartItems])

  useEffect(() => {
    // Set active menu based on current path
    const path = location.pathname
    if (path === "/") {
      // Check if there's a hash in the URL
      if (location.hash) {
        const section = location.hash.replace("#", "")
        setMenu(section)
      } else {
        setMenu("home")
      }
    } else if (path === "/cart") {
      setMenu("cart")
    } else if (path === "/reservation") {
      setMenu("reservation")
    }

    // Check if user is logged in
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token) {
      updateIsLoggedIn(true)
      if (user) {
        try {
          const userData = JSON.parse(user)
          const { name } = userData
          setUserName(name)
        } catch (error) {
          console.error("Error parsing user data:", error)
        }
      }
      fetchUserData(token)
    } else {
      updateIsLoggedIn(false)
    }
  }, [location.pathname, location.hash, updateIsLoggedIn])

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("https://tomato-food-delivery-app-c3fj.onrender.com/get-user-details", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache",
        },
      })
      if (!response.ok) {
        throw new Error("Failed to fetch user data")
      }
      const data = await response.json()
      if (data.user) {
        setUserName(data.user.name)
      } else {
        console.error("User not found")
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    updateIsLoggedIn(false)
    setUserName("")
    navigate("/")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="navbar">
      <div className="logo-container" onClick={() => handleNavClick("home")}>
        <img src={assets.logo || "/placeholder.svg"} alt="DineDash" className="logo" />
      </div>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? "mobile-active" : ""}`}>
        <li onClick={() => handleNavClick("home")} className={menu === "home" ? "active" : ""}>
          Home
        </li>
        <li onClick={() => handleNavClick("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </li>
        <li onClick={() => handleNavClick("reservation")} className={menu === "reservation" ? "active" : ""}>
          Reservation
        </li>
        <li onClick={() => handleNavClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile App
        </li>
        <li onClick={() => handleNavClick("contact")} className={menu === "contact" ? "active" : ""}>
          Contact Us
        </li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img
            className="cart-icon"
            src={assets.basket_icon || "/placeholder.svg"}
            alt="cart"
            onClick={handleCartClick}
          />
          {totalItems > 0 && <div className="cart-count">{totalItems}</div>}
        </div>
        <ThemeToggle />
        {localStorage.getItem("token") ? (
          <div className="navbar-user-info">
            <p className="username">Hi, {userName}</p>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Your cart is empty! Please add some items to proceed.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar






