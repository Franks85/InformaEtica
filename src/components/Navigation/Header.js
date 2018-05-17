import React, { Component } from "react";
import logo from "./logo.png";
import { navigationLink } from "../../globalData.js";
import _ from "lodash";

class Header extends Component {

  renderNavLink() {
    return _.map(navigationLink, ({ navLink, href }) => {
      return (
        <li key={navLink}>
          <a href={href}>{navLink}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <nav className="white">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#top" className="brand-logo">
              <img src={logo} alt="logo" />
            </a>
            <ul className="right hide-on-med-and-down">{this.renderNavLink()}</ul>

            <ul id="nav-mobile" className="sidenav">
              {this.renderNavLink()}
            </ul>
            <a
              href="#mobile"
              data-target="nav-mobile"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
