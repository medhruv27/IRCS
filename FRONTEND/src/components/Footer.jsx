import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "Open 24 hours",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "Open 24 hours",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "Open 24 hours",
    },
    {
      id: 4,
      day: "Thursday",
      time: "Open 24 hours",
    },
    {
      id: 5,
      day: "Friday",
      time: "Open 24 hours",
    },
    {
      id: 6,
      day: "Saturday",
      time: "Open 24 hours",
    },
    {
      id: 7,
      day: "Sunday",
      time: "Open 24 hours",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div >
            <img src="/ircslogo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>(+91-11) 23716441/2/3</span>
            </div>
            <div>
              <MdEmail />
              {/* <span>ircs@indianredcross.org</span> */}
              <a href="mailto:ircs@indianredcross.org">ircs@indianredcross.org</a>

            </div>
            <div>
              <FaLocationArrow />
              <span>IRCS
                      1, Red Cross Road
                      New Delhi - 110001
                      INDIA</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;