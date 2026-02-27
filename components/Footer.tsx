import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import Logo from "../assets/vyken_security.png";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={Logo}
                alt="Vykensecurity Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 max-w-md mb-8">
              Transforming raw data into actionable intelligence. Secure your organization with Vykensecurity's elite advisory and protection services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white/[0.03] p-8 rounded-xl border border-white/5">
            <h3 className="text-xl font-semibold mb-6">Start a Conversation</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-black/50 border border-white/10 rounded p-3 text-sm focus:outline-none focus:border-primary/50 text-white" />
                <input type="email" placeholder="Work Email" className="bg-black/50 border border-white/10 rounded p-3 text-sm focus:outline-none focus:border-primary/50 text-white" />
              </div>
              <textarea placeholder="How can we help?" rows={4} className="w-full bg-black/50 border border-white/10 rounded p-3 text-sm focus:outline-none focus:border-primary/50 text-white"></textarea>
              <button className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-200 transition-colors">
                Request Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vykensecurity. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;