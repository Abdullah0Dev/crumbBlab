import React from 'react';
import { motion } from 'framer-motion';

const LoadingPages = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.img
        src="/assets/loading.png"
        alt="Loading"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-24 h-24"
      />
    </div>
  );
};

export default LoadingPages;
