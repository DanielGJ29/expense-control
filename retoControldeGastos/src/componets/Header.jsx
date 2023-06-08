import React from "react";
import { NavLink } from "react-router-dom";

import "./header.style.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid bg-primary nav-container text-white">
        <div className="row">
          <div
            className={`(isActive) =>
                "active"  + (!isActive ? " unselected" : "") col-md-12 d-flex justify-content-between align-items-center alig py-3`}
          >
            <NavLink exact to={`${"01"}`} className="item">
              Enero
            </NavLink>
            <NavLink to={`${"02"}`} className="item">
              Febrero
            </NavLink>
            <NavLink to={`${"03"}`} className="item">
              Marzo
            </NavLink>
            <NavLink to={`${"04"}`} className="item">
              Abril
            </NavLink>
            <NavLink to={`${"05"}`} className="item">
              Mayo
            </NavLink>
            <NavLink to={`${"06"}`} className="item">
              Junio
            </NavLink>
            <NavLink to={`${"07"}`} className="item">
              Julio
            </NavLink>
            <NavLink to={`/${"08"}`} className="item">
              Agosto
            </NavLink>
            <NavLink to={`/${"09"}`} className="item">
              Septiembre
            </NavLink>
            <NavLink to={`/${"10"}`} className="item">
              Octubre
            </NavLink>
            <NavLink to={`/${"11"}`} className="item">
              Noviembre
            </NavLink>
            <NavLink to={`/${"12"}`} className="item">
              Diciembre
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
