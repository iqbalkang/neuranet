import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Card from './Card';
import featuresData from '../data/featuresData';
import { SliderButtonLeft, SliderButtonRight } from './SliderButtons';

const Featured = () => {
  const renderCards = featuresData.map((feature, index) => {
    return <Card key={index} feature={feature} big={true} />;
  });

  return (
    <>
      <Container>
        <Heading textLeft='top' textGradient='featured' />
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

export default Featured;
