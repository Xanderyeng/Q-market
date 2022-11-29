import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./dropDown.module.css";

const Dropdown = () => {
  return (
    // className="container"
    <div className={`${classes.dropdown}`}>
      <div className={classes.drop_content}>
        <NavLink to='/our-story' activeClassName='current'>
          About us
        </NavLink>
        {/* <div>About us</div> */}
        <NavLink to='/corporate-policies' activeClassName='current'>
          Corporate policies
        </NavLink>
        {/* <div>Corporate gorvenance</div> */}
        <NavLink to='/community' activeClassName='current'>
          Community
        </NavLink>
        <NavLink to='/corporate-sales' activeClassName='current'>
          Corporate Sales
        </NavLink>
        <NavLink to='/branch-network' activeClassName='current'>
          Branch Network
        </NavLink>
        <NavLink to='/careers' activeClassName='current'>
          Careers
        </NavLink>
        <NavLink to='/supplier-relations' activeClassName='current'>
          Supplier Relations
        </NavLink>
        {/* <div>Community</div> */}
        {/* <div>Branch network</div> */}
        {/* <div>Supplier relations</div> */}
        {/* <div>Corporate sales</div> */}
        {/* <div>Careers</div> */}
        {/* <div>Corporate policies</div> */}
        <div>Talk to us</div>
        <div>Q points loyalty program</div>
      </div>
    </div>
  );
};

export default Dropdown;
