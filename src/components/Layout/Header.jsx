import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Logo from "/src/assets/images/logo.png";
import './Header.scss';
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <Navbar>
        <NavbarBrand>
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              className="mr-3 sm:h-9 img-fluid"
              alt="Phone Software Logo"
            />
          </Link>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className="ms-auto justify-content-end w-50 md:justify-center w-full text-center">
        <NavbarLink as={Link} to="/" className="text-xl text-amber-800 font-medium md:hover:text-green-700">
            Home
          </NavbarLink>
          <NavbarLink as={Link} to="/about" className="text-xl text-amber-800 font-medium md:hover:text-green-700">
            About
          </NavbarLink>
          <NavbarLink as={Link} to="/products" className="text-xl text-amber-800 font-medium md:hover:text-green-700">
            Products
          </NavbarLink>
          <NavbarLink as={Link} to="/contact" className="text-xl text-amber-800 font-medium md:hover:text-green-700">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}

export default Header;
