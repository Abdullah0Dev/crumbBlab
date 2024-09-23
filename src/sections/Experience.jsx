import React, { useState, useEffect, useRef } from 'react';
import ServiceItem from '../components/ServiceItem';
import AccordionItem from '../components/AccordionItem';

const Experience = () => {
  const [activeService, setActiveService] = useState('IOTC');
  const [manualOverride, setManualOverride] = useState(false);
  const [isAccordion, setIsAccordion] = useState(false);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20px 0px -80px 0px', // Adjust margin for more accurate detection
      threshold: 0.6, // Reduced threshold for earlier detection
    };


    const observerCallback = (entries) => {
      if (manualOverride) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveService(entry.target.getAttribute('data-category'));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [manualOverride]);

  const handleDevClick = (category) => {
    const serviceElement = serviceRefs.current.find((ref) => ref.getAttribute('data-category') === category);

    setActiveService(category);
    setManualOverride(true);

    if (serviceElement) {
      serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => {
        setManualOverride(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 833) {
        console.log(window.innerWidth);

        setIsAccordion(true);
      } else {
        setIsAccordion(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="c-space  my-20 " id="services">
      <h3 className="head-text">Our Services</h3>
      <div className={`  ${isAccordion ? 'w-full mt-12' : ' grid pt-16 grid-cols-2'} `}>
        {/* Left side */}
        <div className={`w-full ${isAccordion ? ' ' : 'w-1/3'}`}>
          <div className={`flex flex-col gap-y-5 ${isAccordion ? '' : 'sticky top-1/3'}`}>
            <div className={`flex flex-col gap-y-7 ${isAccordion ? 'w-full' : 'flex-col'}`}>
              {devData.map((item, index) => (
                <div key={index}>
                  {isAccordion ? (
                    <AccordionItem
                      title={item.serviceCategory}
                      icon={item.icon}
                      content={
                        <ServiceItem
                          data={serviceData[index].data}
                          serviceCategory={serviceData[index].serviceCategory}
                          serviceSection={serviceData[index].serviceSection}
                          yellowCircle={serviceData[index].yellowCircle}
                          isActive={activeService === serviceData[index].yellowCircle}
                          isAccordion={isAccordion}
                        />
                      }
                    />
                  ) : (
                    <button
                      className={`flex gap-x-2 items-center ${activeService === item.text ? 'text-red-500' : 'text-white/50'}`}
                      onClick={() => handleDevClick(item.text)}>
                      <div
                        className={`flex items-center justify-center p-[5px] rounded-full ${activeService === item.text ? 'bg-red-500' : 'bg-black-500'}`}>
                        <img src={item.icon} alt={item.text} />
                      </div>
                      <h2 className="text-sm">{item.text}</h2>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        {!isAccordion && (
          <div className="w-2/3 ">
            <div className="space-y-12">
              {serviceData.map((item, index) => (
                <div key={index} data-category={item.yellowCircle} ref={(el) => (serviceRefs.current[index] = el)}>
                  <ServiceItem
                    data={item.data}
                    serviceCategory={item.serviceCategory}
                    serviceSection={item.serviceSection}
                    yellowCircle={item.yellowCircle}
                    isActive={activeService === item.yellowCircle}
                    isAccordion={isAccordion}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;

const devData = [
  {
    icon: 'https://a.storyblok.com/f/274239/16x16/d228b12923/iotc.svg',
    text: 'BAI',
    serviceCategory: 'Branding & identity',
  },
  {
    icon: 'https://a.storyblok.com/f/274239/16x16/d1c1ab6802/apa.svg',
    text: 'DP',
    serviceCategory: 'Digital Presence',
  },
  {
    icon: 'https://a.storyblok.com/f/274239/17x17/1839770985/mrc.svg',
    text: 'WAO',
    serviceCategory: 'Website And Other',
  },
];

const serviceData = [
  {
    yellowCircle: 'BAI',
    serviceCategory: 'Branding & identity',
    serviceSection: 'Where your brand comes to life.',
      data: [
      { service: 'Logo Design' },
      { service: 'Product Design' },
      { service: 'Animated Logo' },
      { service: 'Brand Guidelines' },
      { service: 'Business Cards' }, 
    
    ] 
    
  },
  {
    yellowCircle: 'DP',
    serviceCategory: 'Digital Presence',
    serviceSection: 'Making your mark online.',
    data: [
    
      { service: 'Social Media Banners' },
      { service: 'Product Posts editing' },
      { service: 'YouTube/Video Thumbnails' },
      { service: 'Backlinks' },
      { service: 'Social Media Posts Captions' },
      { service: 'Social Media Posts Editing' },
      { service: 'Social Media Templates' },
      { service: 'Email Copywriting' },
      { service: 'Email Template/designing' },
    ],
  },
  {
    yellowCircle: 'WAO',
    serviceCategory: 'Website And Other',
    serviceSection: 'Building digital experiences that matter.',
    data: [ 
      { service: 'Website Design/redesign' },
      { service: '3D Product Model' },
      { service: 'SEO Onsite' },
      { service: 'Page Speed Optimization' },
      { service: 'Schema Markup' },
      { service: 'Video' },
      { service: 'Video Editing' },
      { service: 'Marketing Video' }
    ],
  },
];
