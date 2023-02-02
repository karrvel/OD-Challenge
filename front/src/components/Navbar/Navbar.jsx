import React from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/green.png";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className={style.Navbar__left}>
        <Link to='/'>
        <a href="#"><img className={style.Navbar__left__logo} src={logo} /> </a>
        
</Link>
      </div>
      <div className={style.Navbar__right}>
        <ul className={style.Navbar__right__ul}>
          
          <Link to='/reports'>
          <li><a >Hisobotlar</a> </li>
          </Link>
        </ul>
       <a href="#"><button className={style.Navbar__right__btn}>Kirish</button> </a> 
      </div>
    </div>
    
  );
};

export default Navbar;
