import React from "react";
import HeroBanner from "../../components/HeroBanner";
import banner from "../../assets/CSR-Community.webp";
import classes from "./community.module.css";

const Community = () => {
  // const overlay = { background: "rgba(235, 44, 30, 0.26)", backgroundBlendMode: "multiply" };
  const overlayImg = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    // objectFit: "fill",
    width: "100vw",
    height: "100%",
    zIndex: "1"
  };
  return (
    <div className={`${classes.overlay_bg}`}>
    {/* className={`${classes.overlay_bg}`} */}
        {/* Community Page */}
      {/* <div className={`${classes.overlay_bg}`}></div> */}

      {/* BELOW PREVIOUS WORKING CODE FOR PULLING A DYNAMIC MAGE FRON HERO BANNER COMPONENT */}
          {/* <HeroBanner banner={banner} title={"Community"} /> */}

          {/* BELOW WORKS LIKE A CHARM !! FINALLY, SETS AN OVERLYA OF RED HUE ONLY ON THE COMMUNITY PAGE */}
          <div style={{ ...overlayImg }}>
          </div>
        <div className={classes.overlay_lower}>

          <HeroBanner title={"Community"} />
        </div>
    </div>
  );
};

export default Community;
