"use client"

import { useContext } from "react"
import "./FoodItem.css"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext"

const FoodItem = ({ image, name, desc, id, price, originalPrice }) => {
  const { cartItems, addToCart, removeFromCart, currency } = useContext(StoreContext)

  // Calculate discount percentage if there's an original price
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  // Generate random rating between 3.5 and 5
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1)

  // Generate star rating display using HTML entities
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star-icon">
          ★
        </span>,
      )
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star-icon">
          ★
        </span>,
      )
    }

    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star-icon empty-star">
          ☆
        </span>,
      )
    }

    return stars
  }

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image || "/placeholder.svg"} alt="" />
        {discountPercentage > 0 && <span className="discount-badge">{discountPercentage}% OFF</span>}
        {!cartItems[id] ? (
          <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white || "/placeholder.svg"} alt="" />
        ) : (
          <div className="food-item-counter">
            <img src={assets.remove_icon_red || "/placeholder.svg"} onClick={() => removeFromCart(id)} alt="" />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green || "/placeholder.svg"} onClick={() => addToCart(id)} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="star-rating">
            {renderStars(Number.parseFloat(rating))}
            <span className="rating-number">({rating})</span>
          </div>
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">
          {originalPrice && (
            <span className="original-price">
              {currency}
              {originalPrice.toFixed(2)}
            </span>
          )}
          {currency}
          {price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default FoodItem

