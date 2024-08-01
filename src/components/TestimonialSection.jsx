import TestimonialCard from "./TestimonialCard";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const TestimonialSection = () => {
  return (
    <div>
        <section className=" flex container mx-auto md:text-left mt-[4rem] text-center items-center md:flex-row flex-col">
          <h1 className="p-5 md:text-3xl text-2xl bg-[#b9ff66] decoration-gray-900">
            Testimonials
          </h1>
          <p className="md:w-[70%]  p-2 text-basis decoration-slate-700 md:text-2xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </section>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: false, // Stop autoplay when reaching the last slide
          waitForTransition: true, // Wait for transition to complete before autoplaying
        }}
     className="mt-9" >
        <SwiperSlide key={1}>
          <TestimonialCard
            name="john Doe"
            message='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
            position="Marketing Director at ABC Corp"
          />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <TestimonialCard
            name="jane Doe"
            message='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.. We highly recommend Positivus to any company looking to grow their online presence."'
            position="Marketing Director at XYZ Corp"
          />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <TestimonialCard
            name="Alex Kim"
            message='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.."'
            position="Marketing Director at DEF Corp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
