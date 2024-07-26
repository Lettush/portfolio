import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-white"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-sm sm:text-lg md:text-xl cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
