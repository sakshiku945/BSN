import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Recruitment/careers",
    href: "#",
  },

  {
    name: "Communication",
    href: "#",
  },

  {
    name: "Private policy",
    href: "#",
  },
  {
    name: "Return policy",
    href: "#",
  },
  {
    name: "Terms of service  ",
    href: "#",
  },

  {
    name: "Contact Us",
    href: "#",
  },
];

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

export function Footer() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-8 container mx-auto max-w-screen-3xl">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex max-md:flex-col items-center justify-around">
          <div className="w-auto p-6">

            {/* logo */}
            <Link to="/" className="font-bold text-2xl">
            <img src="/Asstes/main-logo.png" alt="" className="h-20" />
            </Link>
          </div>

          {/* Footer Menus */}
          <div className="w-auto md:p-6">
            <ul className="ml-12 flex max-md:flex-col">
              {menuItems.map((item) => (
                <li key={item.name} className="p-5 px-3">
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-base font-semibold text-black hover:text-[#308d46] hover:scale-105 "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-auto p-6">
            <div className="-m-1.5 flex flex-wrap gap-3">
              {socialLinks.map((socialLink, i) => (
                <Link
                  key={i}
                  to={socialLink.href}
                  className={`transform hover:scale-110 transition-transform duration-300 border rounded-full border-[#308d46] text-black hover:bg-[#308d46] p-2 text-base hover:text-gray-100 `}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.href}
                >
                  <socialLink.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
