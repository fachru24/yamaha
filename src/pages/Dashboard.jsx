import React from "react";
import Navbar from "../molecules/Navbar";
import Carousel from "../molecules/carousel";
import { aerox, filano, xmax } from "../assets/images";


export const Dashboard = () => {

  let slides = [
      aerox, filano, xmax
  ]

  return (
    <div className="container sm:max-w-full mx-auto">
      <Navbar />

      <div className="">
        <Carousel autoSlide = {true} autoSlideInterval={4000} slides={slides} />
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 bg-[#003688]  -mt-3 md:-mt-5 lg:-mt-8 z-20 py-10 lg:py-8">
        <div className="flex flex-col items-center justify-center mx-auto mb-10 md:mb-0"> 
          <span className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold py-2">225+</span>
          <span className="text-white text-lg  lg:text-xl">Client</span>
        </div>
        <div className="flex flex-col items-center mx-auto"> 
          <span className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold py-2">1200</span>
          <span className="text-white text-lg lg:text-xl">Motor dikirim</span>
        </div>
        <div className="flex flex-col items-center mx-auto"> 
          <span className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold py-2">17</span>
          <span className="text-white text-lg lg:text-xl ">Provinsi</span>
        </div>
        <div className="flex flex-col items-center mx-auto"> 
          <span className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold py-2">11</span>
          <span className="text-white text-lg lg:text-xl ">Tahun Pengalaman</span>
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
