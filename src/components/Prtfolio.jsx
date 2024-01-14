import { faArrowUpRightFromSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { portfolios } from '../data/Data';

const Prtfolio = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:2,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set the autoplay speed in milliseconds (adjust as needed)
    ease: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    cssEase: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    responsive: [
     
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],
  };
  return (
    <div className="container mx-auto mt-5 mb-10">
      <Slider {...settings} draggable={true} >
        {portfolios.map((tool, index) => (

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-5 px-2 mx-auto" key={`${tool.title}${index}`}>
            {/* Card Header with Image */}
            <div
              className="relative rounded overflow-hidden shadow-lg"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img
                className="w-full h-full object-cover"
                src={tool.img}
                alt="Mission Image"
              />
              {visible ? (
                <>
                  <div className="absolute top-0 left-0 text-light bg-dark opacity-50 w-full h-full transition-opacity"></div>
                  <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center text-light transition">
                    <div className="flex justify-center mt-4">
                      <a href={tool.viewlink} target="_blank" rel="noopener noreferrer">
                      <button name='view' className="mx-2 py-2 px-4 bg-primary text-white rounded-full hover:bg-light hover:text-dark" title="Preview">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      </a>
                      <a href={tool.gitlink} target="_blank" rel="noopener noreferrer">
                      <button name="checkcode" className="mx-2 py-2 px-4 bg-primary text-white rounded-full hover:bg-light hover:text-dark" title="More Details">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-0 left-0 text-light bg-dark opacity-30 w-full h-full transition-opacity"></div>
                  <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center text-light transition">
                    <h1 className="text-xl uppercase font-bold">{tool.title}</h1>
                    <h2>{tool.category}</h2>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Prtfolio;

