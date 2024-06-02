import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome to AIIMS LUCKNOW | Your Trusted Healthcare Provider"}
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
