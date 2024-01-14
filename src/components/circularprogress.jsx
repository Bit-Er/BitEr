import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';

const CustomCircularProgressbar = ({ percentage, color, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    let frame = 0;
    let intervalId;

    const startAnimation = () => {
      const animationDuration = 1000;
      const framesPerSecond = 60;
      const totalFrames = (animationDuration / 1000) * framesPerSecond;
      const increment = percentage / totalFrames;

      intervalId = setInterval(() => {
        frame += 1;
        setAnimatedPercentage((prevPercentage) =>
          prevPercentage + increment >= percentage
            ? percentage
            : prevPercentage + increment
        );

        if (frame === totalFrames) {
          clearInterval(intervalId);
        }
      }, 1000 / framesPerSecond);
    };

    if (inView) {
      startAnimation();
    } else {
      // Reset the animation when out of view
      clearInterval(intervalId);
      setAnimatedPercentage(0);
    }

    return () => clearInterval(intervalId);
  }, [inView, percentage]);

  const customStyles = {
    root: {
      width: '150px',
      height: '150px',
      display: 'inline-block',
      margin: '0 10px', // Adjust the margin as needed
    },
    path: {
      stroke: color,
      strokeLinecap: 'butt',
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
      transition: 'stroke 0.5s ease-out',
    },
    trail: {
      stroke: '#d6d6d6',
      strokeLinecap: 'butt',
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    text: {
      fill: color,
      fontSize: '24px',
      fontWeight: 'bold',
      stroke: '#010101',
      strokeWidth: 1,
      textShadow: `1px 2px 100px ${color}`,
    },
    background: {
      fill: '#3e98c7',
    },
  };

  return (
    <div ref={ref}>
      <div className='text-center'>
        <CircularProgressbar
          value={animatedPercentage}
          text={`${Math.round(animatedPercentage)}%`}
          styles={customStyles}
        />
        <h2 className='text-xl font-bold mt-2 uppercase'>{title}</h2>
      </div>
    </div>
  );
};

export default CustomCircularProgressbar;
