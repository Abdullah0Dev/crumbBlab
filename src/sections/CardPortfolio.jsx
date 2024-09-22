import React from 'react';
import Section from '../components/Section';
import { curve } from '../assets';
import CustomButton from '../components/CustomButton';
import { Gradient } from '../components/design/Hero';
import { useNavigate } from 'react-router-dom';

const CardPortfolio = () => {
  // Initialize the navigate hook here
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Correctly navigate to the contact section
    navigate('/#contact');
  };

  return (
    <Section
      className="mt-[2rem] pt-[7.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="callToAction">
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] py-9 mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-white">
            Ready to Transform Your Vision into
            {` `}
            <span className="inline-block relative">
              Reality?
              {` `}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        <div className="pt-[7.25rem] overflow-hidden">
          {/*  href={"/#contact"} */}
              <CustomButton onClick={handleButtonClick} className="w-full   rounded-tr-[22px]">
               Let's Create Something Amazing   
              </CustomButton>
            </div>
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img src={'/assets/stars.svg'} className="w-full" width={950} height={400} alt="Stars" />
        </div>
        </div>
      </div>
      
      <Gradient />
    </Section>
  );
};

export default CardPortfolio;
