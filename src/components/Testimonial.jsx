import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; // Correct import
import { carouceldata, image } from '../data/Data';
import { Link } from 'react-router-dom';

const Testimonial = () => {
    return (
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} swipeable={true} stopOnHover={false}    showStatus={false}  animationHandler={'slide'} className=" overflow-y-hidden min-h-fit  ">
            {carouceldata.map(res => (
                <div key={`${res.title + res.path}`} className="relative bg-white text-center overflow-hidden ">
                    <div className="flex justify-start items-center flex-wrap">
                        <div className="md:w-5/12 w-12/12">
                            <div className="text-center">
                                <img src={image} className='my-auto'  alt="Testimonial image" />
                            </div>
                        </div>
                        <div className=" md:w-7/12 w-12/12 text-center pb-2">
                            <div className="p-3 lg:p-5 text-center">
                                <h3 className='font-bold text-xl lg:text-3xl'>Anna M. Brzezinski</h3>
                                <h4>businesswoman</h4>
                                <p className='lg:text-xl'>"Nullam vulputate nunc diam, non congue est vestibulum ut. Curabitur
                                    placerat mauris non nisi cursus commodo. Integer dolor augue, maximus
                                    interdum pretium a, mattis ut mi."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </Carousel>
    );
};

export default Testimonial;

