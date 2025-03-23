import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Header.css"

const Header = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  }

  const slides = [
    {
      heading: "Delicious Indian Cuisine Delivered",
      text: "Experience authentic flavors from across India, prepared with the finest ingredients and traditional recipes.",
      buttonText: "View Menu",
      link: "#menu", // Add link property
    },
    {
      heading: "Quick & Reliable Delivery",
      text: "Hot and fresh meals delivered to your doorstep in record time, anywhere in the city.",
      buttonText: "Order Now",
      link: "#menu", // Add link property
    },
    {
      heading: "Premium Quality Food",
      text: "Enjoy restaurant-quality meals prepared by expert chefs, right at your home.",
      buttonText: "Explore Dishes",
      link: "#menu", // Add link property
    },
  ]

  return (
    <div className="header">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div className="header-slide" key={index}>
            <div className="header-contents">
              <h2>{slide.heading}</h2>
              <p>{slide.text}</p>
              <a href={slide.link}>
                <button>{slide.buttonText}</button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Header

