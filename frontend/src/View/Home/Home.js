import React, { useContext } from "react";
// import Header from "../../Component/Header/Header";
// import Footer from "../../Component/Footer/Footer";
import HeroFree from "../../Component/FreeHeroOfWeek/HeroFree";
import Device from "../../Component/DeviceRequired/Device";
import Slider from "../../Component/Slider/Slider";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Slider />
      <HeroFree />
      <Device />
      {/* <Footer /> */}
    </>
  );
}
