import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-5 ">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md md:w-[40%] max-md:w-[60%] max-sm:w-[90%]">
          <div className="mb-2 flex justify-center">
            <img
              src="/Asstes/main-logo.png"
              alt=""
              className="md:h-20 h-16"
            />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Join us today
          </h2>

          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <div className="mt-2 relative">
                  <div className=" absolute left-4 top-2.5">
                    <i className="fi fi-rr-user text-[#308d46]"></i>
                  </div>
                  <input
                    className="flex h-10 w-full rounded-full border border-[#308d46] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-none focus:ring-offset-none  focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  ></input>
                </div>
              </div>

              <div className="mt-2 relative">
                <div className=" absolute left-4 top-2.5">
                  <i className="fi fi-rr-envelope text-[#308d46]"></i>
                </div>
                <input
                  className="flex h-10 w-full rounded-full border border-[#308d46] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-none focus:ring-offset-none  focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                  type="email"
                  placeholder="Email"
                  id="email"
                ></input>
              </div>

              <div>
                <div className="mt-2 relative">
                  <div className=" absolute left-4 top-2.5">
                    <i className="fi fi-rr-lock text-[#308d46]"></i>
                  </div>
                  <input
                    className="flex h-10 w-full rounded-full border border-[#308d46] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-none focus:ring-offset-none  focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                    type="password"
                    placeholder="Password"
                    id="password"
                  ></input>
                </div>

                <div className="mt-3 relative">
                  <div className=" absolute left-4 top-2.5">
                    <i className="fi fi-rr-lock text-[#308d46]"></i>
                  </div>
                  <input
                    className="flex h-10 w-full rounded-full border border-[#308d46] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-none focus:ring-offset-none  focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                    type="password"
                    placeholder="Re-enter Password"
                    id="password"
                  ></input>
                </div>
              </div>
              <div className=" flex justify-center">
                <button
                  type="button"
                  className="inline-flex  items-center justify-center rounded-full border border-[#308d46]  px-4 py-2.5 font-semibold  leading-7 text-white bg-[#308d46]/90 hover:bg-[#308d46] hover:scale-110 transition-transform duration-300"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>

          <div
            className="relative w-full flex items-center gap-2 
        my-5  uppercase text-black font-bold"
          >
            <hr className="w-1/2 border-black opacity-10" />
            <p className=" text-[#308d46] ">or</p>
            <hr className="w-1/2 border-black opacity-10" />
          </div>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-full border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 hover:scale-110 transition-transform duration-300 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <img
                src="/Asstes/google.png"
                alt=""
                className=" w-5 mr-5"
              />
              Sign up with Google
            </button>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline hover:text-[#308d46]"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
