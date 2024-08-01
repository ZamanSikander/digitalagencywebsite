
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import prp from "./assets/prp.svg";
import CaseStudy from "./components/CaseStudy";
import Work from "./components/Work";
import ProfileSection from "./components/ProfileSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
function App() {

  return (
    <>
   <Navbar></Navbar>
   <Hero></Hero>
   <Brands></Brands>
   <Services></Services>
   <div className="flex container mx-auto justify-evenly items-center bg-[#f3f3f3] lg:h-[60vh] mt-9 rounded-xl">
    <div className=" md:w-[50%] m-4 md:m-[0] ">
      <h1 className="md:text-5xl text-3xl m-3">Lets make things happens </h1>
      <p className="m-3 w-[70%] text-gray-950 md:text-xl text-basis">Contact Us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
      <button type="button" className="m-3 bg-[#191a23] text-white p-4 rounded-xl">Get Your Free Proposal</button>
    </div>
    <img src={prp} alt="" className="sm:block hidden w-[20rem]"/>
   </div>
    <CaseStudy></CaseStudy>
    <Work></Work>
    <ProfileSection></ProfileSection>
    <TestimonialSection></TestimonialSection>
    <ContactForm></ContactForm>
    <Footer></Footer>
    </>
  )
}

export default App
