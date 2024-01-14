import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contactcard = ({ icon, title, data }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 mt-2 mx-auto">
      <div className={`bg-white dark:bg-secondary p-4 flex flex-col items-center hover:shadow-md`}>
        <div className='m-2'>
          <FontAwesomeIcon
            icon={icon}
            size="3x"
            className={`bg-accent text-light rounded-full p-3`}
            style={{ border: '2px solid white' }}
          />
        </div>
        <h1 className={`text-lg font-semibold uppercase mt-2 dark:text-light`}>{title}</h1>
        <p className={`dark:text-light`}>{data}</p>
      </div>
    </div>
  );
};

export default Contactcard;
