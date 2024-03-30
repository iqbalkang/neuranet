import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Card from './Card';
import recentlyAddedData from '../data/recentlyAddedData';
import { SliderButtonLeft, SliderButtonRight } from './SliderButtons';

const RecentlyAdded = () => {
  const renderCards = recentlyAddedData.map((recent, index) => {
    return <Card key={index} feature={recent} big={true} />;
  });

  return (
    <>
      <Container>
        <Heading textLeft='recently' textGradient='added' />
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

export default RecentlyAdded;
