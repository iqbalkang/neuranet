import React from 'react';

const GradientText = ({ children }) => {
  return (
    <span className='bg-gradient-to-r from-skyblue-accent to-violet-accent bg-clip-text text-transparent ml-1.5'>
      {children}
    </span>
  );
};

export default GradientText;
