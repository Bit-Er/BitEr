import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ imageUrl, icon, title, dec }) => {
  return (
    <div className="max-w-sm mt-5 mx px-2 group">
      {/* Card Header with Image */}
      <div className='auto max-w-md overflow-hidden shadow-lg relative hover:scale-105 bg-white transition-transform'>
        <div className="h-50 overflow-visible relative">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="Mission Image"
          />

          {/* Icon - Positioned Absolute */}
          <div className="w-full">
            <div className="mx-auto -translate-y-10 text-center">
              <FontAwesomeIcon
                icon={icon}
                style={{ height: "30px", width: "30px" }}
                className='bg-accent rounded-full p-5 border-4 text-white border-white group-hover:bg-white group-hover:text-accent'
              />
            </div>
          </div>
        </div>
        {/* Card Body with Description */}
        <div className="p-5 -mt-10">
          <h3 className='text-2xl font-bold text-dark'>{title}</h3>
          {/* Description */}
          <p className="mt-2 text-dark">{dec}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
