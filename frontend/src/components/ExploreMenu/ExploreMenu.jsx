"use client"

import { menu_list } from "../../assets/assets"
import "./ExploreMenu.css"

const ExploreMenu = ({ category, setCategory }) => {
  const handleCategoryClick = (menuName) => {
    setCategory(menuName)
  }

  return (
    <div className="explore-menu page-section" id="menu">
      {/* Removing the duplicate heading and text */}
      <div className="explore-menu-list">
        <div
          className="explore-menu-list-item"
          onClick={() => handleCategoryClick("All")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://res.cloudinary.com/dy3g1sjfe/image/upload/v1721112973/menu_1_zvyx87.png"
            alt="All"
            style={{
              width: "clamp(60px, 8vw, 100px)",
              height: "clamp(60px, 8vw, 100px)",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>All</p>
        </div>
        {menu_list.map((item) => (
          <div
            className="explore-menu-list-item"
            key={item.menu_name}
            onClick={() => handleCategoryClick(item.menu_name)}
          >
            <img src={item.menu_image || "/placeholder.svg"} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu

