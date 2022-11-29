import React from "react";
import classes from "./footer.module.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div>
  
      <footer className={classes.footer}>
        <div
          className={`${classes.container} ${classes.grid_footer} ${classes.grid}`}
        >
          <div className={classes.logo_col}>
            <a href='#' class='footer-logo'>
              <NavLink to='/' exact>
                <img src={logo} alt='Quickmart Logo' className={classes.logo} />
              </NavLink>
            </a>
          </div>
          <div>
            <p className={classes.footer_heading}>about</p>
            <ul>
              <li>
                <NavLink to='/our-story' activeClassName='current'>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to='/corporate-sales' activeClassName='current'>
                  Corporate Sales
                </NavLink>
              </li>
              <NavLink to='/community' activeClassName='current'>
                Community
              </NavLink>
              {/* <li>Community</li> */}
              <li>
                <NavLink to='/supplier-relations' activeClassName='current'>
                  Supplier Relations
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to='/branch-network' activeClassName='current'>
                  Branch Network
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to='/careers' activeClassName='current'>
                  Careers
                </NavLink>
              </li>
              {/* <li>Corporate Policies</li> */}

              {/* <div>Corporate gorvenance</div> */}
              <li>
                <NavLink to='/corporate-policies' activeClassName='current'>
                  Corporate policies
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.footer_heading}>customer service</p>
            <ul>
              <li>Privacy policy</li>
              <li>returns policy</li>
              <li>talk to us</li>
              <li>Supplier Relations</li>
              <li>cookie policy (EU)</li>
              <li></li>
            </ul>
          </div>
          <div>
            <p className={classes.footer_heading}>services</p>
            <ul>
              <li>Q Points Loyalty Program</li>
              <li>Home Delivery</li>
              <li>Zawadi Bora Vouchers</li>
              <li>Corporate Sales</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div>
            <p className={classes.footer_heading}>Newsletter</p>
            <p></p>
            <ul>
              <li>
                <p>
                  Be the first to know about our new arrivals and exclusive
                  offers.
                </p>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
