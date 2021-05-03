import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import { CurrentUserContext } from './JoblyContext';

// display navbar for top of page
function NavBar({ logout }) {
    const currentUser = useContext(CurrentUserContext);
  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem >
          {currentUser ? <NavLink to="/" onClick={logout} class="login">Logout {currentUser.username}</NavLink> : <NavLink to="/login" class="login">Login</NavLink> }
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
