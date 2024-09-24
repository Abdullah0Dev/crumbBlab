import {  useEffect, useState } from 'react'; 
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx'; 

const Hero = () => {
  const words = [
    'Transform',
    'Grow',
    'Dominate',
    'Thrive',
    'Scale',
    'Succeed',
    'Excel',
    'Advance',
    'Expand',
    'Innovate',
    'Elevate',
    'Create',
    'Craft',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    //  justify-center  px-9 py-5 mb-5 max-xl:flex-col max-xl:gap-y-9 max-xl:py-40 items-center flex relative
    <section className="min-h-screen w-full font-custom flex items-center py-5 justify-center max-xl:pt-32" id="home">
      <img src="/assets/spotlight2.png" alt="spotlight" className="absolute top-0 right-0 z-0" />
      <div className=" flex items-center justify-between w-full px-12 max-xl:px-5 gap-x-24 max-xl:flex-col">
        <div className="w-2/5   max-xl:w-full">
          <h1 className="hero_tag_main text-white text-4xl md:text-5xl lg:text-6xl">
            Together, we'll help <br className='max-xl:hidden' /> you {" "}
            <motion.span
              className="hero_tag lowercase text-red-500 text-4xl md:text-5xl lg:text-6xl inline-block w-48 text-center" // Adjust width as needed
              key={currentWordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}>
              {' '}
              {words[currentWordIndex]}
            </motion.span>
          </h1>

          <p className="text-[#707070] pr-9 font-custom text-lg md:text-xl max-xl:mb-2 max-xl:text-center mt-4">
            Accelerate your business with impactful and digital strategies that drive results.
          </p>
          <div className="mt-5 self-center max-sm:w-full max-xl:inline flex">
            <a href="#overview-section" className="w-fit">
              <Button name="Get Started" isBeam containerClass="w-96 max-sm:w-[90%]" />
            </a>
          </div>
        </div>
        <div className="w-3/5 max-xl:w-full max-xl:pt-9 max-w-4xl text-white">
          <h1 className="hero_tag_main text-center text-3xl md:text-4xl lg:text-5xl">Why We're Here</h1>
          <h3 className="text-center text-[#707070] text-lg md:text-xl mt-4">
            I've been through it—the endless search for developers who actually get the job done. Missed deadlines, poor
            communication, and feeling like no one cared as much as I did. It was infuriating. I knew there had to be a
            better way.
            <br /> <br />
            That's why I built <span className="text-red-500">CrumbLab</span>. I was sick of the excuses, the delays,
            and the stress. You deserve a team that delivers—no BS, no runaround. We make IT & designing simple, fast,
            and reliable, because I've been in your shoes, and I know how frustrating it is when things just don't work.
            <br /> <br />
            At <span className="text-red-500">CrumbLab</span>, we get it right the first time. You focus on growing your
            business—we'll handle the rest. Thank you for stopping by.
            <br />
            <br />- <span className="text-red-500">Brian McQueen</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
