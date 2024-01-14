import React, { useState, useEffect } from "react";
import { image, logo, services, social } from "../data/Data";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 800);

  const handleResize = () => {
    setIsSmall(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="relative bg-dark bg-opacity-90 dark:bg-light dark:bg-opacity-90 text-light dark:text-dark pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around text-center lg:text-left">
          <div className="w-full lg:w-3/12 px-4">
            <h4 className="text-3xl font-semibold text-light">
              Let's keep in touch!
            </h4>
            <div className="mt-6 lg:mb-0 mb-6 ">
              {social.map((res, index) => (
                <button
                  name={res.name}
                  key={index}
                  className={`text-light shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition-transform duration-300 hover:scale-110`}
                  type="button"
                >
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full object-fill"
                  >
                    <img src={res.image} className=" object-fill " alt="" />
                  </a>
                </button>
              ))}
            </div>
          </div>
          {isSmall ? (
            <></>
          ) : (
            <div className="w-2/12">
              <div className="flex flex-wrap items-center lg:justify-end justify-center mx-auto text-left mt-3 mb-2">
                <a href={"/"}>
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
          )}
          <div className="w-full lg:w-5/12 px-4">
            <div className="flex flex-wrap items-top mb-6 text-center mt-3">
              {/* <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercas font-semibold mb-2 text-xl uppercase">Services</span>
                <ul className="list-unstyled">
                  {services.map((res, index) => (
                    <li key={index}>
                      <a className="text-light block pb-2 text-sm  hover:text-primary" href={res.link}>
                        {res.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="w-full lg:w-6/12 px-4 ml-auto text-center mt-3">
                <span className="block uppercase text-light text-xl font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <HashLink
                      className="text-light  block pb-2 opacity-70 text-sm  hover:text-primary"
                      smooth
                      to={location.pathname != "/" ? `/#about` : "#about"}
                    >
                      About Us
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="text-light block pb-2 opacity-70 text-sm  hover:text-primary"
                      smooth
                      to="https://github.com/Bit-Er"
                      target="_blank"
                    >
                      Github
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="text-light block pb-2 opacity-70 text-sm  hover:text-primary"
                      smooth
                      to={location.pathname != "/" ? `/#contact` : "#contact"}
                    >
                      Contact us
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-6/12 px-4 text-center mt-3">
                <span className="block uppercase text-light font-semibold mb-2 text-xl">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <HashLink
                      className="text-light block pb-2 opacity-70 text-sm  hover:text-primary"
                      smooth
                      to={"/terms"}
                    >
                      Terms &amp; Conditions
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="text-light block pb-2 opacity-70 text-sm  hover:text-primary"
                      smooth
                      to={"/privacy"}
                    >
                      Privacy Policy
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-light" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-light opacity-70 font-semibold py-1">
              © <span id="get-current-year">2024 </span>
              <a
                href="/"
                className="text-light opacity-70 hover:text-primary"
                target="_blank"
              >
                Bit-Er
              </a>{" "}
              All right reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
