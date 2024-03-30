import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const buttonContainerClasses = 'bg-skyblue-light h-10 w-10 rounded-full items-center justify-center hidden xl:flex';
const buttonClasses = 'text-gray-500';

export const SliderButtonLeft = () => {
  return (
    <div className={buttonContainerClasses}>
      <BsChevronLeft className={buttonClasses} />
    </div>
  );
};

export const SliderButtonRight = () => {
  return (
    <div className={buttonContainerClasses}>
      <BsChevronRight className={buttonClasses} />
    </div>
  );
};
