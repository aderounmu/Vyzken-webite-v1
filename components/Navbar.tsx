import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

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
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
          <Shield className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
          <span className="text-xl font-bold tracking-tight font-sans text-white uppercase">VYKEN<span className="text-gray-500">SECURITY</span></span>
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