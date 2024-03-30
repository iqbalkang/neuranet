import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Card from './Card';
import partnersData from '../data/partnersData';
import { SliderButtonLeft, SliderButtonRight } from './SliderButtons';

const Partners = () => {
  const renderCards = partnersData.map((partner, index) => {
    return <Card key={index} feature={partner} />;
  });

  return (
    <>
      <Container>
        <Heading textLeft='Partners' textGradient='' />
      </Container>

      <div className='px-4 flex items-center'>
        <SliderButtonLeft />

        <Container noPadding>
          <div className='overflow-auto'>
            <div className='flex gap-5'>{renderCards}</div>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-5'>{renderCards}</div> */}
          </div>
        </Container>

        <SliderButtonRight />
      </div>
    </>
  );
};

export default Partners;
