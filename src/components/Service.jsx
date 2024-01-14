import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({ icon, heading, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-white p-8">
        <div className='w-100 text-center'>
          <FontAwesomeIcon
            icon={icon}
            style={{ height: "50px", width: "50px" }}
            className='rounded-full p-5 border-4 text-accent border-white' 
          />
        </div>
        <h2 className="text-xl font-bold mb-4 text-dark">{heading}</h2>  {/* Use text-dark for the heading color */}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Service;
