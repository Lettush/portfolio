import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all ease delay-500">
          {gitUrl !== "private" && (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-3 border-2 relative rounded-full border-[#e1fdc2] hover:border-white group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#e1fdc2] cursor-pointer group-hover/link:text-white" />
            </Link>
          )}

          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#e1fdc2] hover:border-white group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#e1fdc2] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#e1fdc2]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
