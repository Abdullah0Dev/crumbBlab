import { Leva, useControls } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';  
import Button from '../components/Button.jsx'; 
import CanvasLoader from '../components/Loading.jsx'; 
import Can from '../components/Can.jsx';
import Card from '../components/Card.jsx';
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
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cardCursor, setCardCursor] = useState({ x: 0, y: 0, z: 0 });

  // Use media queries to determine screen size
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const controls = useControls('Can', {
    position: {
      value: isMobile ? [0, 0, 14] : [0, 0, 19], // smaller for mobile
      min: [-50, -50, -50],
      max: [50, 50, 50],
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

  // -1.7, -1.8
  const CardControls = useControls('Card', {
    position: {
      value: isMobile ? [0, 0, 14] : [0,  -1.5, 19],
      min: [-50, -50, -50],
      max: [50, 50, 50],
    },
    rotation: {
      value: [1.57,  3.13, 1.55], // Small rotation
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
      setCardCursor({
        x: e.clientX / window.innerWidth - 0.5, // Adjust for center
        y: e.clientY / window.innerHeight - 0.5,
        z: 0,
      });
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  


  return (
    <section
      className="min-h-screen w-full py-5 mb-5 max-xl:flex-col max-xl:pb-80 items-  flex relative"
      id="home">
      <img src="/assets/spotlight2.png" alt="spotlight" className="absolute top-0 right-0 z-0" />

      <div className="w-3/5 mx-auto flex max-xl:w-full ml-4 max-sm:ml-0 z-10 flex-col sm:mt-36  mt-32 c-space   gap-x-3">
        <p className="hero_tag_main  text-white   ">
          Together, we'll help you{' '} <br />
          <motion.span
            className="hero_tag   lowercase text-red-500"
            key={currentWordIndex} // Use key to trigger the animation on change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}>
            {'  ('} {words[currentWordIndex]} {') '}
          </motion.span>
        </p>

        <div className="mt-5 self-center max-sm:w-full max-xl:inline flex">
          <a href="#overview-section" className="w-fit">
            <Button name="Get Started" isBeam containerClass="w-96 max-sm:w-full" />
          </a>
        </div>
      </div>

      <div className="w-2/3 relative max-xl:py-40" />

      <div className="absolute -z-0 max-xl:mb-32  max-xl:left-auto left-96 w-full h-full">
        <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Can {...controls} cursor={cursor} />

            {/* Orbit Controls */}
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              maxAzimuthAngle={Math.PI / 16}
              minAzimuthAngle={-Math.PI / 16}
            />

            {/* Lighting Setup */}
            <ambientLight intensity={0.5} color="#ffffff" />
            <pointLight position={[0, 10, 20]} intensity={1} color="#ffffff" />
            <pointLight position={[0, 10, -20]} intensity={1} color="#ffffff" />

            <spotLight position={[0, 20, 0]} intensity={1.5} angle={0.5} penumbra={0.2} castShadow color="#ffffff" />
            <spotLight position={[0, -20, 0]} intensity={2.5} angle={0.5} penumbra={0.2} castShadow color="#ffffff" />
            <directionalLight position={[0, -20, 0]} intensity={0.7} color="#ffffff" />
            <directionalLight position={[5, 5, 5]} intensity={0.7} color="#ffffff" />
            <directionalLight position={[-5, -5, 5]} intensity={0.7} color="#ffffff" />
          </Suspense>
        </Canvas>
      </div>
      {/* 1.6,  6.3, 1.5 */}
      <div className="absolute -z-10 max-xl:mb-20 -bottom-32  max-xl:hidden -left-96 w-full h-full">
        <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {/* -8.00 */}
            <Card {...CardControls} cardCursor={cardCursor} />

            {/* Lighting Setup */}
            <ambientLight intensity={0.5} color="#ffffff" />
            <pointLight position={[0, 10, 20]} intensity={1} color="#ffffff" />
            <pointLight position={[0, 10, -20]} intensity={1} color="#ffffff" />

            <spotLight position={[0, 20, 0]} intensity={1.5} angle={0.5} penumbra={0.2} castShadow color="#ffffff" />
            <spotLight position={[0, -20, 0]} intensity={2.5} angle={0.5} penumbra={0.2} castShadow color="#ffffff" />
            <directionalLight position={[0, -20, 0]} intensity={0.7} color="#ffffff" />
            <directionalLight position={[5, 5, 5]} intensity={0.7} color="#ffffff" />
            <directionalLight position={[-5, -5, 5]} intensity={0.7} color="#ffffff" />
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
