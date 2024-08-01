import ProfileCard from "./ProfileCard";
import john from "../assets/john.svg";
import jane from "../assets/jane.svg";
import alex from "../assets/alex.svg";
import brina from "../assets/brina.svg";
import brown from "../assets/brown.svg";
import sara from "../assets/sara.svg";
const Employees = [
  {
    Id:1,
    name: "John Doe",
    role: "CEO and Founder",
    specialty:
      "10y+ experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: john,
  },
  {
    Id:2,
    name: "Jane Doe",
    role: "Director of Operations",
    specialty:
      "7 years of experience in project management and team leadership. Strong organizational and communication skills.",
    image: jane,
  },
  {
    Id:3,
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    specialty:
      "5years expereince in SEO and content creation. Proficient in keywords reserch and on-page optimization.",
    image: brina,
  },
  {
    Id:4,
    name: "Emily Johnson",
    role: "Director of Operations",
    specialty:
      "3years expereince in paid search advertising. Skilled in campaing management and performance analysis.",
    image: alex,
  },
  {
    Id:5,
    name: "Brain Williams",
    role: "Director of Operations",
    specialty:
      "4years expereince in social media marketing. Proficinet in creating and scheduling content, analyzing metrics, and building managment.",
    image: brown,
  },
  {
    Id:6,
    name: "Sara Khan",
    role: "Director of Operations",
    specialty:
      "2years expereince in writing and editing. Skilled in creating compelling, SEO, optimzed content for various industries. ",
    image: sara,
  },
];

const ProfileSection = () => {
  return (
    <div className="container mx-auto mt-[7rem]">
      <div className="flex  items-center">
        <h1 className="text-3xl font-bold bg-[#b9ff66] p-3 m-3">
          Team
        </h1>
        <p className="sm:text-xl sm:w-[50%] text-xs">
          Meet the Skilled and expereinced team behind our successful digital marketing stratigies. 
        </p>
      </div>
      <div className="flex flex-wrap container mx-auto">
        {Employees.map((employee) => (
          <ProfileCard
            key={employee.Id}
            name={employee.name}
            image={employee.image}
            specialty={employee.specialty}
            role={employee.role}
          />
        ))}
      </div>
      <div className="flex justify-end">
      <button type="button" className="m-3 bg-[#191a23] text-white p-4 rounded-xl">See All Team</button>
      </div>
    </div>
  );
};

export default ProfileSection;
