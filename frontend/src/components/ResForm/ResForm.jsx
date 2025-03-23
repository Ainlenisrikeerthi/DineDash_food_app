"use client"

import { useState } from "react"
import "./ResForm.css"

const ResForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "none",
    specialRequests: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    console.log("Reservation submitted:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "none",
        specialRequests: "",
      })
    }, 3000)
  }

  return (
    <div className="resform">
      <div className="resform-container">
        <div className="resform-image-container">
          <img
            src="https://res.cloudinary.com/dkyrkdigc/image/upload/v1742715326/1890f490a2c058a1610182b8153e5cd6cc5686aa-1996x3000_r6gewk.jpg"
            alt="Reservation"
            className="resform-hero-image"
          />
        </div>

        <div className="resform-content">
          <h2>Book Your Table</h2>
          <div className="menu-line"></div>

          {submitted ? (
            <div className="reservation-success">
              <h3>Reservation Confirmed!</h3>
              <p>Thank you for choosing DineDash. We've received your reservation and will see you soon!</p>
            </div>
          ) : (
            <form className="resform-reservation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="occasion">Occasion (Optional)</label>
                  <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                    <option value="none">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Meal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests (Optional)</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="resform-submit-button">
                Reserve Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResForm

