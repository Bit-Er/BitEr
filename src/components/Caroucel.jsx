import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; // Correct import
import { carouceldata } from '../data/Data';
import { Link } from 'react-router-dom';

const Caroucel = () => {
    return (
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} swipeable={false} stopOnHover={false} dynamicHeight={true} showStatus={false} animationHandler={'slide'} className="min-h-screen max-h-screen overflow-y-hidden">
            {carouceldata.map(res => (
                <div key={`${res.title + res.path}`} className="relative">
                    <img src={res.img} className="w-full h-full object-cover object-center min-h-screen max-h-screen" alt={`Image ${res.title}`} />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-start text-light top-1/4 md:top-1/3">
                        <div className="text-5xl font-bold w-4/5 text-center">
                            {res.title}
                        </div>
                        <p className="text-center text-light w-5/6 p-2 md:w-4/6 md:p-5 my-4 mb-5">
                            {res.des}
                        </p>
                        <div>
                            <Link to={res.path} className="bg-primary pt-3 pb-3 ps-5 pe-5 mt-3 font-bold uppercase shadow hover:shadow-md transition-transform transform active:scale-95 hover:bg-light hover:text-primary" style={{ letterSpacing: '1px' }}>
                                View Detail
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Caroucel;
