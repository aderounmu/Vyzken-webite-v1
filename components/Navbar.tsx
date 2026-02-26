import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
          <Logo className="text-white" size={44} />
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-bold tracking-tighter text-white lowercase">vyken</span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-white uppercase self-end -mt-0.5 pr-0.5">security</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('products')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Products</button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Process</button>
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
          <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 py-2">Services</button>
          <button onClick={() => scrollToSection('process')} className="text-left text-gray-300 py-2">Process</button>
          <button onClick={() => scrollToSection('contact')} className="text-left text-primary font-bold py-2">Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;