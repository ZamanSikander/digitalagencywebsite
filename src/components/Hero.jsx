
import hero from "../assets/hero.svg";


const Hero = () => {
  return (
    <div>
      <main className="p-[1rem] sm:p-[2.5rem] justify-center items-center flex min-h-full gap-4 flex-wrap-reverse md:flex-nowrap">
        <section  className="w-full md:w-[50%]">
          <h1 className="sm:w-[80%] sm:text-6xl p-2 text-4xl w-[100%] decoration-slate-950">Navigating the digital landscape for success</h1>
          <p className="sm:w-[70%] sm:my-8 sm:p-2 p-1 my-2">
            Our digital marketing agency help businesses grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button type="button" className="bg-[#191823] text-white sm:p-4 sm:w-[16rem] rounded-2xl p-2 w-[12rem]">Book a consultation</button>
        </section>
        <section className="w-[50%] md:w-[50%]">
          <div>
            <img src={hero} alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
