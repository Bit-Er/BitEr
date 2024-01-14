import React,{useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Caroucel from '../components/Caroucel';
import Card from '../components/AboutCard';
import { faBars, faGlobe, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Service from '../components/Service';
import ProgressBar from "@ramonak/react-progress-bar";
import Prtfolio from '../components/Prtfolio';
import Teamcard from '../components/Teamcard';
import Contactcard from '../components/Contactcard';
import ToolsSlider from '../components/ToolsSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedNumbers from "react-animated-numbers";
import { bannerimage, category, contactdetails, missionData, portfolios, services, skills, teams, total } from '../data/Data';
import CustomCircularProgressbar from '../components/circularprogress';
import Testimonial from '../components/Testimonial';
import Contactform from '../components/Contactform';
import { Link } from 'react-router-dom';



const Homepage = () => {
  const image = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Caroucel Section */}
      <section className="w-full min-h-screen">
        <Caroucel />
      </section>
      {/* About us Content */}
      <section className="container mx-auto text-center bg-light" id="about">
        <h2 className="text-3xl font-bold pb-10 pt-20 underline underline-offset-8 decoration-dashed decoration-4 uppercase text-dark">
          About Us
        </h2>
        <p className="w-3/5 mx-auto mb-6 text-base font-normal">
          Bit-Er, where creativity is fueled by passion. We work together as a
          close-knit team to realize your digital vision. Our approach is
          results-driven, honest, and transparent, making us more than simply
          artists—we're your devoted digital collaborators.
        </p>

        <div className="container w-4/5 mx-auto flex flex-wrap items-start p-2">
          {/* Image on the Left */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="max-w-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-auto rounded-md"
                src={bannerimage}
                alt="About Us Image"
              />
            </div>
          </div>

          {/* Text and Button on the Right */}
          <div className="w-full md:w-2/3   px-4">
            <div className="text-2xl font-bold py-2 text-accent text-left">
              Why Bit-Er?
            </div>
            <p className="text-base font-normal text-gray-700 text-justify">
              At Bit-Er, innovation meets reliability. We're your digital
              partner, offering tailored solutions, expertise across the board,
              and unwavering support. Choose Bit-Er for a seamless and
              groundbreaking digital experience.
            </p>
            <div className="w-full text-left">
              <a
                href="https://www.linkedin.com/in/bit-er-devs/"
                target="_blank"
              >
                <button
                  name="linkedin"
                  className="py-3 px-5 mt-4 bg-primary text-white  hover:bg-secondary hover:text-primary"
                >
                  View Linkedin
                </button>
              </a>
            </div>
          </div>
        </div>

        <section className="container w-4/5 mx-auto  ">
          {/* Render 3 Mission Cards */}
          <div className=" flex flex-wrap justify-around p-5 ">
            {missionData.map((mission, index) => (
              <Card
                key={`about${index + mission.title}`}
                imageUrl={mission.imageUrl}
                icon={mission.icon}
                title={mission.title}
                dec={mission.dec}
              />
            ))}
          </div>
        </section>
      </section>
      {/* Services */}
      <section className="w-full bg-white text-center" id="services">
        <h2 className="text-3xl font-bold pb-10 pt-20 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase text-dark">
          Our Services
        </h2>
        <p className="w-3/5 mx-auto mb-6 text-base font-normal">
          Bit-Er offers comprehensive digital solutions, including web and app
          development, and design. We specialize in transforming ideas into
          seamless, impactful digital experiences for businesses of all sizes.
        </p>
        <div className="flex flex-wrap mx-auto w-4/5 justify-center">
          {services.map((res, index) => (
            <Service
              key={index}
              icon={res.icon}
              heading={res.title}
              description={res.dec}
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-light w-full mt-12 text-center">
        <h2 className="text-3xl font-bold mb-6 pt-10 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase text-dark">
          Our Skills
        </h2>
        <p className="w-3/5 mx-auto mb-6 text-base font-normal">
          Innovative web and app development solutions by skilled professionals
          proficient in full-stack development, mobile app expertise, and
          cutting-edge UI/UX design. We prioritize security, agility, and
          cross-platform compatibility to deliver tailored and high-performance
          digital experiences.
        </p>
        <div className="w-4/5 mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((res, index) => (
              <CustomCircularProgressbar
                key={index}
                color={res.color}
                title={res.title}
                percentage={res.progress}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center                                                                                                                                                              ">
            {total.map((res, index) => (
              <div
                key={index}
                className="w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/4 mt-5 px-2"
              >
                <AnimatedNumbers
                  includeComma
                  className="w-100 mx-auto justify-center text-accent"
                  transitions={() => ({
                    type: "spring",
                    duration: 0.3,
                  })}
                  animateToNumber={res.count}
                  fontStyle={{
                    fontSize: 60, // Responsive font size
                    fontWeight: "bold",
                  }}
                />
                <p className="text-center mt-2 text-dark">{res.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="w-full bg-white mt-12 text-center" id="portfolio">
        <h2 className="text-3xl font-bold pb-10 pt-20 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase text-dark">
          OUR PORTFOLIO
        </h2>
        <p className="w-3/5 mx-auto mb-6 text-base font-normal">
          Explore a diverse portfolio showcasing our prowess in crafting
          impactful web and app solutions. From dynamic e-commerce platforms to
          seamless mobile applications, each project exemplifies our commitment
          to innovation, user-centric design, and cutting-edge technology.
          Witness the results of our passion for delivering digital excellence.
        </p>
        <div className="w-full">
          {/* <div className="mx-auto flex flex-wrap justify-center">
            {category.map((res) => (
              <span
                key={res.id}
                className={`flex-shrink-0 px-3 py-4 cursor-pointer uppercase text-light ${res.id === 1 ? 'bg-accent' : 'bg-secondary'}`}
              >
                {res.title}
              </span>
            ))}
          </div> */}
          <div className="w-4/5 mx-auto flex flex-wrap justify-around pb-3">
            <Prtfolio />
          </div>
        </div>
      </section>

      {/* Meet our Team */}
      {/* <section className='bg-light dark:bg-dark w-full text-center'>
        <h2 className="text-3xl font-bold mb-6 pt-10 pb-6 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase dark:text-light">MEET OUR TEAM</h2>
        <p className='w-full sm:w-3/5 mx-auto mb-6 text-base font-normal dark:text-light'>Quisque ac tincidunt ipsum egestas viverra mi, ac vehicula enim consectetur quis. In imperdiet varius elit, ut convallis lectus luctus quis.</p>
        <div className='flex flex-wrap w-full sm:w-4/5 mx-auto'>
          {teams.map((res, index) => (
            <Teamcard key={index} image={res.img} name={res.name} title={res.designation} social={res.social} />
          ))}
        </div>
      </section> */}

      {/* Quote */}
      <section className="w-full bg-primary mt-12 text-center text-light">
        <div className="text-center">
          <header className="">
            <h2 className="text-3xl font-bold pb-10 pt-20 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase dark:text-light">
              Let's make a Quote
            </h2>
            <p className="lg:w-6/12 mx-auto text-light mb-5">
              Unleash creativity with custom quotes. Share your vision, and
              let's shape it into a digital masterpiece. Together, let's inspire
              the future.
            </p>
          </header>
          <a href="https://www.linkedin.com/in/bit-er-devs/" target="_blank">
            <button
              name="makequote"
              className="bg-light dark:bg-secondary text-primary py-3 px-5 mt-5 mb-10 hover:bg-secondary hover:text-light hover:-translate-y-1 uppercase transition-transform"
            >
              Let's Make a Quote <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
        </div>
      </section>
      {/*Testimonial*/}
      {/* <section className="bg-light dark:bg-secondary w-full mt-12 text-center">
        <h2 className="text-3xl font-bold pb-10 pt-20 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase dark:text-light">
          TESTIMONIALS
        </h2>
        <p className="w-3/5 mx-auto mb-6 text-base font-normal dark:text-light">
          Quisque ac tincidunt ipsum egestas viverra mi, ac vehicula enim
          consectetur quis. In imperdiet varius elit, ut convallis lectus luctus
          quis.
        </p>
        <div className="flex flex-wrap w-4/5 mx-auto p-2">
          <Testimonial />
        </div>
      </section> */}

      {/* Tools and Technolgies */}
      <section className="bg-white dark:bg-secondary w-full mt-12 text-center">
        <h2 className="text-3xl font-bold pb-10 pt-20 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase dark:text-light">
          TOOLS and TECHNOLOGIES
        </h2>
        <p className="w-3/5 mx-auto mb-6 text-base font-normal dark:text-light">
          Empowering innovation with cutting-edge tools, we excel in robust
          full-stack development and polished UI/UX design. Our versatile tech
          stack ensures efficiency, security, and scalability in every project,
          reflecting our commitment to deliver cutting-edge solutions.
        </p>
        <div className="flex flex-wrap w-4/5 mx-auto">
          <ToolsSlider />
        </div>
      </section>

      {/* Contact */}
      <section
        className="bg-light dark:bg-dark w-full mt-12 mb-10 text-center"
        id="contact"
      >
        <h2 className="text-3xl font-bold mb-6 pt-10 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase text-dark dark:text-light">
          Contact us
        </h2>
        <p
          className="w-3/5 mx-auto mb-6 text-base font-normal dark:text-light"
          style={{ color: "#001908" }}
        >
          Ready to embark on a digital transformation journey? Connect with us
          to discuss your project, explore collaboration opportunities, or get
          expert insights. Our team is eager to hear from you. Let's turn your
          ideas into reality.
        </p>

        <div className="flex flex-col lg:flex-row items-center mt-2 w-4/5 mx-auto">
          <div className="lg:w-3/5 lg:text-center">
            <div className="mx-auto lg:w-4/5">
              <Contactform />
            </div>
          </div>
          <div className="lg:w-2/5 lg:ml-auto mt-4 lg:mt-0">
            <img src={bannerimage} alt="" className="w-full rounded-md" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Homepage;
