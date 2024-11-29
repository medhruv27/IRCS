import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
    {/* <div style={{ paddingTop: "70px" }}></div> */}
      <Hero
        title={"   Schedule Your Appointment | IRCS"}
        imageUrl={"/signin.png"}
      
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;