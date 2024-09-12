import React from "react";
import Navbar from "../molecules/Navbar";
import Carousel from "../molecules/carousel";
import { aerox, filano, xmax } from "../assets/images";


export const Dashboard = () => {

  let slides = [
      aerox, filano, xmax
  ]

  return (
    <div className="container sm:max-w-full mx-auto bg-slate-400">
      <Navbar />

      <div className="">
        <Carousel slides={slides} />
      </div>

      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum laudantium eum ad eveniet dicta corporis nulla qui harum voluptates culpa deleniti, vero provident ipsam? Atque minima minus odit nulla voluptatum.
      </div>
    </div>
  );
};

export default Dashboard;
