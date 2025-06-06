import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { router } from "../router";
import closeImg from "@/assets/images/close.png";
const Header = () => {
  const [menu, setmenu] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <button className="menu" onClick={()=>setmenu(true)}>menu</button>
          <ul className={`header__list ${menu ? 'active' : ''}`}>
            <li className="close" onClick={()=>setmenu(false)}><img src={closeImg} alt="" /></li>
            {router.map((route, index) => (
              <li key={index}>
                <NavLink className="header__link" to={route.path}>
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
