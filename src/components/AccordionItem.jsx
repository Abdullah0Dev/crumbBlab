import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AccordionItem = ({ title, icon, content, isAccordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
      <div
        className={`border-b ${isAccordion ? 'bg-yellow-500' : ' bg-black-500'} text-white rounded-2xl border-gray-300`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 text-left py-3 font-semibold flex justify-between items-center">
          <div className="flex items-center justify-center p-[5px] rounded-full bg-yellow-500">
            <img src={icon} alt="icon" />
          </div>

          {/* Display title only when width is not less than 470px */}
          {windowWidth >= 470 && <p>{title}</p>}
          
          <span>{isOpen ? '-' : '+'}</span>
        </button>
        <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0 }} className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="py-2">
            {content}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccordionItem;
