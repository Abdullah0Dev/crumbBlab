import { useEffect, useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
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
  const [headerClass, setHeaderClass] = useState('header-bg'); // Default background class

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const overviewSection = document.getElementById('overview-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFadeClass('fade-out');
            setHeaderClass('header-bg white-background'); // Change background color
            setTimeout(() => {
              setLogoSrc('/assets/logo.webp'); // Change to the new logo
              setFadeClass(''); // Remove fade-out class
            }, 500);
          } else {
            setFadeClass('fade-out');
            setHeaderClass('header-bg'); // Revert background color
            setTimeout(() => {
              setLogoSrc('/assets/logo2.webp'); // Revert back to default logo
              setFadeClass(''); // Remove fade-out class
            }, 500);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '250px 0px -300px 0px',
      }
    );

    if (overviewSection) observer.observe(overviewSection);

    return () => {
      if (overviewSection) observer.unobserve(overviewSection);
    };
  }, []);

  return (
    <header className={`fixed top-10 left-0 right-0 z-50 backdrop-blur-xs`}>
      <div className={`max-w-3xl mx-auto rounded-3xl bg-opacity-50  ${headerClass} backdrop-blur-md`}>
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          <a href="/" className="text-white font-bold text-xl hover:text-white transition-colors">
            <img src={logoSrc} className={`h-5 object-contain logo-transition ${fadeClass}`} alt="logo" />
          </a>

          <button
            onClick={toggleMenu}
            className="text-white hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/cl ose.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
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
