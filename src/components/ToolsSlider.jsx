import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { tools } from '../data/Data';

const ToolsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Adjusted to at least 5 items initially
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set the autoplay speed in milliseconds (adjust as needed)
        ease: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        cssEase: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 9,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="container mx-auto mt-5 mb-10">
            <Slider {...settings} draggable={true}>
                {tools.map((tool, index) => (
                    <div key={index} className="w-full p-2">
                        <div className="w-200 h-200 mx-auto"> {/* Added container size */}
                            <img
                                src={tool.img}
                                alt={`Slide ${index + 1 + tool.alt}`}
                                className="w-full h-full object-cover"  // Added image size
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ToolsSlider;
