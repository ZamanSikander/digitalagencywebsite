import lb from "../assets/lb.svg";
import seo from "../assets/seo.svg";
import ppr from "../assets/ppr.svg";
import ssm from "../assets/ssm.svg";
import em from "../assets/em.svg";
import cc from "../assets/cc.svg";
import at from "../assets/at.svg"
const Services = () => {
  return (
    <div>
      <main className="container mx-auto py-12">
        <section className=" flex md:text-left text-center items-center md:flex-row flex-col">
          <h1 className="p-5 md:text-3xl text-2xl bg-[#b9ff66] decoration-gray-900">
            Services
          </h1>
          <p className="w-[100%]  p-2 text-basis decoration-slate-700 md:text-2xl">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </section>
        <section className="container mx-auto">
          <div className="flex md:flex-row flex-col mt-[5rem] justify-between ">
            <div className="flex border rounded-3xl justify-between items-center bg-[#f3f3f3] basis-5/12">
              <div>
                <div className=" w-[80%] ml-4">
                  <h1 className=" text-2xl bg-[#b9ff66]">
                    Search Engine Optimization
                  </h1>
                  <a href="/" className="flex mt-10">
                    <img src={lb} alt="" className="w-[1rem]" /> Learn More
                  </a>
                </div>
              </div>
              <div className="w-[40%]">
                <img src={seo} alt="" />
              </div>
            </div>
            <div className="flex mt-3 border rounded-3xl justify-between items-center bg-[#b9ff66] basis-5/12">
              <div>
                <div className=" w-[80%] ml-4">
                  <h1 className=" text-2xl bg-white m-2">Pay Per Click Advertising</h1>
                  <a href="/" className="flex mt-10">
                    <img src={lb} alt="" className="w-[1rem]" /> Learn More
                  </a>
                </div>
              </div>
              <div className="w-[40%]">
                <img src={ppr} alt="" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col mt-[0.5rem] justify-between ">
            <div className="flex border rounded-3xl justify-between items-center bg-gray-950 basis-5/12">
              <div>
                <div className=" w-[80%] ml-4">
                  <h1 className=" text-2xl bg-white">
                    Social Media Marketing
                  </h1>
                  <a href="/" className="flex mt-10 text-white">
                    <img src={lb} alt="" className="w-[1rem]" /> Learn More
                  </a>
                </div>
              </div>
              <div className="w-[40%]">
                <img src={ssm} alt="" />
              </div>
            </div>
            <div className="flex mt-3 border rounded-3xl justify-between items-center bg-[#f3f3f3] basis-5/12">
              <div>
                <div className=" w-[80%] ml-4">
                  <h1 className=" text-2xl bg-[#b9ff66] m-2">E-Mail Marketing</h1>
                  <a href="/" className="flex mt-10">
                    <img src={lb} alt="" className="w-[1rem]" /> Learn More
                  </a>
                </div>
              </div>
              <div className="w-[40%]">
                <img src={em} alt="" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col mt-[0.5rem] justify-between ">
            <div className="flex border rounded-3xl justify-between items-center bg-[#b9ff66] basis-5/12">
              <div>
                <div className=" w-[80%] ml-4">
                  <h1 className=" text-2xl bg-white">
                    Content Creation
                  </h1>
                  <a href="/" className="flex mt-10">
                    <img src={lb} alt="" className="w-[1rem]" /> Learn More
                  </a>
                </div>
              </div>
              <div className="w-[40%]">
                <img src={cc} alt="" />
              </div>
            </div>
            <div className="flex mt-3 border rounded-3xl justify-between items-center bg-gray-950 basis-5/12">
              <div>
                <div className=" w-[80%] ml-4">
                  <h1 className=" text-2xl bg-[#b9ff66] m-2">Analytics & Tracking</h1>
                  <a href="/" className="flex mt-10 text-white">
                    <img src={lb} alt="" className="w-[1rem] "/> Learn More
                  </a>
                </div>
              </div>
              <div className="w-[40%]">
                <img src={at} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
