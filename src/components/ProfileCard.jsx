/* eslint-disable react/prop-types */
const ProfileCard = ({image, name, role, specialty}) => {
  return (
    <div className="border border-b-4 border-black rounded-lg container mx-auto sm:w-[50%] md:w-1/3 mt-9 ">
        <div className="flex justify-evenly items-center m-2">
            <img src={image} alt="" />
            <div className="text-end font-semibold">
                <h1 className="text-md font-bold">{name}</h1>
                <p className="text-wrap text-sm">{role}</p>
            </div>
        </div>
        <p className="p-4 text-justify text-sm">{specialty}</p>
    </div>
  )
}

export default ProfileCard