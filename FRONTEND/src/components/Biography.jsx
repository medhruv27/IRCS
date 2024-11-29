import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          {/* <p>Biography</p> */}
          <h3>Who We Are</h3>
          <p>
          The Indian Red Cross Society (IRCS) is a voluntary humanitarian organization founded in 1920, with a network of over 1,200 branches across the country. As a proud member of the International Red Cross and Red Crescent Movement, we are committed to providing relief during disasters and promoting health and care for vulnerable populations. Our mission is to inspire, encourage, and initiate humanitarian activities that minimize human suffering and foster peace. With the support of dedicated volunteers, health professionals, and partnerships with various organizations, we strive to create a more compassionate society.
          </p>

        </div>
      </div>
    </>
  );
};

export default Biography;
// import React from "react";
// const Biography = () => {
//      return
//      {<>

//      </>
//      }
// };
// export default Biography;