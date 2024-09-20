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
      value: isMobile ? [0, 0, 14] : [0, -1.5, 19],
      min: [-50, -50, -50],
      max: [50, 50, 50],
    },
    rotation: {
      value: [1.57, 3.13, 1.55], // Small rotation
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
      className="min-h-screen w-full font-custom py-5 mb-5 max-xl:flex-col max-xl:gap-y-9 max-xl:py-40 items-center  flex relative"
      id="home">
      <img src="/assets/spotlight2.png" alt="spotlight" className="absolute top-0 right-0 z-0" />
      <div className="flex items-baseline max-xl:flex-col">
        <div className="w-[45rem]  px-10 flex max-xl:w-full ml-0 max-sm:ml-0 z-10 flex-col sm:mt-36  -mt-9  ">
          <h1 className="hero_tag_main  text-white   ">
            Together, we'll help you
            <motion.span
              className="hero_tag   lowercase text-red-500"
              key={currentWordIndex} // Use key to trigger the animation on change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}>
              {' '}
              {words[currentWordIndex]}
            </motion.span>
          </h1>
          <p className="text-[#707070] font-custom  text-center ">
            Accelerate your business with impactful and digital strategies that drive results.
          </p>
          <div className="  mt-5 self-center max-sm:w-full max-xl:inline flex">
            <a href="#overview-section" className="w-fit">
              <Button name="Get Started" isBeam containerClass="w-96 max-sm:w-[90%]" />
            </a>
          </div>
        </div>
        <div className="w-72 relative " />
        <div className="w-3/5 max-xl:w-full max-w-3xl max-xl:mt-12  relative max-xl:px-3 px-12  text-white">
          <h1 className=" hero_tag_main text-center text-white">Why We're Here</h1>
          <h3 className="text-center text-[#707070]">
            I've been through it—the endless search for developers who actually get the job done. Missed deadlines, poor
            communication, and feeling like no one cared as much as I did. It was infuriating. I knew there had to be a
            better way.
            <br />  <br />
            That's why I built <span className="text-red-500"> Crumblab</span>. I was sick of the excuses, the delays,
            and the stress. You deserve a team that delivers—no BS, no runaround. We make IT & designing simple, fast,
            and reliable, because I've been in your shoes, and I know how frustrating it is when things just don't work.
            <br /> <br />
            At <span className="text-red-500"> Crumblab</span>, we get it right the first time. You focus on growing
            your business—we'll handle the rest. Thank you for stopping by.
            <br />- <span className="text-red-500"> Brian McQueen </span>{' '}
          </h3>
        </div>
      </div>
      <div className="absolute -z-10 max-xl:hidden -left-12  w-full h-full">
        <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Can {...controls} cursor={cursor} />

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
