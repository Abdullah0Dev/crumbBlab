import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full max-xl:flex-col items-center flex  relative" id="home">
      <img src="/assets/spotlight2.png" alt="spotlight" className='absolute top-0 right-0 z-0' />
    
      <div className=" w-3/5 mx-auto flex  max-xl:w-full   flex-col sm:mt-36 mt-20 c-space gap-x-3">
        <p className="hero_tag text-gray_gradient">
          Transform<span className="text-purple-300 xl:text-7xl">. </span> Grow
          <span className="text-purple-300 xl:text-7xl">. </span> Dominate
          <span className="text-purple-300 xl:text-7xl">. </span>
        </p>
        <p className="text-md font-medium text-purple-200 text-opacity-30 font-generalsans">
          From stunning logos to fully optimized websites, we craft digital experiences that drive success. Scroll down
          to see how we can elevate your business.
        </p>
        <div className="mt-5 max-xl:inline flex">
          <a href="#about" className="w-fit">
            <Button name="Get Started" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
      </div>
      <div className="w-2/3">
        <img src="/assets/hero-img.png" alt="website-builder" className="object-contain" />
      </div>

      <div className="w-full h-full absolute -inset-10">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas> 
      </div>
       
    </section>
  );
};

export default Hero;
/**
  <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Adrian <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
           
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
 */
