import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to the Indian Red Cross Society (IRCS) Blood Donation Website! Here, we invite you to be a part of a compassionate community dedicated to saving lives through voluntary blood donation. Your generous contribution can make a significant difference in the lives of those in need during emergencies and medical crises. 

          Join us in our mission to inspire and facilitate humanitarian efforts, ensuring that every drop counts. Together, we can create a healthier and safer future for our communities. By donating blood, you're not just saving lives — you're also spreading hope and kindness to families in their most challenging moments. 

          Explore our resources, learn more about the importance of blood donation, and take the first step toward becoming a hero for someone in need. Let's unite for a cause that truly makes a lasting impact.
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