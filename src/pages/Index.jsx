import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <section className=''>
      <Navbar />

      <main className='font-manrope text-blackish'>
        <Outlet />
      </main>
    </section>
  );
};

export default Home;
