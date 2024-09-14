import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import React from 'react';
import Overview from './sections/Overview.jsx';
const App = () => {
  return (
    <main className=" overflow-x-clip px- sm:px-4 relative">
      <Navbar />
      <Hero />
      <Overview />
      <Clients />
      {/* <WorkExperience /> */}
      {/* <Projects /> */}
      {/* <Contact />  */}
      {/* <About /> */}
      {/* <div className="h-screen"></div> */}
      {/* <Projects /> */}
      {/* <WorkExperience /> */}
      {/* <Contact /> */}

      {/* <div className="absolute z-20 bg-blue-50 bottom-0">
1. Hero Section (Landing):
2. Services Section:
3. Portfolio/Case Studies:
4. About Us Section:5. Pricing/Packages:
6. Contact Section: *
7. Testimonials/Reviews:
8. Call to Action (Final Push): *
9. FAQ Section: *

</div> */}
      <Footer />
    </main>
  );
};

export default App;
