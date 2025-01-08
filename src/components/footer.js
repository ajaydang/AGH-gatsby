import { Link } from "gatsby"
import React from "react"

import MainLogo from "../images/client-logo/main-logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-header">
          <img src={MainLogo} alt="Main Logo" />
          <p>Data-driven accountability:</p>
          <p>optimize healthcare operations</p>
        </div>

        <div className="footer-group">
          <h2 className="footer-group__title">Our Company</h2>
          <ul className="footer-menu">
            <li className="footer-menu__item">
              <Link to="/">Home</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">About Us</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">News</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">Blog</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">Our Team</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">Careers</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-group">
          <h2 className="footer-group__title">Solutions & Services</h2>
          <ul className="footer-menu">
            <li className="footer-menu__item">
              <Link to="/">Surgical Cost Management</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">Surgical Coding Optimization</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">Surgical Quality and Outcomes Optimization</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">PACU and OR Throughput</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">BPCI Management</Link>
            </li>
          </ul>
        </div>

        <div className="footer-group">
          <h2 className="footer-group__title">Research</h2>
          <ul className="footer-menu">
            <li className="footer-menu__item">
              <Link to="/">2024 Healthcare Research All-Stars</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">Research and Publications</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">VBHC Research Group</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">View Benchmark Data</Link>
            </li>

            <li className="footer-menu__item">
              <Link to="/">
                Evaluate physicians and departments against Avant-garde
                benchmark data.
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        © Copyright{new Date().getFullYear()}, All Rights Reserved by Avant
        Garde Health
      </div>
    </footer>
  )
}

export default Footer
