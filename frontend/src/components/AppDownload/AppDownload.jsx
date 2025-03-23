import "./AppDownload.css"
import { assets } from "../../assets/assets"

const AppDownload = () => {
  return (
    <div className="app-download page-section" id="mobile-app">
      <div className="app-download-content">
        <div className="app-download-text">
          <h1>Get the DineDash App</h1>
          <div className="menu-line"></div>
          <h2>Order food faster than ever</h2>
          <p>
            Download our mobile app for a seamless food ordering experience. Enjoy exclusive app-only deals, track your
            delivery in real-time, and manage your favorite restaurants all in one place.
          </p>
          <div className="app-download-features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="feature-text">
                <h3>Fast Ordering</h3>
                <p>Order in just a few taps</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="feature-text">
                <h3>Live Tracking</h3>
                <p>Know exactly when your food will arrive</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-tag"></i>
              </div>
              <div className="feature-text">
                <h3>Exclusive Offers</h3>
                <p>Get app-only discounts and deals</p>
              </div>
            </div>
          </div>
          <div className="app-download-platforms">
            <img src={assets.play_store || "/placeholder.svg"} alt="Download on Play Store" />
            <img src={assets.app_store || "/placeholder.svg"} alt="Download on App Store" />
          </div>
        </div>
        <div className="app-download-image">
          <img src={assets.mobile_app || "/placeholder.svg"} alt="DineDash App" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload

