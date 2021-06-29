import React from "react";
import { NavLink, NavItem } from "reactstrap";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container" style={{ display: "flex" }}>
          <NavLink href="/">Home</NavLink>

          <NavLink href="/contact/">Contact</NavLink>

          <NavLink href="/about/">About</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
