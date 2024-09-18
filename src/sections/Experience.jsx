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
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.75,
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
    <section className="c-space my-20">
      <h3 className="head-text">Our Services</h3>
      <div className={`  ${isAccordion ? 'w-full mt-12' : ' grid pt-16 grid-cols-2'} `}>
        {/* Left side */}
        <div className={`w-full ${isAccordion ? ' ' : 'w-1/3'}`}>
          <div className={`flex flex-col gap-y-5 ${isAccordion ? '' : 'sticky top-1/3'}`}>
            {!isAccordion && (
              <h3 className="text-white text-sm">
                Development Of
                <span className="text-yellow-500">
                  <br /> B¹ Eye
                </span>
              </h3>
            )}
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
                      className={`flex gap-x-2 items-center ${activeService === item.text ? 'text-yellow-500' : 'text-white/50'}`}
                      onClick={() => handleDevClick(item.text)}>
                      <div
                        className={`flex items-center justify-center p-[5px] rounded-full ${activeService === item.text ? 'bg-yellow-500' : 'bg-black-500'}`}>
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
    text: 'IOTC',
    serviceCategory: 'IoT Connectivity',
  },
  {
    icon: 'https://a.storyblok.com/f/274239/16x16/d1c1ab6802/apa.svg',
    text: 'APA',
    serviceCategory: 'Autonomous AI-powered Personal Agent',
  },
  {
    icon: 'https://a.storyblok.com/f/274239/16x16/18440b1b86/hf.svg',
    text: 'HF',
    serviceCategory: 'Health Functions',
  },
  {
    icon: 'https://a.storyblok.com/f/274239/17x17/1839770985/mrc.svg',
    text: 'MRC',
    serviceCategory: 'Mixed Reality Capabilities',
  },
];

const serviceData = [
  {
    yellowCircle: 'IOTC',
    serviceCategory: 'IoT Connectivity',
    serviceSection: 'Research & Development STAGE',
    data: [
      { service: 'Communication Protocols' },
      { service: 'Network Topologies' },
      { service: 'Wearable Compatibility' },
      { service: 'Low Power Connectivity' },
      { service: 'Real-Time Communication' },
      { service: 'Device Management' },
      { service: 'Data Analytics and Processing' },
      { service: 'Edge Computing' },
      { service: 'Device-To-Device Communication Protocols' },
      { service: 'Integration with Cloud Platforms' },
      { service: 'Data Security' },
      { service: 'Sustainable Design' },
      { service: 'Ethics & Safety' },
    ],
  },
  {
    yellowCircle: 'APA',
    serviceCategory: 'Autonomous AI-powered Personal Agent',
    serviceSection: 'Research & Development STAGE',
    data: [
      { service: 'AI-Based' },
      { service: 'Advanced Algorithms' },
      { service: 'Continuous Learning' },
      { service: 'Decision-Making Autonomy' },
      { service: 'Reasoning & Problem Solving' },
      { service: 'Multidisciplinary Interaction' },
      { service: 'Integration & Interoperability' },
      { service: 'Context-Awareness' },
      { service: 'Adaptability & Flexibility' },
      { service: 'Human-AI Collaboration' },
      { service: 'Emotional Intelligence' },
      { service: 'Explainability' },
      { service: 'Transparency' },
      { service: 'Data Privacy' },
      { service: 'Resilience to Adversarial Attacks' },
      { service: 'Scalability' },
      { service: 'Customizability' },
      { service: 'Self-Assessment' },
      { service: 'Robustness & Reliability' },
      { service: 'Sustainability' },
      { service: 'Ethics & Safety' },
    ],
  },
  {
    yellowCircle: 'HF',
    serviceCategory: 'Health Functions',
    serviceSection: 'Research & Development STAGE',
    data: [
      { service: 'High-Precision Sensors' },
      { service: 'Health & Wellness Monitoring' },
      { service: 'Enhanced Data Processing' },
      { service: 'Personalized Health Recommendations' },
      { service: 'Stress & Mental Health Monitoring' },
      { service: 'Multifaceted Activity Recognition' },
      { service: 'Targeted Environmental Sensing' },
      { service: 'Gesture-Based Control for Accessibility' },
      { service: 'Voice Command Integration' },
      { service: 'Haptic Feedback for Notifications' },
      { service: 'Emergency Response Features' },
      { service: 'Healthcare System Integration' },
      { service: 'Biocompatibility & Safety' },
      { service: 'Robust Data Privacy Frameworks' },
      { service: 'Ethics & Safety' },
    ],
  },
  {
    yellowCircle: 'MRC',
    serviceCategory: 'Mixed Reality Capabilities',
    serviceSection: 'Research & Development STAGE',
    data: [
      { service: 'Vision Enhancement' },
      { service: 'Biomimetic Optics' },
      { service: 'AR & VR Integration' },
      { service: 'Enhanced Connectivity' },
      { service: 'On-Eye Rendering & Display' },
      { service: 'Rich Image Overlays' },
      { service: 'Contextual Visual Overlays' },
      { service: 'Intuitive Controls' },
      { service: 'Intuitive Eye-Controlled Interaction' },
      { service: 'Environmental Interaction Detection' },
      { service: 'Multisensory & Actuation Technologies' },
      { service: 'Haptic & Sensory Feedback' },
      { service: 'Spatial Audio Integration' },
      { service: 'Multi-Modal Biometric Integration' },
      { service: 'Collaborative Mixed Reality Streams' },
      { service: 'Biometric Recognition' },
      { service: 'Enhanced User Experience' },
      { service: 'Ethics & Safety' },
    ],
  },
];
