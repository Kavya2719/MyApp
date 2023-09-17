import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({
  bgColor,
  color,
  currentPage,
  highlightColor,
  handleChangeActiveMenu,
}) => {

  return (
    <div className="half-transparent">
      <div className="sidebar" style={{ backgroundColor: `${bgColor}` }}>
          <button
            className="menu-btn close-btn"
            style={{ backgroundColor: `${bgColor}`, color }}
            onClick={handleChangeActiveMenu}
          >
            <MdOutlineCancel />
          </button>

          <NavLink
            to="/"
            className="navbar-element"
            style={{ color: `${bgColor}` }}
          >
            <div
              className={currentPage === "homepage" ? "highlight" : "normal"}
              style={{
                color: `${currentPage === "homepage" ? highlightColor : color}`,
              }}
              onClick={handleChangeActiveMenu}
            >
              Mentorship & Placement
            </div>
          </NavLink>

          <NavLink
            to="/placement"
            className="navbar-element"
            style={{ color: `${bgColor}` }}
          >
            <div
              className={currentPage === "placement" ? "highlight" : "normal"}
              style={{
                color: `${currentPage === "placement" ? highlightColor : color}`,
              }}
              onClick={handleChangeActiveMenu}
            >
              Placement
            </div>
          </NavLink>

          <NavLink
            to="/hire"
            className="navbar-element2"
            style={{ color: `${bgColor}` }}
          >
            <div
              className={currentPage === "hire" ? "highlight" : "normal"}
              style={{
                color: `${currentPage === "hire" ? highlightColor : color}`,
              }}
              onClick={handleChangeActiveMenu}
            >
              Hire
            </div>
          </NavLink>
        </div>
    </div>
  );
};

export default Sidebar;
