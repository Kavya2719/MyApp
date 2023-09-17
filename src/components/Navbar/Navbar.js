import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";

const Navbar = ({
  color,
  highlightColor,
  currentPage,
  logo,
  bgColor,
  handleChangeActiveMenu,
  screenSize
}) => {
  const [activeSidebar, setActiveSidebar] = useState(true);

  useEffect(() => {
    if (screenSize <= 750) setActiveSidebar(true);
    else setActiveSidebar(false);
  }, [screenSize]);

  return (
    <div className="navbar" style={{ backgroundColor: `${bgColor}` }}>
      <div className="talentfinder-parentt">
        <div className="talentfinder">
          <img src={logo} alt="reworkLogo" />
        </div>
      </div>

      {activeSidebar ? (
        <button
          style={{ backgroundColor: `${bgColor}`, color }}
          className="menu-btn"
          onClick={handleChangeActiveMenu}
        >
          <AiOutlineMenu />
        </button>
      ) : (
        <div className="navbar-element-parent">
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
                color: `${
                  currentPage === "placement" ? highlightColor : color
                }`,
              }}
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
            >
              Hire
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
