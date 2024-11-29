import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Donation Camp",
      imageUrl: "/departments/NirankariBloodDonationCamp.jpeg",
    },
    {
      name: "Relief Supplies",
      imageUrl: "/departments/Keralafloods.jpg",
    },
    {
      name: "Livelihood Programs",
      imageUrl: "/departments/manipur-livelihood3.jpg",
    },
    {
      name: "First Aid",
      imageUrl: "/departments/FirstAid.jpg",
    },
    {
      name: "Youth Program",
      imageUrl: "/departments/youth.jpeg",
    },
    {
      name: "TB Program",
      imageUrl: "/departments/TBproject.jpg",
    },
    {
      name: "Oxygen Supply",
      imageUrl: "/departments/oxy.jpg",
    },
    {
      name: "Medical Support",
      imageUrl: "/departments/med.jpg",
    },
    {
      name: "Elder Support",
      imageUrl: "/departments/elder care.png",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Our service</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Our Service" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
// import React from "react";
// const Departments = () => {
//      return
//      {<>

//      </>
//      }
// };
// export default Departments;