import { curve } from '../assets'; 
import React from 'react'; 
const Hero = () => { 
  return (
    <div className='pt-20'>
      <div className="container relative"  >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-white">
          Explore Our Previous Work and Ignite Your Brand's  {` `}
            <span className="inline-block relative">
            Potential!{' '}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Explore our standout work—delivering stunning web design, custom software, logo design, video editing, and
            more to drive your brand forward.
          </p>
        </div> 
    </div>
    </div>
  );
};

export default Hero;
