import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx'; 
import React from 'react';
const App = () => {
  return ( 
      <main className=" overflow-x-clip px-9 sm:px-4 relative">
        <Navbar />
        <Hero />
        <Clients />
        {/* <About /> */}
        {/* <div className="h-screen"></div> */}
        {/* <Projects /> */}
        {/* <WorkExperience /> */}
        {/* <Contact /> */}

        {/* <div className="absolute z-20 bg-blue-50 bottom-0">


</div> */}
        <Footer />
      </main> 
  );
};

export default App;

 