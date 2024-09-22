import React from 'react';
import { Leva, useControls } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import Can from '../components/Can.jsx';
import Hero from '../components/Hero.jsx';
const HeroPortfolio = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

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

  return (
    <div className="  bg-[#0E0D15]">
      <Hero />
    </div>
  );
};

export default HeroPortfolio;
