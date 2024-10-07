import React from "react";

const ProjectsData = [
  {
    title: "Conversational Customer Engagement Platform",
    description:
      "Hub for personalized customer engagement. Strengthen relationships through live chat, automated responses, and data insights.",
    img: "",
    link: "",
  },
  {
    title: "Chat Support",
    description:
      "Embeddable across banking interaction channels, this solution ensures customers receive prompt, accurate answers without relying on human input.",
    img: "",
    link: "",
  },
  {
    title: "Gold Loan",
    description:
      "Facilitate secured gold loans with agent support in tier 2 and 3 regions, addressing the unstructured loan market with lower interest rates and recognising gold as a highly secure form of collateral.",
    img: "",
    link: "",
  },
  {
    title: "Calendar App Design",
    description:
      "Travelling is different time zones can be very challenging to keep a record of all the events and meetings and at the same time stay organised. The objective is to design a calendar system that will suggest meeting time according to the changing time zones.",
    img: "",
    link: "",
  },
];
function Projects() {
  return (
    <div className="bg-bgcolor1 p-5 px-[35px] text-primary pt-[50px]">
      <h1 className="text-2xl font-bold">Featured Projects</h1>
    </div>
  );
}

export default Projects;
