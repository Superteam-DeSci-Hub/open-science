import React from "react";
import "../styles/footer.css"; // Ensure you create and link this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Superteam DeSci Challenge. All rights reserved.</p>
      <p>Contact: <a href="mailto:private.2925672709@vpn.diamonds">info@descihub.org</a></p>
    </footer>
  );
};

export default Footer;