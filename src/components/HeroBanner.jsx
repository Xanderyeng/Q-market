import React from "react";
import classes from "./heroBanner.module.css";

const HeroBanner = (props) => {
  // const banner = {
  //   backgroundImage: `url(${props.banner})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "100%",
  // style={{ ...banner }}
  // };
  const overlay = {
    // backgroundColor: "rgba(12, 103, 177, 0.425)",
    backgroundColor: "var(--overlay-red-color)",
    // backgroundBlendMode: "overlay",
    // display: "block",
    position: "absolute",
    height: "24.6rem",
    width: "100%",
    zIndex: "1",
  };

  const overlayImg = {
    backgroundImage: `url(${props.banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    // objectFit: "fill",
    width: "100%",
    height: "100%",
    zIndex: "1"
  };

  return (
    <div className={`${classes.banner}`}>
      {/* HeroBanner USING IMG ELEMENT - done */}
      {/* <img src={props.banner} alt='quickmart tuktuk banner' /> */}

      {/* HERO BANNER USING 3 DIVS TO CREATE A BACKROP propped/dynamic image + an overlay color and BANNER TITLE ☻*/}
      <div className={`${classes.title}`}>{props.title}</div>
      
      <div style={{ ...overlayImg }}></div>
      {/* <div style={{ ...overlay }}></div> */}

      {/* style={{ backgroundImage: `url(${props.banner})` }} */}
      {/* style={{ linearGradient(180deg, rgba(255, 255, 255, 0.03)50%, rgba(0, 0, 0, 0.9) 100%)}} */}
    </div>
  );
};

export default HeroBanner;
