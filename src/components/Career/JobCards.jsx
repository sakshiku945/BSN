import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCards = ({ job }) => {
  const { title, department,  experience , location,  pdf } = job;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-800">
        <span className=" font-semibold">Department: </span> {department} 
      </p>

      <p className="text-sm text-gray-800 my-1">
      <span className=" font-semibold">Experience: </span> {experience}
      </p>
      <p className="text-sm text-gray-800">
      <span className=" font-semibold">Location: </span> {location}
      </p>

      <div className=" w-full flex gap-10 lg:gap-20 2xl:gap-36 max-sm:flex-wrap max-sm:gap-0 justify-between items-center">
        <Link
          to={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#308d46] underline"
        >
          Download Job Notification
        </Link>
        <button
          className="mt-4 px-4  py-2 border border-[#308d46] text-black rounded-3xl flex justify-center mx-auto items-center lg:rounded-full hover:bg-[#308d46] hover:text-white font-semibold"
          onClick={() => alert("Apply for " + title)}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

JobCards.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    pdf: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCards;
