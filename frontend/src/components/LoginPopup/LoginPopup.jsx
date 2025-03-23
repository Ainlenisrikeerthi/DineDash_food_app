"use client"

import { useState } from "react"
import "./LoginPopup.css"
import { assets } from "../../assets/assets"

const LoginPopup = ({ setShowLogin, setIsLoggedIn }) => {
  const [currState, setCurrState] = useState("Login")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url =
      currState === "Login"
        ? "https://tomato-food-delivery-app-c3fj.onrender.com/login"
        : "https://tomato-food-delivery-app-c3fj.onrender.com/signup"

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("token", data.token) // Save the token
        if (currState === "Sign Up") {
          // Store user data in local storage
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              address: formData.address,
            }),
          )
        }
        setIsLoggedIn(true) // Update login status
        setShowLogin(false) // Close the popup
      } else {
        alert(data.error || "An error occurred")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error has occurred")
    }
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon || "/placeholder.svg"} alt="Close" />
        </div>

        {currState === "Login" ? (
          <div className="login-popup-inputs">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
        ) : (
          <div className="login-popup-inputs">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your address"
            />
          </div>
        )}

        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        <p className="login-popup-switch">
          {currState === "Login" ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setCurrState(currState === "Login" ? "Sign Up" : "Login")}>
            {currState === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  )
}

export default LoginPopup

