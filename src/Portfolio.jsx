import React from 'react';
import Projects from './sections/Projects';
import HeroPortfolio from './sections/HeroPortfolio';
import CardPortfolio from './sections/CardPortfolio';
const Portfolio = () => {
  return (
    <main className="bg-[#0E0E12]">
      <HeroPortfolio />
      <Projects />
      <CardPortfolio />
    </main>
  );
};

export default Portfolio;
