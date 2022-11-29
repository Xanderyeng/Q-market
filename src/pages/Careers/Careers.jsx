import React from "react";
import HeroBanner from "../../components/HeroBanner";
import banner from "../../assets/Careers-Banner.webp";

const Careers = () => {
  return (
    <div>
      <section>
        <div>
          {/* Careers Page */}
          <HeroBanner banner={banner} title={"Careers"} />
        </div>
      </section>
    </div>
  );
};

export default Careers;
