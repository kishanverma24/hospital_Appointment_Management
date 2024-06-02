import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

function Appointment() {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | AIIMS LUCKNOW INDIA"}
        imageUrl={"/doctor-check.webp"}
      />
      <AppointmentForm />
    </>
  );
}

export default Appointment;
