import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '@/assets/vyken_security.png';
import { useScrollToSection } from '@/utils';

const Navbar: React.FC = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToSection = (id: string) => {
  //   setMobileMenuOpen(false);
  //   if (location.pathname !== '/') {
  //     navigate('/', { state: { scrollTo: id } });
  //     return;
  //   }
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // useEffect(() => {
  //   if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
  //     const id = (location.state as any).scrollTo;
  //     setTimeout(() => {
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }, 100);
  //     // Clear state
  //     window.history.replaceState({}, document.title);
  //   }
  // }, [location]);

  const {
    location,
    scrollToSection, 
    isScrolled, 
    setIsScrolled
  } = useScrollToSection({
    setMobileMenuOpen
  })

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer group" onClick={() => setMobileMenuOpen(false)}>
          <img 
            src={Logo}
            alt="Vykensecurity Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('products')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Products</button>
          <Link to="/vyken-guard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Vyken Guard™</Link>
          <a href="https://api.vykensecurity.com/ai-gap-checker/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">AI Gap Checker</a>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('contact')} className="px-5 py-2 text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors rounded-sm">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <button onClick={() => scrollToSection('products')} className="text-left text-gray-300 py-2">Products</button>
          <Link to="/vyken-guard" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-300 py-2">Vyken Guard™</Link>
          <a href="https://api.vykensecurity.com/ai-gap-checker/" target="_blank" rel="noopener noreferrer" className="text-left text-gray-300 py-2">AI Gap Checker</a>
          <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 py-2">Services</button>
          <button onClick={() => scrollToSection('contact')} className="text-left text-primary font-bold py-2">Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;