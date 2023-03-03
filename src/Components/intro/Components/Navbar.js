import React from "react";
import "./Navbar.css";
import styles from "./styles";
function Navbar() {
  return (
    <nav style={styles.navbar} className="navbar">
      <ul style={styles.navLinks} className="nav-links">
        <li style={styles.navLinks.li}>
          <a style={styles.navLinks.li.a} href="#">
            Home
          </a>
        </li>
        <li style={styles.navLinks.li}>
          <a style={styles.navLinks.li.a} href="#">
            About
          </a>
        </li>
        <li style={styles.navLinks.li}>
          <a style={styles.navLinks.li.a} href="#">
            Team
          </a>
        </li>
        <li style={styles.navLinks.li}>
          <a style={styles.navLinks.li.a} href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
