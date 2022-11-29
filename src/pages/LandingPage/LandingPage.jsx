// import classes from "./landingPage.module.css";
import banner1 from "../../assets/landing-page.webp";
import banner2 from "../../assets/mlolongo-banner.webp";
import banner3 from "../../assets/weekendi-offers.png";
import banner4 from "../../assets/Q-Points.webp";

import React from "react";
import Banner from "../../components/Banner";
import classes from "./landingPage.module.css";

// const image = banner;

const LandingPage = (props) => {
  return (
    // <div className={classes.landing}>
    //   Landing Page
    //   <img src={banner} alt='Landing' />
    // </div>
    //   {/* <section className={classes.container}>
    //   </section> */}
    <div>
    {/* SECTIONS CARRY THE CSS STYLING BEST */}
      <section className={classes.container}>
        <Banner banner={banner1} />
      </section>
      <section className={`${classes.container} ${classes.card}`}>
        <Banner banner={banner2} />
      </section>
      <section className={classes.card_long} >
        <Banner banner={banner3} />
      </section>
      <section className={`${classes.container} ${classes.card}`}>
        <Banner banner={banner4} />
      </section>
    </div>
  );
};

export default LandingPage;
