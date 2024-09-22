import { curve, heroBackground, robot } from '../assets';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';
import Generating from './Generating';
import Notification from './Notification';
import CompanyLogos from './CompanyLogos';
import React from 'react';
import { Leva, useControls } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import CanvasLoader from '../components/Loading.jsx';
import Card from '../components/Card.jsx';
import Projects from '../sections/Projects.jsx';

const Hero = () => {
  const parallaxRef = useRef(null);

  const [cardCursor, setCardCursor] = useState({ x: 0, y: 0, z: 0 });

  // Use media queries to determine screen size
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // -1.7, -1.8
  const CardControls = useControls('Card', {
    position: {
      value: isMobile ? [0, 0, 14] : [0, -1.5, 22],
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
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero">
      <div className="container relative" ref={parallaxRef}>
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
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] bg-no-repeat bg-cover bg-[url(../assets/hero/robot.jpg)] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <div className="w-full h-full absolute z-10 scale-[2] -translate-y-[18%] max-md:hidden md:scale-[1] max-md:-translate-y-[20%] lg:-translate-y-[23%] ">
                  <Leva hidden />
                  <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                      <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                      <Card {...CardControls} cardCursor={cardCursor} />
                      {/* Lighting Setup */}
                      <ambientLight intensity={0.5} color="#ffffff" />
                      <pointLight position={[0, 10, 20]} intensity={1} color="#ffffff" />
                      <pointLight position={[0, 10, -20]} intensity={1} color="#ffffff" />
                      <spotLight
                        position={[0, 20, 0]}
                        intensity={1.5}
                        angle={0.5}
                        penumbra={0.2}
                        castShadow
                        color="#ffffff"
                      />
                      <spotLight
                        position={[0, -20, 0]}
                        intensity={2.5}
                        angle={0.5}
                        penumbra={0.2}
                        castShadow
                        color="#ffffff"
                      />
                      <directionalLight position={[0, -20, 0]} intensity={0.7} color="#ffffff" />
                      <directionalLight position={[5, 5, 5]} intensity={0.7} color="#ffffff" />
                      <directionalLight position={[-5, -5, 5]} intensity={0.7} color="#ffffff" />
                    </Suspense>
                  </Canvas>
                </div>
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute text-white -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Logo Design"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div> 
          <BackgroundCircles />
        </div> 
      </div> 
      <BottomLine />
    </Section>
  );
};

export default Hero;
