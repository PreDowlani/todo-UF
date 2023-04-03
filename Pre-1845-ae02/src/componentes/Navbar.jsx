import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to={"/aboutus"}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to={"/contacto"}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
