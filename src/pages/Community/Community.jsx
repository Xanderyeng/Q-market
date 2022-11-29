import React from "react";
import HeroBanner from "../../components/HeroBanner";
import banner from "../../assets/CSR-Community.webp";
import classes from "./community.module.css";

const Community = () => {
  return (
    <div>
      <div className={`${classes.overlay_bg}`}>
        {/* Community Page */}
        <HeroBanner banner={banner} title={"Community"} />
      </div>
    </div>
  );
};

export default Community;
