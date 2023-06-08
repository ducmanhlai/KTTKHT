import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../HeroOfWeek/Hero";
import Device from "../DeviceRequired/Device";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Device />
      <Footer />
    </>
  );
}
