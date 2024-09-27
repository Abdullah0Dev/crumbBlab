import { useEffect, useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li
        onClick={() => {
          window.location.href = item.href; // Make the whole li clickable
          onClick();
        }}
        key={item.id}
        className="nav-li">
        <a href={item.href} className="nav-li_a">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/assets/logo2.webp'); // Default logo
  const [fadeClass, setFadeClass] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const overviewSection = document.getElementById('overview-section');

    // Determine the device width to set the correct rootMargin

    // Determine the device height to set the correct rootMargin
    const deviceHeight = window.innerHeight;
    let rootMarginTop;
    let rootMarginBottom;

    // Set rootMargin based on specified height range
    if (deviceHeight <= 550) {
      rootMarginTop = `${-deviceHeight * 0.285}px`;
      rootMarginBottom = '360px'; // `${deviceHeight * 0.6}px`;
    } else if (deviceHeight <= 620) {
      rootMarginTop = `${-deviceHeight * 0.13}px`;
      rootMarginBottom = '370px'; // `${deviceHeight * 0.6}px`;
    } else if (deviceHeight <= 700) {
      rootMarginTop = `${-deviceHeight * 0.288}px`;
      rootMarginBottom = '360px';
    } else if (deviceHeight <= 750) {
      rootMarginTop = `${-deviceHeight * 0.28}px`;
      rootMarginBottom = '380px';
    } else if (deviceHeight <= 790) {
      rootMarginTop = `${-deviceHeight * 0.285}px`;
      rootMarginBottom = '340px';
    } else if (deviceHeight <= 850) {
      rootMarginTop = `${-deviceHeight * 0.385}px`;
      rootMarginBottom = '370px';
    } else if (deviceHeight <= 900) {
      rootMarginTop = `${-deviceHeight * 0.385}px`;
      rootMarginBottom = '400px';
    } else if (deviceHeight <= 950) {
      rootMarginTop = `${-deviceHeight * 0.395}px`;
      rootMarginBottom = '400px';
    } else if (deviceHeight <= 1000) {
      rootMarginTop = `${-deviceHeight * 0.285}px`;
      rootMarginBottom = '340px';
    } else if (deviceHeight <= 1080) {
      rootMarginTop = `${-deviceHeight * 0.395}px`;
      rootMarginBottom = '420px';
    } else if (deviceHeight <= 1200) {
      rootMarginTop = `${-deviceHeight * 0.41}px`;
      rootMarginBottom = '490px';
    } else if (deviceHeight <= 1400) {
      rootMarginTop = `${-deviceHeight * 0.42}px`;
      rootMarginBottom = '590px';
    } else {
      rootMarginTop = `${-deviceHeight * 0.44}px`;
      rootMarginBottom = '600px';
    }

    // const deviceWidth = window.innerWidth;
    // let rootMarginTop;
    // let rootMarginBottom;

    // Set rootMargin based on specified width range
    // if (deviceWidth < 395) {
    //   rootMarginTop = '-150px'; // For widths less than 395px
    //   rootMarginBottom = '390px';
    // } else if (deviceWidth <= 450) {
    //   rootMarginTop = '-220px'; // For widths between 395px and 450px
    //   rootMarginBottom = '360px';
    // }
    //  else if (deviceWidth <= 1000) {
    //   rootMarginTop = '-320px'; // For widths above 450px
    //   rootMarginBottom = '390px';
    // }

    // else {
    //   rootMarginTop = '-380px'; // For widths above 450px
    //   rootMarginBottom = '400px';
    // }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting); // Log intersection status

          if (entry.isIntersecting) {
            setFadeClass('fade-out');
            setTimeout(() => {
              setLogoSrc('assets/logo.png'); // Change to the new logo
              setFadeClass(''); // Remove fade-out class
            }, 500);
          } else {
            setFadeClass('fade-out');
            setTimeout(() => {
              setLogoSrc('assets/logo2.webp'); // Revert back to default logo
              setFadeClass(''); // Remove fade-out class
            }, 500);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: `${rootMarginBottom} 0px ${rootMarginTop} 0px`, // Dynamic rootMargin based on device width
      },
    );

    if (overviewSection) observer.observe(overviewSection);

    return () => {
      if (overviewSection) observer.unobserve(overviewSection);
    };
  }, []);

  return (
    <header className="fixed top-10 left-0 right-0 z-50 backdrop-blur-xs">
      <div className="max-w-3xl mx-auto bg-[#ffffff1a] rounded-3xl bg-opacity-50 backdrop-blur-md">
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          <a href="/" className="text-white font-bold text-xl hover:text-white transition-colors">
            <img
              src={logoSrc}
              className={`object-contain logo-transition ${fadeClass}`}
              alt="logo"
              width="150" // Explicit width
              height="35" // Explicit height
            />
          </a>

          <button
            onClick={toggleMenu}
            className="text-white hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle menu"
              width="24" // Explicit width
              height="24" // Explicit height
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
