import React from "react";
import HeroFree from "../FreeHeroOfWeek/HeroFree";
import Device from "../DeviceRequired/Device";
import Slider from "../Slider/Slider";
export default function Home() {
  return (
    <>
      <Slider />
      <HeroFree />
      <Device />
    </>
  );
}
