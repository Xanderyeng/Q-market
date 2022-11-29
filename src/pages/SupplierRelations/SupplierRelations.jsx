import React from "react";
import HeroBanner from "../../components/HeroBanner";
import banner from "../../assets/Investor-banner-2.webp";
import classes from "./SupplierRelations.module.css";
// import banner1 from "../../assets/matunda-breaker-2.png";

const SupplierRelations = () => {
  return (
    <div >
      {/* Supplier Relations Page */}
      <HeroBanner banner={banner} title={"supplier relations"} />
      {/* TOP SECTION */}
      <div className={classes.sect_banner}>
        <section className={classes.container}>
          <h2>We appreciate our suppliers and partners</h2>
          <p>
            We are currently working with over 600 suppliers and receive produce
            from over 14&sbquo;000 farmers drawn from across the country.
          </p>
          <p>
            Through this relationship, the local farmers that supply their fresh
            produce to our stores across the country are assured of a ready and
            reliable market which translates to a steady income.
          </p>
          <p>
            We are also pleased to currently have over 40&sbquo;000 SKUs stocked
            on our shelves. This is made possible by the many different
            suppliers who equally believe in our journey to becoming
            Kenya&rsquo;s number one retailer.
          </p>
          <p>
            This has enabled us to fulfill our customers&rsquo; need for variety
            and even exceed their expectations
          </p>
        </section>
      </div>
      {/* LOWER SECTION */}
      <section className={classes.container}>
        <h2>Are you interested in becoming a Quickmart Supplier?</h2>
        <p>
          Being Kenyas fastest growing retailer isn&sbquo;t possible without
          great products.
        </p>
        <p>
          So, if you&rsquo;re as dedicated as we are to delivering great quality
          then why not think about joining us, so you can share in our success.
        </p>
        <p>
          <h3>
            Fill out and submit the form below if interested in becoming our
            supplier. Our supplier management team will evaluate your
            application and get back to you as soon as we can.
          </h3>
        </p>
        <button>apply here</button>
        <h2>our suppliers</h2>
      </section>
      <section></section>
    </div>
  );
};

export default SupplierRelations;
