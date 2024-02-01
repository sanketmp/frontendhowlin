import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul className="socials">
            <li className="social-icon">
              <a href="https://twitter.com/howlhqwastaken/">
                <FaXTwitter />
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.instagram.com/howlhq/">
                <FaInstagram />
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.youtube.com/@howldigital">
                <FaYoutube />
              </a>
            </li>
            <li className="social-icon">
              <a href="https://www.linkedin.com/company/howlhq/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <ul className="redirects">
            <li className="page-links">
              <a href="https://howl.in/work/" target="_blank">
                Work
              </a>
            </li>
            <li className="page-links">
              <a href="https://howl.in/about/" target="_blank">
                About
              </a>
            </li>
            <li className="page-links">
              <a href="https://howl.in/careers/" target="_blank">
                Join The Pack
              </a>
            </li>
            <li>
              <div className="newsletter">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newslet"
                  placeholder="Sign up to newsletter"
                />
                <button
                  onClick={() => setEmail("")}
                  className="submitbutton"
                  type="submit"
                >
                  <FaArrowRight className="arrow" />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <p className="rights">
            All rights reserved Designed, developed &amp; powered by HOWL
            Digital Agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
