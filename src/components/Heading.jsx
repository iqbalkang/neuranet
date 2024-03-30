import React from 'react';
import GradientText from './GradientText';

const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const Heading = ({ textLeft, textGradient }) => {
  return (
    <h2 className='capitalize text-xl font-bold mb-6'>
      {textLeft}
      <GradientText>{capitalized(textGradient)}</GradientText>
    </h2>
  );
};

export default Heading;
