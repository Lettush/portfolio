"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "vtm1ns Music Vault",
    description: "This is my music collection / portfolio.",
    image: "/images/projects/1.png",
    tag: ["All", "React", "Material UI"],
    gitUrl: "https://github.com/Lettush/vtm1ns-music-vault",
    previewUrl: "https://vtm1ns.vercel.app/",
  },
  {
    id: 2,
    title: "SAWCON",
    description:
      "This is a web application that works in conjuction with a water pipe Arduino device.",
    image: "/images/projects/2.png",
    tag: ["All", "React", "Firebase"],
    gitUrl: "private",
    previewUrl: "https://sawcon-7c6d4.web.app/",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description:
      "This is the Tic Tac Toe game that utilizes the MERN stack to save game progresses.",
    image: "/images/projects/3.png",
    tag: ["All", "React", "MERN"],
    gitUrl: "https://github.com/Lettush/TicTacToe",
    previewUrl: "https://tic-tac-toe-frontend-server.vercel.app/",
  },
  {
    id: 4,
    title: "Word Guessing Game",
    description: "This is a simple HTML/CSS/JS word guessing game.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/Lettush/WordGuessingGame",
    previewUrl: "https://word-guessing-game-gilt.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const tagList = ["All", "React", "Firebase", "MERN"];

  const handleTagChange = (newTag) => {
    setSelectedTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {tagList.map((tag) => {
          return (
            <ProjectTag
              key={tag}
              onClick={() => handleTagChange(tag)}
              name={tag}
              isSelected={selectedTag === tag}
            />
          );
        })}
        {/* For Mobile Projects
          <ProjectTag
            onClick={() => handleTagChange("Mobile")}
            name="Mobile"
            isSelected={tag === "Mobile"}
          /> 
        */}
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsSection;
