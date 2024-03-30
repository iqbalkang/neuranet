import React from 'react';
import Header from '../components/Header';
import Featured from '../components/Featured';
import Section from '../components/Section';
import RecentlyAdded from '../components/RecentlyAdded';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Partners from '../components/Partners';

const Home = () => {
  return (
    <>
      <Header />

      <Section>
        <Featured />
      </Section>

      <Section>
        <RecentlyAdded />
      </Section>

      <Section>
        <Partners />
      </Section>

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
