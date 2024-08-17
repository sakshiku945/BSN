import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "CMS",
    href: "/",
    submenu: [
      { name: "Employee/HR management", href: "/" },
      { name: "Business partners", href: "/" },
    ],
  },
  {
    name: "Our Products Category",
    href: "#",
    submenu: [
      { name: "Ghee & flavour milk (Dairy division)", href: "/products/1" },
      {
        name: "Tomato catchup & apple juice, jam (Horticulture division)",
        href: "/products/2",
      },
    ],
  },
  {
    name: "Our Story",
    href: "#",
    submenu: [
      { name: "Story 1", href: "/story/1" },
      { name: "Story 2", href: "/story/2" },
    ],
  },
  {
    name: "About Us",
    href: "/",
    submenu: [
      { name: "BSN CODE OF CONDUCT", href: "/about" },
      { name: "LEADERSHIP", href: "/" },
      { name: "Work divisions", href: "/" },
      { name: "Official documents", href: "/" },
      { name: "Sponsorships/MoU's", href: "/" },
      { name: "Sustainability", href: "/" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const submenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmenuHover = (name) => {
    setOpenSubmenu(name);
  };

  const closeSubmenu = () => {
    setOpenSubmenu(null);
  };

  // Handle clicks outside of the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        closeSubmenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submenuRef]);

  return (
    <div className="sticky top-0 z-50 bg-gray-200 shadow-lg container mx-auto max-w-screen-3xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="items-center ">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            <img
              src="/Asstes/main-logo.png"
              alt=""
              className="md:h-20 h-16"
            />
          </Link>
        </div>

        {/* Menus for desktop */}

        <div className="hidden lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleSubmenuHover(item.name)}
                onMouseLeave={() => handleSubmenuHover(null)}
              >
                <Link
                  to={item.href}
                  className="inline-flex items-center text-base font-semibold text-black hover:text-[#308d46]/80 "
                >
                  {item.name}

                  {item.submenu && (
                    <span className="ml-1 transition-transform duration-300 transform group-hover:rotate-180">
                      <i className="fi fi-rs-angle-small-down text-lg font-bold"></i>
                    </span>
                  )}
                </Link>

                {/* Submenu for Desktop */}
                {item.submenu && openSubmenu === item.name && (
                  <ul
                    ref={submenuRef}
                    className="absolute left-0 mt-1 w-72 border-t-4 border-green-600 py-2 bg-gray-50 shadow-lg rounded-md "
                  >
                    {item.submenu.map((submenuItem) => (
                      <li key={submenuItem.name}>
                        <Link
                          to={submenuItem.href}
                          className="block px-4 py-4 text-sm font-bold text-gray-800 hover:bg-gray-200/60 "
                        >
                          {submenuItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Signup & Login Buttons */}

        <div className="hidden space-x-2 lg:block">
          <Link
            to="/signup"
            type="button"
            className="rounded-full bg-transparent px-7 py-1.5 font-semibold text-black hover:bg-[#308d46] hover:text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-base mr-3 hover:scale-110 transition-transform duration-300"
          >
            SignUp
          </Link>
          <Link
            to="/login"
            type="button"
            className="rounded-full border border-[#308d46] px-7 py-1.5 text-base font-semibold text-black hover:bg-[#308d46] hover:border-text-black hover:border-[#308d46] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-gray-100 hover:scale-110 transition-transform duration-300"
          >
            Login
          </Link>
        </div>

        {/* Menu icon for Mobile */}
        <div className="lg:hidden">
          <i
            className="fi fi-br-menu-burger cursor-pointer h-20 w-20 pr-5 text-black"
            onClick={toggleMenu}
          ></i>
        </div>

        {/*  Mobile Screen */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    {/* logo */}
                    <Link to="/" className="font-bold text-2xl">
                      <img
                        src="/Asstes/main-logo.png"
                        alt=""
                        className="h-16"
                      />
                    </Link>
                  </div>

                  {/* Cross Button */}

                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <i
                        className="fi fi-br-cross text-black"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>

                {/* menus for Mobile */}

                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <div key={item.name}>
                        <div className="-m-3 flex items-center justify-between rounded-md p-3 text-base font-semibold hover:bg-gray-50">
                          <Link
                            to={item.href}
                            className="hover:text-green-400 ml-3 text-base font-medium text-black hover:text-black/80"
                          >
                            {item.name}
                          </Link>
                          {item.submenu && (
                            <button
                              type="button"
                              onClick={() => handleSubmenuHover(item.name)}
                              className="ml-auto text-gray-800"
                            >
                              <i
                                className={`fi ${
                                  openSubmenu === item.name
                                    ? "fi-br-angle-small-down text-black"
                                    : "fi-br-angle-small-right text-black"
                                }`}
                              ></i>
                            </button>
                          )}
                        </div>

                        {/* Submenu for Mobile */}
                        {item.submenu && openSubmenu === item.name && (
                          <ul className="mt-2 ml-6 space-y-2">
                            {item.submenu.map((submenuItem) => (
                              <li key={submenuItem.name}>
                                <Link
                                  to={submenuItem.href}
                                  className="block px-4 py-2 text-sm font-bold text-black hover:bg-black border rounded-lg hover:text-gray-200"
                                >
                                  {submenuItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Signup & Login Buttons for moblie */}
                <div className="mt-2 ">
                  <Link to="/login">
                    <button
                      type="button"
                      className="w-full my-3 rounded-md border border-black px-3 py-2 text-sm font-semibold text-black hover:bg-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign In
                    </button>
                  </Link>

                  <Link to="/login">
                  <button
                    to="/signup"
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign Up
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
