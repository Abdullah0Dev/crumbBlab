import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';

const Overview = () => {
  return (
    <section
      id="overview-section"
      className="w-full max-sm:px-5 h-screen bg-[#EFEFEF] flex items-center justify-center">
      <div className="max-w-3xl max-md:item-center  py-24 items-center">
        <div className="flex self-center max-xl:flex-col max-xl:gap-y-32 gap-x-44">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="overview flex flex-col items-center  ">
            <h2 className="text-black/30 text-xs font-light">Overview</h2>
            <h2 className="text-black/80 font-bold text-xl flex ">
              What’s 
              <span className="text-red-500 ml-1"> CrumbLab </span>{' '}
            </h2>
          </motion.div>
          <motion.div className="overview flex flex-col items-start mt-2 gap-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-xl w-96 max-[410px]:text-base max-[410px]:w-full max-[410px]:pl-2 text-black/90">
              <h2 className="flex-wrap  text-wrap">
                Stop settling for mediocre results. At <span className="text-red-500">CrumbLab</span>, we don’t just
                build websites and designs—we craft digital powerhouses that drive your business forward. When you work
                with us, you're not getting just another service provider—you’re partnering with a team that’s obsessed
                with your success. <br />
                <br /> We make it easy for you to dominate your space with bold, impactful solutions that deliver real
                results. Whether you're a small business or a giant in the making, we’ll take your brand from where it
                is to where it deserves to be—at the top. Solutions that deliver real results. Explore our portfolio to see what we’ve accomplished for our clients. <a href='/portfolio' className="text-red-500">Explore our portfolio</a>
              </h2>
            </motion.div>
            <motion.a
              href="#services"
              initial={{ y: 30, opacity: 0, x: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex group max-[410px]:pl-2 gap-x-3 mt-20 items-center"
              whileHover={{ scale: 1.05, x: 30 }} // Optional scale effect on hover
            >
              <motion.button className="border  border-red-500 py-[1px] px-1 rounded-full">
                <motion.div
                  whileHover={{ x: 5 }} // Move the arrow to the right on hover of the parent
                  transition={{ duration: 0.3 }}>
                  <FaArrowRightLong
                    color="#ef4444"
                    className="group-hover:text-red-500"
                    size={10}
                    style={{ transition: 'color 0.3s' }} // Smooth color transition
                  />
                </motion.div>
              </motion.button>
              <h2 className="  text-red-500 max-[410px]:text-sm">Ready to grow faster? Let’s get started</h2>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
