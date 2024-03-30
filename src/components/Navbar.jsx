import React from 'react';
import Container from './Container';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import GPT from '../assets/gpt.svg';
import { leftLinkItems, rightLinkItems } from '../data/navData';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const renderLeftLinks = leftLinkItems.map((link, index) => (
    <li key={index} className='hover:text-violet-accent'>
      <NavLink to={link.to}>{link.title}</NavLink>
    </li>
  ));

  const renderRightLinks = rightLinkItems.map((link, index) => (
    <li key={index} className='hover:text-violet-accent'>
      <NavLink to={link.to}>{link.title}</NavLink>
    </li>
  ));

  return (
    <Container>
      <nav className='bg-white h-16 sm:h-20 flex items-center'>
        <Link to='/'>
          <img src={Logo} alt='genai logo' className='w-24 md:w-40' />
        </Link>

        <button className='bg-skyblue-dark rounded text-white py-1.5 px-2.5 ml-auto'>
          <GiHamburgerMenu size={22} />
        </button>

        <ul className='lg:flex items-center gap-8 text-skyblue-dark text-sm ml-10 hidden'>
          {renderLeftLinks}
          <button className='bg-greenish text-white py-2 px-4 rounded-full flex gap-2 items-center -ml-4'>
            <img src={GPT} alt='gpt logo' className='h-6' />
            Submit your GPT
          </button>
        </ul>

        <ul className='lg:flex items-center gap-8 text-skyblue-dark text-sm ml-auto hidden'>{renderRightLinks}</ul>
      </nav>
    </Container>
  );
};

export default Navbar;
