import React from 'react';
import { Nav, NavItem, NavLink } from "reactstrap";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from "./styled";

function Header() {
  return (
    <Nav className="d-flex flex-row justify-content-around w-100 my-2">
      <NavItem>
        <Logo />
      </NavItem>
      <NavItem className="d-flex flex-row">
        <div>
          <NavLink>About</NavLink>
        </div>
        <div>
          <NavLink>Find all jobs</NavLink>
        </div>
        <div>
          <NavLink>Contact</NavLink>
        </div>
      </NavItem>
      <NavItem className="d-flex flex-row align-items-center">
        <div className="mr-3 mt-2">
          <p className="text-dark font-weight-bold">Sign in</p>
        </div>
        <div>
          <Button>Sign up</Button>
        </div>
      </NavItem>
    </Nav>
  )
}

export default Header;