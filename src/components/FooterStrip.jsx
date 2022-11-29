import React from "react";
import priceImage from "../assets/Price-Guaranteed.png";
import greatValue from "../assets/great-value.png";
import offers from "../assets/Attractive-Offers.png";
import classes from "./footerStrip.module.css"

const footerStrip = () => {
  return (
    <div>
    {/* strip */}
      <div className={`${classes.container}`}>
        {/* // ${classes.container} ${classes.grid_center_v} */}
        <div className={` ${classes.grid_3_cols} ${classes.grid}  `}>
          <div className={`${classes.footer_strip} `}>
            <img
              src={priceImage}
              alt='price guarantee image'
              className={classes.price_image}
            />
            Price Guarantee
          </div>
          <div className={classes.footer_strip}>
            {" "}
            <img
              src={greatValue}
              alt='great value'
              className={classes.great_value}
            />
            Great Value
          </div>
          <div className={classes.footer_strip}>
            {" "}
            <img
              src={offers}
              alt='price guarantee image'
              className={classes.great_value}
            />
            Attractive Offers
          </div>
        </div>
      </div>
    </div>
  );
};

export default footerStrip;
