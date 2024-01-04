import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkButton = ({ to, title }) => {
  return (
    <NavLink to={to}>
      <button className="border-0 bg-transparent ">
        {title}
      </button>
    </NavLink>
  );
};

export default NavLinkButton;
