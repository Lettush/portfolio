"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const AboutSection = () => {
  const randomPhoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    randomPhoto();
  }, []);

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"></div>
    </section>
  );
};

export default AboutSection;
