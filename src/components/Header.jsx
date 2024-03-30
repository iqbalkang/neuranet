import React from 'react';
import Brain from '../assets/brain.png';
import { FiSearch } from 'react-icons/fi';
import Container from '../components/Container';
import GradientText from './GradientText';

const Header = () => {
  return (
    <header className='header-bg py-8 md:py-12 md:pb-8'>
      <Container>
        <div className='grid md:grid-cols-[1fr,max-content] md:gap-20 max-w-[800px] mx-auto'>
          <div>
            <h1 className='text-3xl md:text-5xl font-bold mb-6'>
              Empower your
              <GradientText>life with AI</GradientText>
            </h1>
            <div className='bg-white flex items-center p-3 rounded-full mb-6'>
              <FiSearch className='text-gray-400' />
              <input type='text' className='outline-none ml-1.5 placeholder:text-gray-500' placeholder='search...' />
            </div>
          </div>
          <img src={Brain} alt='brain image' className='h-24 sm:h-32' />
        </div>
      </Container>
    </header>
  );
};

export default Header;
