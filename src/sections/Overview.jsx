import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';

const Overview = () => {
  return (
    <section id="overview-section" className="w-full  h-screen bg-[#EFEFEF] flex items-center justify-center">
      <div  className="max-w-3xl max-md:item-center  py-20 items-center">
        <div className="flex self-center max-xl:flex-col max-xl:gap-y-32 gap-x-44">
          <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="overview flex flex-col items-center  ">
            <h2 className="text-black/30 text-xs font-light">Overview</h2>
            <h2 className="text-black/80 text-sm ">What’s Augen</h2>
          </motion.div>
          <motion.div className="overview flex flex-col items-start mt-2 gap-y-2">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1,  y: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl w-96 max-[410px]:text-base max-[410px]:w-full max-[410px]:pl-2 text-black/90">
              <h2 className='flex-wrap flex text-wrap'>Augen is the first-of-its-kind AI Wearable Company bringing general-purpose devices</h2>
              <motion.h2
                initial={{  y: 20 }}
                whileInView={{   y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[#0771E3]">to improve people’s life.</motion.h2>{' '}
            </motion.div>
            <motion.button
              initial={{  y: 30 }}
              whileInView={{   y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex hover:blur-sm  max-[410px]:pl-2 gap-x-3 mt-9 items-center">
             <button className='border border-[#0771E3] py-[1px] px-1 rounded-full'> <FaArrowRightLong color='#0771E3' size={10} /></button>
              <h2 className="text-[#0771E3] max-[410px]:text-sm">Join our community</h2>
            </motion.button>
          </motion.div>
        </div>
      </div>  
    </section>
  );
};

export default Overview;
