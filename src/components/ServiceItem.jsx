import React from 'react';
import { motion } from 'framer-motion';

const ServiceItem = ({ yellowCircle, serviceCategory, serviceSection, data, isActive, isAccordion }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-2xl">
        <div className="flex gap-x-32">
          {!isAccordion && (
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="w-32">
              <div
                className={`text-center w-16 items-center p-1 rounded-full ${isActive ? 'bg-red-500' : 'bg-black-500'}`}>
                <p className="text-white text-sm">{yellowCircle}</p>
              </div>
              <h2 className="text-white font-light text-2xl mt-2">{serviceCategory}</h2>
            </motion.div>
          )}

          <motion.div className=" max-sm:w-full w-80 text-center">
            <h2 className="text-md break-words  text-white/60">{serviceSection}</h2>

            {/* service */}
            <ul className="text-white/30 mt-14 text-xs self-end space-y-2 cursor-default">
              {data.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 + index / 7, ease: 'easeOut' }}
                  key={index}
                  className="flex items-center group hover:text-white/90">
                  <span className="w-2 h-2 border border-white/50 rounded-full mr-10 group-hover:border-red-300"></span>
                  <span className="break-words">{item.service}</span> {/* Wrapped text */}   
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
