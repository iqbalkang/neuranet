import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Container from './Container';

const Footer = () => {
  return (
    <Container>
      <footer className='flex flex-col md:flex-row justify-between items-center py-3 gap-2 text-xs md:text-sm'>
        <Link to='/'>
          <img src={Logo} alt='genai logo' className='w-24 md:w-40' />
        </Link>
        <p>All rights reserved © 2023 Genai Works</p>
      </footer>
    </Container>
  );
};

export default Footer;
