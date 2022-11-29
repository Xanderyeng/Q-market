import React from 'react'
// import banner from "../assets/landing-page.webp";
import classes from "./banner.module.css";

const Banner = (props) => {
  return (
    
     <div className={classes.landing}>
      {/* Landing Page */}
      <img src={props.banner} alt='Landing' />
    </div>
  )
}

export default Banner