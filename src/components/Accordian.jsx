/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion ${isOpen ? "open" : ""} container mx-auto mt-8 bg-[#b9ff66] rounded-3xl border-b-4 border-black`}
      onClick={handleToggle}
      role="button"
      aria-expanded={isOpen}
    >
      <div
        className="flex justify-between cursor-pointer py-4 px-6"
        role="heading"
      >
        <span className="accordion-title md:text-3xl text-basis font-medium">{title}</span>
        <span className="accordion-icon text-3xl font-bold">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <p
        className={`accordion-content p-4 border-t ${
          isOpen ? "block" : "hidden"
        } transition-opacity duration-500 text-slate-950 text-[1.1rem]`}
      >
        {content}
      </p>
    </div>
  );
};

export default Accordion;