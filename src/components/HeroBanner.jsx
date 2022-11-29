import React from "react";
import classes from "./heroBanner.module.css";

const HeroBanner = (props) => {
  return (
    <div className={`${classes.banner}`}>
      {/* HeroBanner */}
      <img src={props.banner} alt='quickmart tuktuk banner' />
      <div className={`${classes.title}`}>{props.title}</div>
    </div>
  );
};

export default HeroBanner;
