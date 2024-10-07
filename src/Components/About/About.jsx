import React from "react";

function About() {
  return (
    <div className="bg-white p-5 px-[35px] text-primary pt-[50px]">
      <h1 className="text-2xl font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center p-4 mt-8">
        <div className="md:w-1/2 p-4 flex flex-col gap-8">
          <img
            src="path/to/your/image_or_gif.gif"
            alt="John Doe"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col gap-8">
          <p>
            I'm a passionate product and UI/UX designer with a deep love for
            creating user-centric digital experiences that resonate with people,
            merge creativity with functionality, and spark my passion for
            problem-solving through design.
          </p>
          <p>
            I’ve had the privilege of working on a variety of projects, from
            fintech solutions for HDFC Bank to educational materials for
            schools, and beyond. For me, design is not just about aesthetics;
            it’s about crafting experiences that solve real problems and bring
            value to users' lives. I see every project as an opportunity to
            innovate and push boundaries, balancing form and function in
            everything I create. I’m constantly learning and evolving, staying
            curious and open to new tools, trends, and methodologies to ensure
            my designs are at the cutting edge of usability and creativity.
          </p>
          <button className="self-start hover:border hover:border-[#3C4E9C] p-4 bg-[#3C4E9C] text-white hover:text-[#3C4E9C] rounded-md">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
