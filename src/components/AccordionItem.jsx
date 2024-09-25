import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const AccordionItem = ({ title, icon, content, isAccordion, isOpen, onClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
      <div className={`b ${isAccordion ? 'border-yellow-500' : 'border-white'} text-white rounded-2xl`}>
        <button
        aria-label="Toggle Accordion"
          onClick={onClick}
          className="w-full px-5 text-left py-3 font-semibold flex justify-between items-center border border-white rounded-2xl">
          <div className="flex items-center bg-red-500 justify-center p-[5px] rounded-full border border-red-500">
            <img 
            loading="lazy"
            src={icon} alt="icon" />
          </div>

          {windowWidth >= 470 ? <p className="font-custom">{title}</p> : <p className="text-sm">{title}</p>}
          <span>{isOpen ? '-' : '+'}</span>
        </button>
        <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0 }} className="overflow-hidden py-6">
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
