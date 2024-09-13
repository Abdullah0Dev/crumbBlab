import { Leva, useControls } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import Can from '../components/Can.jsx';
const Hero = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const controls = useControls('Can', {
    position: {
      value: [0, 0, 19], // default position
      min: [-50, -50, -50], // min for each axis
      max: [50, 50, 50], // max for each axis
    },
    rotation: {
      value: [0, -Math.PI, 0],
      min: [-Math.PI, -Math.PI, -Math.PI],
      max: [Math.PI, Math.PI, Math.PI],
    },
    scale: {
      value: [1, 1, 1],
      min: [0.1, 0.1, 0.1],
      max: [5, 5, 5],
    },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({
        x: e.clientX / window.innerWidth,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen w-full py-5 max-xl:flex-col max-xl:pb-80 items-center flex  relative" id="home">
      <img src="/assets/spotlight2.png" alt="spotlight" className="absolute top-0 right-0 z-0" />

      <div className=" w-3/5 mx-auto flex  max-xl:w-full  z-10 flex-col sm:mt-36 mt-20 c-space gap-x-3">
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
      <div className="w-2/3 relative max-xl:py-40" />
      <div className="absolute -z-0 max-xl:mb-20 max-xl:left-auto left-96 w-full h-full">
        {/* w-2/3 relative */}
        {/* <img src="/assets/hero-img.png" alt="website-builder" className="object-contain" /> */}
        <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Can scale={[1, 1, 1]} rotation={[0, 0, 0]} position={[0, 0, 19]} cursor={cursor} />
            <pointLight position={[0, 0, 30]} intensity={1} color="#d8b4fe" />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} color={'#303'} />
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
