import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>
          SignUp
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">SignIn</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
