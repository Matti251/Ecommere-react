import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              Logo
            </div>
            <div className="footer-links">
              <ul className="footer-menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2023 Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
