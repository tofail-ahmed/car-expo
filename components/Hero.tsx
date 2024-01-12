"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    //     return "clicked";
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or and rent a Car -- Quickly and Easily
        </h1>
        <p>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyle="bg -primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        ></CustomButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Hero_image" fill className="object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
