import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="white">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#top" class="brand-logo">
            Logo
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#sec1">Navbar Link</a>
            </li>
            <li>
              <a href="#sec2">Navbar Link</a>
            </li>
            <li>
              <a href="#sec3">Navbar Link</a>
            </li>
            <li>
              <a href="#sec4">Navbar Link</a>
            </li>
          </ul>

          <ul id="nav-mobile" class="sidenav">
            <li>
              <a href="#sec1">Navbar Link</a>
            </li>
            <li>
              <a href="#sec2">Navbar Link</a>
            </li>
            <li>
              <a href="#sec3">Navbar Link</a>
            </li>
            <li>
              <a href="#sec4">Navbar Link</a>
            </li>
          </ul>
          <a href="#mobile" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
