import "./Footer.css"
import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer page-section" id="contact">
      <div className="footer-content">
        <div className="footer-content-left">
          <div>
            <img className="LogoImg" src={assets.logo || "/placeholder.svg"} alt="DineDash" />
            <div className="menu-line1"></div>
          </div>

          <p>
            "Delivering culinary excellence to your doorstep." <br />
            123 Gourmet Avenue, Foodie District, New York, NY 10001
          </p>
          <div className="footer-social-icons">
            <img className="foot-icons" src={assets.facebook_icon || "/placeholder.svg"} alt="Facebook" />
            <img className="foot-icons" src={assets.twitter_icon || "/placeholder.svg"} alt="Twitter" />
            <img className="foot-icons" src={assets.linkedin_icon || "/placeholder.svg"} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <div>
            <h2>COMPANY</h2>
            <div className="menu-line1"></div>
          </div>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partner With Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <div>
            <h2>CONTACT US</h2>
            <div className="menu-line2"></div>
          </div>
          <ul>
            <li>
              <i className="fas fa-phone"></i> +1 (555) 123-4567
            </li>
            <li>
              <i className="fas fa-envelope"></i> support@dinedash.com
            </li>
            <li>
              <i className="fas fa-clock"></i> Mon-Sun: 8:00 AM - 11:00 PM
            </li>
          </ul>

          <div className="contact-form">
            <h3>Send us a message</h3>
            <form>
              <input type="email" placeholder="Your email" required />
              <textarea placeholder="Your message" rows="3" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Copyright {new Date().getFullYear()} DineDash - All Rights Reserved</p>
    </div>
  )
}

export default Footer

