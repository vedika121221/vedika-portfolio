import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 pt-8 px-[35px] text-primary bg-bgcolor1">
      <div className="md:w-1/2 p-4 flex flex-col gap-8">
        <h1 className="text-6xl font-bold mb-2">Hi! I'm Vedika.</h1>
        <p className="text-gray-700 mb-4 text-[20px]">
          Interaction and Interface Designer, Researcher and Strong collaborator
          with cross-functional teams, delivering intuitive and innovative
          design solutions that meet business goals.
        </p>
        <div className="media_icons flex space-x-4">
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:scale-110 hover:text-red-500 border border-gray-300 p-2 hover:border-red-500"
          >
            <InstagramIcon size={30} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:scale-110 hover:text-blue-500 border border-gray-300 p-2 hover:border-blue-500"
          >
            <LinkedInIcon size={30} />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src="path/to/your/image_or_gif.gif"
          alt="John Doe"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Intro;
