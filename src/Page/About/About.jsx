import { CiLocationOn } from "react-icons/ci";

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

const teams = [
  {
    name: "Victória Silva",
    image:
      "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
    position: "Back-end developer",
  },

  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },

  {
    name: "Thilde Olaisen",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",
    position: "Marketing Lead",
  },

  {
    name: "Kerim Fahri",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Back-end developer",
  },
];

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 container max-w-screen-3xl">
      {/* About hero section  */}
      <div className="w-full">
        <div className="flex flex-col justify-center items-center w-full text-center my-10  ">
          <h2 className="text-7xl font-bold text-black  my-5">Who are we?</h2>
          <p className=" md:w-[50%] text-lg font-semibold text-gray-600">
            Bharat Samutkarsh Nishreyas agriculture private limited aims at
            providing all round development of the country in agriculture field.
          </p>
        </div>

        <div className=" flex justify-center items-center my-16 ">
          <img
            src="/Asstes/about1.png"
            alt=""
            className=" md:w-[75%] md:h-[35rem] rounded-2xl"
          />
        </div>
      </div>

      <hr className="mt-20" />

      {/* our objective  */}
      <div className="mt-10">
        <div className="">
          <h3 className="text-3xl font-bold text-black  md:text-4xl">
            Our Objective
          </h3>

          <p className="text-base text-gray-500 md:text-xl my-5 leading-8">
            Our objective is to make every citizen in the country, Employment
            by providing advanced education and skill to achieve development of
            every part of the society.  Along with imbibing them with physical,
            mental and spiritual energy to manifest them in national progress.
            It will be aided by developed technology, Agricultural research, by
            producting in agriculture like activities. <br /> <br />
            
            To develop indigenious
            technology and utilise it to bring economic prosperity to the
            society as well as to the nation and finally to sustainable
            development of the nation long with advanced and developed
            agriculture and promotion of organic agriculture farming, and
            village development with smart villaging life. <br /> <br />
            So that a person can
            lead the country and its dignity in right direction with self
            respect and the nation heads towards conscious leadership of pride
            to be self-sufficient. <br /> <br />
            
            As well as for cultural regeneration and
            heritage conservation through environmental protection and service.
            Along with this a person contributes to cultural development and
            heritage protection by natural conservation and nature protection so
            that can refute successfully to the current and upcoming challenges
            in future. <br /> <br />
            
            That may prove to be helpful in development and pave a
            progressive path to the nation with cordination, hardwork, dignity
            and peace by leading us to make the nation proud. Thus, it is called
            as “PROSPERITY TO COUNTRY AND PROSPERITY TO ALL”
          </p>
        </div>

        <div className=" flex items-center justify-center ">
            <img src="/Asstes/objective.png" alt="" className=" w-[50rem] md:h-80 rounded-lg" />
        </div>
      </div>

      <hr className="mt-20" />
      {/* greetings */}
      <div className="mt-16 flex items-center">
        <div className="space-y-6 md:w-3/4">
          <p className="text-3xl font-bold text-black md:text-4xl">
            Meet our team
          </p>
          <p className="max-w-4xl text-base text-gray-700 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            architecto doloremque distinctio possimus unde, rem porro blanditiis
            quisquam ipsum assumenda?
          </p>
          <div></div>
        </div>
      </div>

      {/* TEAM */}
      <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {teams.map((team) => (
          <div className="rounded-md border overflow-hidden" key={team.name}>
            <img
              src={team.image}
              alt={team.name}
              className="h-[300px] w-full rounded-lg object-cover hover:scale-110 "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              {team.name}
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              {team.position}
            </p>
          </div>
        ))}
      </div>

      {/*  Map */}
      <div className="flex flex-col space-y-8 pb-10 pt-12">
        <p className="text-3xl font-bold text-black md:text-5xl md:leading-10">
          Our Global Presence
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          quo minus nesciunt iure consectetur fuga totam, ipsa aut cumque eius.
        </p>
      </div>

      {/* locations */}
      <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
        {locations.map((location) => (
          <div
            key={location.title}
            className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
          >
            <CiLocationOn className="h-5 w-5 text-[#308d46] " />
            <p className="w-full text-xl font-semibold  text-gray-900">
              {location.title}
            </p>
            <p className="w-full text-base text-gray-700">{location.timings}</p>
            <p className="text-sm font-medium">{location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
