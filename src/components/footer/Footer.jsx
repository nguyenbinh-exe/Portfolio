import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Nguyen</h1>
        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer_link">Projects</a>
            </li>
        </ul>
          <div className="footer_social">
              <a href="https://www.linkedin.com/in/nguyenbinh-exe/" className="footer_social-link" target="_blank">
                  <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/nguyenbinh-exe" className="footer_social-link" target="_blank">
                  <i className="bx bxl-github"></i>
              </a>
              <a href="" className="footer_social-link" target="_blank">
                  <i className="bx bx-envelope"></i>
              </a>
          </div>
          <span className="footer_copy">&#169; Binh Nguyen. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
