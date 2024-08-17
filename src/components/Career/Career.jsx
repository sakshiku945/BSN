import { useState } from "react";
import JobCards from "./JobCards";

const Career = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isDepartmentFocused, setIsDepartmentFocused] = useState(false);
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      experience: "0-5 years",
      location: "Remote",
      pdf: "/path-to-software-engineer.pdf",
    },
    {
      id: 2,
      title: "Front-end Developer",
      department: "Engineering",
      experience: "0-2 years",
      location: "Delhi",
      pdf: "/path-to-software-engineer.pdf",
    },
    {
      id: 3,
      title: "Backend Developer",
      department: "Engineering",
      experience: "0-3 years",
      location: "Pune",
      pdf: "/path-to-software-engineer.pdf",
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      experience: "0-5 years",
      location: "New York",
      pdf: "/path-to-product-manager.pdf",
    },

    {
      id: 5,
      title: "Sales Expert",
      department: "Marketing",
      experience: "2-5 years",
      location: "Indore",
      pdf: "/path-to-product-manager.pdf",
    },
    {
      id: 6,
      title: "Social Media Management",
      department: "Social Media",
      experience: "3-5 years",
      location: "Indore",
      pdf: "/path-to-product-manager.pdf",
    },
    // Add more jobs here...
  ];

  const departments = [...new Set(jobs.map((job) => job.department))];
  const locations = [...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment
      ? job.department === selectedDepartment
      : true;
    const matchesLocation = selectedLocation
      ? job.location === selectedLocation
      : true;

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  console.log(isDepartmentFocused);

  return (
    <div className="bg-gray-200/70 w-full" >
      <div className="lg:p-20 pt-10 px-10 max-sm:px-5">

        <h2 className="text-3xl text-[#308d46] font-bold mb-14 text-center uppercase">
          Current Openings
        </h2>

        <div className="mb-6 flex flex-col md:flex-row items-center justify-around lg:px-20 w-full">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by job title"
            className="mb-4 md:mb-0 md:mr-4 px-7 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#308d46] md:w-96 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Department Filter */}
          <div className="relative mb-4 md:mb-0 md:mr-4 md:w-96 w-full">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-7 py-3 pr-8 rounded-full leading-tight focus:outline-none focus:ring-2 focus:ring-[#308d46] "
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              onFocus={() => setIsDepartmentFocused(true)}
              onBlur={() => setIsDepartmentFocused(false)}
            >
              <option value="">All Departments</option>
              {departments.map((department) => (
                <option
                  key={department}
                  value={department}
                  className="hover:bg-[#308d46]"
                >
                  {department}
                </option>
              ))}
            </select>
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray pr-5`}
            >
              {isLocationFocused ? (
                <i className="fi fi-rr-angle-small-up"></i>
              ) : (
                <i className="fi fi-rr-angle-small-down"></i>
              )}
            </div>
          </div>

          {/* Location Filter */}
          <div className="relative md:w-96 w-full">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-7 py-3 pr-8 rounded-full leading-tight focus:outline-none focus:ring-2 focus:ring-[#308d46]"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              onFocus={() => setIsLocationFocused(true)}
              onBlur={() => setIsLocationFocused(false)}
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option
                  key={location}
                  value={location}
                  className="hover:bg-[#308d46]"
                >
                  {location}
                </option>
              ))}
            </select>

            <div
              className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pr-5 transition-transform duration-300 
              }`}
            >
              {isLocationFocused ? (
                <i className="fi fi-rr-angle-small-up"></i>
              ) : (
                <i className="fi fi-rr-angle-small-down"></i>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:w-[90%] mx-auto">
          {filteredJobs.map((job) => (
            <JobCards key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
