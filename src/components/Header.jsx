import React from "react";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <header className="home">
      <a href="#">
        <img className="logomain"
          loading="lazy"
          src="https://howl.in/wp-content/uploads/2022/11/HOWL-Color-Digital-New-Breed-Logo-1.png"
          alt="HOWL Logo"
        />
      </a>
      <img
      className="nav"
        loading="lazy"
        src="https://howl.in/wp-content/uploads/2023/01/mobile-nav-hamburge.png"
        alt="Nav"
      />
    </header>
  );
};

export default Header;
