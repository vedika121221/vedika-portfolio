import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  let [toggle, setToggle] = useState(false);
  return (
    <nav className="p-5 bg-bgcolor1 px-[35px] text-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // setActive("")
            window.scroll(0, 0);
          }}
        >
          <img src={""} alt="logo" className="w-25 h-9 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 nav-Link">
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#AboutMe">About Me</a>
          </li>
          <li>
            <a href="#ContactMe">Contact Me</a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <CloseIcon sx={{ cursor: "pointer" }} />
            ) : (
              <MenuIcon sx={{ cursor: "pointer" }} />
            )}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } z-10 toggleMenu absolute top-10 mx-4 my-3 min-w-[140px] rounded-md`}
          >
            <ul className="list-none font-sans p-2 flex justify-end items-start flex-col gap-4 nav-Link font-medium">
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#AboutMe">About Me</a>
              </li>
              <li>
                <a href="#ContactMe">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
