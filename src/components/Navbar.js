import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../Navbar.css";

class Navbar extends React.Component {
  getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : 'disabled';
    }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <a className="navbar-brand">
            <NavLink
              to="/"
            >
              <img
                src="https://raw.githubusercontent.com/SimpleMobileTools/Simple-Calendar/master/fastlane/metadata/android/en-US/images/icon.png"
                alt="Quest Board logo"
                className="navbar-logo"
              />
            </NavLink>
          </a>
          <button
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/app"
                    className={
                      this.getNavLinkClass("/app")
                    }
                  >
                    Aplicación
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/performance"
                    className={
                      this.getNavLinkClass("/performance")
                    }
                  >
                    Performace
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/testing"
                    className={
                      this.getNavLinkClass("/testing")
                    }
                  >
                    Testing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/fragmentation"
                    className={
                      this.getNavLinkClass("/fragmentation")
                    }
                  >
                    Fragmentación
                  </NavLink>
                </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

Navbar = withRouter(Navbar);
export default Navbar;