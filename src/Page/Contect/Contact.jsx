import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "./ContactForm"


const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
];

const Contact = () => {
  return (
    <div className="container mx-auto max-w-screen-3xl">
      <div className="flex flex-col items-center justify-center w-full  bg-cover bg-no-repeat bg-center">

        <div className="sm:p-5 mx-5 w-full lg:w-auto max-sm:w-[95%]  bg-gray-100 rounded-lg my-11 flex flex-col lg:flex-row justify-evenly ">

          <section className="lg:w-7/12 lg:order-2 w-full mt-5 md:my-7 max-md:mb-12 max-sm:px-3">

          <div className=" text-center mb-5">
            <h4 className=" text-3xl font-bold text-black">Contact Us</h4>
          </div>
            <div className="mx-3 md:pl-2 ">
              <ContactForm />
            </div>
          </section>

          <section className="lg:w-5/12 lg:order-1 ">
            <div
              className="sm:p-6 p-2 rounded-lg bg-[#308d46] overflow-hidden relative lg:h-[70vh]"
            >
              {/* Contact Us heading */}
              <div className="mb-2 px-2 pt-3">
                <h1 className="text-white font-semibold text-2xl">Let&apos;s Connect </h1>
              </div>

              <div className="mb-10 px-3">
                <p
                  className="text-gray-200 text-sm"

                >
                  Say something to start a live chat!
                </p>
              </div>

              <div className="px-3 pt-6">
                {/* Phone number */}
                <div className="mb-5 flex items-center gap-5">
                  <div className=" rounded-full">
                    <FaPhoneVolume className=" text-white" />
                  </div>
                  <p className="text-white font-light text-sm">
                    +91 9182384041
                  </p>
                </div>

                {/* Email address */}
                <div className=" my-8 flex items-center gap-5">
                  <div className="rounded-full">
                    <MdEmail className=" text-white text-xl" />
                  </div>
                  <p className="text-white font-light text-sm">
                    bsnapl.official2021@gmail.com
                  </p>
                </div>

                {/* Exact address */}
                <div className="mb-28">
                  <div className="flex items-start mb-5 gap-5">
                    <div className="rounded-full">
                      <IoLocationSharp className=" text-white text-xl" />
                    </div>
                    <p className="text-white font-light text-xs w-80 pr-10 break-words">
                      HOUSE NO. 271, SECTOR-C, SARDAR DARA SINGH NAGAR NEAR
                      POLICE LINE SAIPAU ROAD , DHOLPUR, RAJASTHAN,BHARAT -
                      328001.(TENTATIVE)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social media icons */}
              <div className="flex flex-row gap-3 absolute bottom-8 left-8">
                {socialLinks.map((socialLink, i) => (
                  <Link
                    key={i}
                    to={socialLink.href}
                    className={`transform hover:scale-110 transition-transform duration-300 border rounded-full border-gray-200 text-gray-200 hover:bg-gray-200 p-2 text-base hover:text-gray-800 `}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.href}
                  >
                    <socialLink.icon />
                  </Link>
                ))}
              </div>

              {/* Bottom div with circles */}
              <div className="absolute bottom-0 left-72">
                <div
                  className="hidden lg:block"
                  style={{
                    height: "250px",
                    width: "250px",
                    position: "absolute",
                    background: "#308d46",
                    top: "-150px",
                    left: "-30px",
                    borderRadius: "50%",
                  }}
                ></div>
      
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
