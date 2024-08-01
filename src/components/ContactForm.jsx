import prp from "../assets/prp.svg";

const ContactForm = () => {
  return (
    <div className="mt-[6rem]">
      <section className=" flex container mx-auto md:text-left mt-[4rem] text-center items-center md:flex-row flex-col ">
          <h1 className="p-5 md:text-3xl text-2xl bg-[#b9ff66] decoration-gray-900">
            Contact Us
          </h1>
          <p className="md:w-[70%]  p-2 text-basis decoration-slate-700 md:text-2xl">
          Connect with Us: Lets Discuss Your Digital Marketing Needs
          </p>
        </section>
      <div className="container justify-between items-center mx-auto mt-10 flex bg-[#f3f3f3] p-3 rounded-xl">
        <form className="space-y-4 sm:w-[50%] w-full">
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="">
            <input
              type="submit"
              value="submit"
              className="border text-center cursor-pointer p-4 bg-[#191a23] text-white rounded-lg w-full"
            />
          </div>
        </form>
        <div className="w-[40%] sm:block hidden">
          <img src={prp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
