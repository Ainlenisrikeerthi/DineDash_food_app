"use client"

import { useState, useEffect } from "react"
import "./Home.css"
import Header from "../../components/Header/Header"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"
import ResForm from "../../components/ResForm/ResForm"
import Testimonials from "../../components/Testimonials/Testimonials"
import Benefits from "../../components/Benefits/Benefits"
import Footer from "../../components/Footer/Footer"
import { useLocation } from "react-router-dom"

const Home = () => {
  const [category, setCategory] = useState("All")
  const [activeSection, setActiveSection] = useState("home")
  const location = useLocation()

  useEffect(() => {
    // Check if there's a hash in the URL to scroll to a specific section
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        // Add a small delay to ensure the DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveSection(id)
        }, 100)
      }
    } else {
      // If no hash, show home section by default
      setActiveSection("home")
    }
  }, [location])

  // Show Benefits and Testimonials only when home section is active
  const showHomeExtras = activeSection === "home"

  return (
    <div>
      {/* Home Section */}
      <div id="home" className={`page-section ${activeSection === "home" ? "active" : ""}`}>
        <Header />
      </div>

      {/* Menu Section */}
      <div id="menu" className={`page-section ${activeSection === "menu" ? "active" : ""}`}>
        <div className="section-title-container">
          <h1>Explore Our Menu</h1>
          <div className="menu-line"></div>
        </div>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
      </div>

      {/* Reservation Section */}
      <div id="reservation" className={`page-section ${activeSection === "reservation" ? "active" : ""}`}>
        <ResForm />
      </div>

      {/* Mobile App Section */}
      <div id="mobile-app" className={`page-section ${activeSection === "mobile-app" ? "active" : ""}`}>
        <AppDownload />
      </div>

      {/* Benefits Section - Only visible on home page */}
      <div className={`benefits-section ${showHomeExtras ? "active" : ""}`}>
        <Benefits />
      </div>

      {/* Testimonials Section - Only visible on home page */}
      <div className={`testimonials-section ${showHomeExtras ? "active" : ""}`}>
        <Testimonials />
      </div>

      {/* Contact Section */}
      <div id="contact" className={`page-section ${activeSection === "contact" ? "active" : ""}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Home


