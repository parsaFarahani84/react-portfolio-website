import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import './footer.css';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Parsa Farahani
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook">
          {" "}
          <FaFacebookF />
        </a>
        <a href="https://instagarm.com">
          <FiInstagram />
        </a>
        <a href="https://twitter">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; All rights reserved. </small>
      </div>
    </footer>
  );
}

export default Footer;
