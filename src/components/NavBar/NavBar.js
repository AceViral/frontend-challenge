import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
   return (
      <div className="navWrapper">
         <ul>
            <NavLink to="/kitties" activeClassName="active">
               <li>Все котики</li>
            </NavLink>
            <NavLink to="/favorites" activeClassName="active">
               <li>Любимые котики</li>
            </NavLink>
         </ul>
      </div>
   );
};

export default NavBar;
