import "../index.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h2>Logo</h2>
          </div>

          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li>
              <Link
                to="/home"
                className={location.pathname === "/home" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={location.pathname === "/services" ? "active" : ""}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={closeMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <div
            className={isOpen ? "hamburger active" : "hamburger"}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
