import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to the Indian Red Cross Society (IRCS) Blood Donation Website! Here, we invite you to be a part of a compassionate community dedicated to saving lives through voluntary blood donation. Your generous contribution can make a significant difference in the lives of those in need during emergencies and medical crises. Join us in our mission to inspire and facilitate humanitarian efforts, ensuring that every drop counts. Together, we can create a healthier and safer future for our communities.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;