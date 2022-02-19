import React from "react";
import "./Topbar.scss";

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Monayem
          </a>
          <div className="itemContainer">
            <i className="ri-phone-fill icon"></i>
            <span> +88-01777-930838</span>
          </div>
          <div className="itemContainer icon">
            <i className="ri-mail-fill icon"></i>
            <span>monayemhossain347@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <i className="ri-menu-line ri-2x  "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
