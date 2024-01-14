import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = ({ image, name, title, social }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mt-5 px-3">
      <div className="bg-white dark:bg-secondary pb-2 hover:bg-primary hover:text-light hover:font-extrabold hover:scale-110 hover:rounded transition-transform">
        <img src={image} alt={1} className="w-full rounded" />
        <h1 className="text-xl mt-5 dark:text-light">{name}</h1>
        <p className="dark:text-light">{title}</p>
        <div className="w-full flex flex-row justify-center mt-5">
        {social.map((res, index) => (
            <span key={index} className="mx-2">
              <i class={`fa-brands fa-${res.name} hover:bg-light hover:text-primary p-1 rounded-full cursor-pointer`} ></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
