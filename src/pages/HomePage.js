import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Prices from "../components/Prices";
import CallToAction from "../components/CallToAction";
import Review from "../components/Review";

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Prices />
      <CallToAction />
      <Review />
    </div>
  );
}

export default HomePage;
