import React, { useState } from "react";
import "./navbar.css";
import { ImCross } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { Link } from "react-router-dom";
import logo from './Image/logo1.png'
function Navbar() {
  const [navres, setNavres] = useState(false)
  return (
    <div className="main_nav">
      <div className="nav_bar">
        <div className="logo">
       <img src={logo} alt='logo' />
        </div>
        <div className="right_side">
          <ul
            className={navres ? "navlink_mobile" : "nav_ul"}
            onClick={() => setNavres(false)}
          >
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product </Link>
            </li>
            
          </ul>
        </div>
        <div >
          <ul className={navres ? "navlink_mobile1" : "nav_ul"}
            onClick={() => setNavres(false)}
          >
            
            <li>
              <Link to="/cart">Cart<FaShoppingCart /> </Link>
              {/* <span className="countcart">0</span> */}
           
            </li>
           
            <li>
              <Link to="/login">Login <FaUserPlus/></Link>
            </li>

          </ul>

          <div className="home-icon" onClick={() => setNavres(!navres)}>
            {navres ? <ImCross /> : <GoThreeBars />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
