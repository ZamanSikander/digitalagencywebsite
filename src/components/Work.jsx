
import Accordion from "./Accordian";
const Work = () => {
  
  return (
    <div className="container mx-auto mt-[6rem]">
      <div className="flex items-center">
        <h1 className="bg-[#b9ff66] md:text-3xl text-2xl p-3 rounded-md">
          Our Working Process
        </h1>
        <p className="md:text-xl text-basis m-4 md:w-[50%] ">
          Step-by-Step guide to Achieving your businesses goals.
        </p>
      </div>
      <Accordion
        title="01 Consultation"
        content="During the initial consultation, we will discuss your business goals and objectives, target audiences, and content marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <Accordion
        title="02 Research and Strategy Development"
        content="During the initial consultation, we will discuss your business goals and objectives, target audiences, and content marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <Accordion
        title="03 Implementations"
        content="During the initial consultation, we will discuss your business goals and objectives, target audiences, and content marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <Accordion
        title="04 Monitoring and Optimization"
        content="During the initial consultation, we will discuss your business goals and objectives, target audiences, and content marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <Accordion
        title="05 Reporting and Communication"
        content="During the initial consultation, we will discuss your business goals and objectives, target audiences, and content marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <Accordion
        title="06 Continual Improvement"
        content="During the initial consultation, we will discuss your business goals and objectives, target audiences, and content marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
    </div>
  );
};
export default Work;
