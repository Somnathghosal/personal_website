import { useState, useEffect, useRef, MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assests/G Logo 3.png";

const Navbar = () => {
  const location = useLocation();


const isHome = location.pathname === "/";

const isPublicationPage =
  location.pathname === "/publication" ||
  location.pathname.startsWith("/publication/") ||
  location.pathname.startsWith("/publications/");

const isMediaPage =
  location.pathname === "/media" ||
  location.pathname.startsWith("/media/");

const isTransparentPage =
  isHome || isPublicationPage || isMediaPage;


// Only Home uses white text

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] =
    useState(false);
  const [isMobileResearchDropdownOpen, setIsMobileResearchDropdownOpen] =
    useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Transparent only on Home page
const transparentNavbar = isTransparentPage && !isScrolled;



  useEffect(() => {
  // Pages with permanent white navbar
  if (!isTransparentPage) {
    setIsScrolled(true);
    return;
  }

  // Pages with transparent navbar initially
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 90);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [isTransparentPage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | any) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsResearchDropdownOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside as EventListener
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileResearchDropdownOpen(false);
  };

  const toggleResearchDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResearchDropdownOpen(!isResearchDropdownOpen);
  };

  const toggleMobileResearchDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileResearchDropdownOpen(!isMobileResearchDropdownOpen);
  };

  const researchSubItems = [
    { name: "Projects", path: "/research/projects" },
    { name: "Team", path: "/research/team" },
    { name: "Collaborators", path: "/research/collaborations" },
  ];

  interface NavItem {
    name: string;
    path: string;
    hasDropdown?: boolean;
    subItems?: { name: string; path: string }[];
  }

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Research",
      path: "/research",
      hasDropdown: true,
      subItems: researchSubItems,
    },
    { name: "Publications", path: "/publication" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        transparentNavbar
          ? "bg-transparent py-4"
          : "bg-white shadow-md py-2"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="GEAR Logo"
              className={`transition-all duration-500 ${
                transparentNavbar
                  ? "h-12 md:h-14 lg:h-16"
                  : "h-10 md:h-12 lg:h-14"
              }`}
            />

            <span
              className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-500 ${
                transparentNavbar
                  ? "text-white"
                  : "text-blue-700"
              }`}
            >
              Dr. Somnath Ghosal
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center"
                ref={item.hasDropdown ? dropdownRef : null}
              >
                {item.hasDropdown ? (
                  <div className="flex items-center">

                    <Link
                      to={item.path}
                      className={`font-medium py-2 px-3 rounded transition-all duration-500 ${
                        transparentNavbar
                          ? "text-white hover:text-gray-200"
                          : "text-blue-700 hover:text-blue-800 hover:bg-blue-50"
                      }`}
                    >
                      {item.name}
                    </Link>

                    <button
                      onClick={toggleResearchDropdown}
                      className={`ml-1 p-1 rounded-full transition-all duration-500 ${
                        transparentNavbar
                          ? "text-white hover:bg-white/10"
                          : "text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          isResearchDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isResearchDropdownOpen && item.subItems && (
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden w-48 z-20">

                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-blue-700 hover:bg-blue-50 font-medium"
                            onClick={() =>
                              setIsResearchDropdownOpen(false)
                            }
                          >
                            {subItem.name}
                          </Link>
                        ))}

                      </div>
                    )}

                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium py-2 px-3 rounded transition-all duration-500 ${
                      transparentNavbar
                        ? "text-white hover:text-gray-200"
                        : "text-blue-700 hover:text-blue-800 hover:bg-blue-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
                    {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 rounded-md transition-all duration-500 ${
                transparentNavbar
                  ? "text-white"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white shadow-lg rounded-md py-2 overflow-hidden"
            >
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <div className="flex items-center justify-between px-4 py-3">
                        <Link
                          to={item.path}
                          className="text-blue-700 hover:text-blue-800 font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>

                        <button
                          onClick={toggleMobileResearchDropdown}
                          className="text-blue-700 hover:bg-blue-50 p-1 rounded-full transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform ${
                              isMobileResearchDropdownOpen
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {isMobileResearchDropdownOpen &&
                          item.subItems && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              className="bg-blue-50 overflow-hidden"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-8 py-3 text-blue-700 hover:bg-blue-100 font-medium"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileResearchDropdownOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-blue-700 hover:bg-blue-50 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;