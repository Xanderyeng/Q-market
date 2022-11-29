import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
// import About from "./pages/about/About";
// import Community from "./components/community/Community";
import logo from "../assets/logo.png";
import classes from "./navbar.module.css";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        {/* TOP STRIP INFO BAR */}
        <div className={classes.navbar_container_strip}>
          {/* <div>Find a store</div> */}
          <NavLink to='/branch-network' activeClassName='current'>
          Find a store
        </NavLink>
          <div>Customer Service</div>
          <div>0717 904 904</div>
        </div>
        {/* MAIN NAVBAR */}
        <div className={classes.navbar_container}>
          <header>
            <NavLink to='/' exact>
              <img src={logo} className={classes.logo}></img>
            </NavLink>

            <nav>
              {/* className='navbar' ul >> className='navbar_list' */}
              <section className={`${isOpen ? classes.open : classes.close}`}>
                <Dropdown />
              </section>
              {/* BUTTON TO TEST OUT MENU OPENING AND CLOSING FUNCTIONALITY */}
              {/* <button onClick={handleToggle}>
                {isOpen ? "Close" : "Open"}
              </button> */}

              <Hamburger duration={0.3} toggled={isOpen} toggle={setIsOpen} easing="ease-in" />

              <NavLink to='/our-story' activeClassName='current'>
                Our story
              </NavLink>
              {/* <ul> */}
                {/*  */}
                {/* <button className={`${isOpen ? "showMenu" : " "}`}>
                  drop test
                </button> */}

                {/* <NavLink to='/' activeClassName='current' exact>
                  Home
                </NavLink>
                <li>Rewards</li>
                <li>Branches</li>
                <NavLink to='/community' activeClassName='current'>
                  Community
                </NavLink> */}
              {/* </ul> */}
            </nav>
          </header>
        </div>
        {/* DROPDOWN Hamburger MENU */}
        {/* TO CREATE LATER AFTER THE PAGES ARE DONE ${classes.dropdown_menu} */}
        {/* <section className={`${isOpen ? classes.close : classes.open}`}> */}
        {/* <div>
            test
          </div> */}
        {/* </section> */}
      </div>
    </div>
  );
};

export default NavBar;
