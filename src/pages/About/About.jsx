import React from "react";
import classes from "./about.module.css";
import HeroBanner from "../../components/HeroBanner";
import banner from "../../assets/tuktuk-banner.png";
import timeline from "../../assets/Timeline.webp"
import branches from "../../assets/branches.webp"

const about = () => {
  return (
    <div>
      {/* About Page - Our Story */}
      <section>
        <HeroBanner banner={banner} title={'About Us'}/>
      </section>
      <section>
        <div className={classes.container}>
          <h1>The Quickmart story</h1>
          <p >
            
              Quickmart Ltd is a homegrown supermarket established in 2006 with
              our first branch in Nakuru town. We’ve later grown and so far have
              a total of <span>53 branches</span> in <span>13 counties</span> across Kenya with a total
              workforce of 5,000+ employees.
          </p>

          <p>
            
              At Quickmart we pride ourselves with delivering an exceptional
              customer experience every time while providing our shopper with
              variety of goods at an affordable price!
          </p>
          <p>
              Visit any of our branches today and enjoy delectable pastries from
              our Bakery, sumptuous meals at our Deli, fresh cuts at the
              Butchery and so much more! Unique Value Proposition
            
          </p>
          <p>
           Fresh & Easy. Price Guarantee!
          </p>
        </div>
      </section>
      <section>
        <img className={`${classes.timeline}`} src={timeline} alt="Timeline"/>
      </section>

      <section className={`${classes.container} ${classes.video}`}>
        YouTube Video
      </section>

      <section className={`${classes.container} ${classes.grid} ${classes.video}`}>
        <div className={`${classes.branches}`}>
        <img src={branches} />
        </div>
        <div className={`${classes.counter}`}>
        counter
        </div>
      </section>

    </div>
  );
};

export default about;
