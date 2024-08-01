/* eslint-disable react/prop-types */

const TestimonialCard = ({message, name, position}) => {
  return (
    <div>
        <section className="container mx-auto text-white p-5 rounded-2xl md:w-[50%] bg-[#191a23]">
            <p className="text-left border-[#b9ff66] border-2 p-3 md:w-[80%] leading-7 rounded-lg">
           {message}
            </p>
            <div className="m-5">
                <h1 className="text-[#b9ff66] text-2xl">
                    {name}
                </h1>
                <p>
                    {position}
                </p>
            </div>
        </section>
    </div>
  )
}

export default TestimonialCard
