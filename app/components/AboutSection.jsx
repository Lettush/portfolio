"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc ml-5">
        <li>MERN Stack</li>
        <li>Tailwind / Bootstrap</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Django</li>
        <li>Odoo</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc ml-5">
        <li>iACADEMY</li>
        <li>ONECODECAMP</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc ml-5">
        <li>Placeholder 1</li>
        <li>Placeholder 2</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="h-full">
          <Image
            src={"/images/about-image.avif"}
            alt="About Me Image"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            With a diverse background in Software Engineering, I specialize in
            Web Development, REST API, Full Stack Django Development, and MERN
            Development. I excel in creating dynamic web applications and
            designing robust APIs, and outside of tech, I indulge in music
            production, blending creativity with technical expertise.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
