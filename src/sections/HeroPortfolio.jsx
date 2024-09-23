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
  return (
    <div className="  bg-[#0E0D15]">
      <Hero />
    </div>
  );
};

export default HeroPortfolio;
