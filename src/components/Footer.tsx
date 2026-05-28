import React from 'react';
import { Mail, Linkedin, Twitter, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "@/assets/vyken_security.png"
import GuardLogo from "@/assets/vyken_guard.png"

const Footer: React.FC = () => {
  const [formState , setFormState] = React.useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Inquiry request from ${formState.name} ${formState.email}`;
    const body = formState.message;
    const mailtoLink = `mailto:info@vykensecurity.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank', 'noopener,noreferrer');
  };
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
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
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Twitter size={20} />
              </a>
            </div>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@vykensecurity.com" className="hover:text-white transition-colors">info@vykensecurity.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+17176085331" className="hover:text-white transition-colors">+1 717-608-5331</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <span>5900 Balcones Drive Suite 100, Austin, TX 78731</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/vyken-guard" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                  <img 
                    src={GuardLogo} 
                    alt="Vyken Guard" 
                    className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Vyken Guard™</span>
                </Link>
              </li>
               <li>
                <a href="https://api.vykensecurity.com/ai-gap-checker/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                  <img 
                    src={Logo} 
                    alt="Vyken Security" 
                    className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span>AI Gap Checker</span>
                </a>
              </li>
              
              {/* <li>
                <span className="text-gray-600 cursor-not-allowed">Vyken Consults (Coming Soon)</span>
              </li> */}
            </ul>
          </div>

          <div className="bg-white/[0.03] p-8 rounded-xl border border-white/5">
            <h3 className="text-xl font-semibold mb-6">Start a Conversation</h3>
            <form className="space-y-4" onSubmit={submitForm}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-black/50 border border-white/10 rounded p-3 text-sm focus:outline-none focus:border-primary/50 text-white" 
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="bg-black/50 border border-white/10 rounded p-3 text-sm focus:outline-none focus:border-primary/50 text-white" 
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </div>
              <textarea 
                placeholder="How can we help?" 
                rows={4} 
                className="w-full bg-black/50 border border-white/10 rounded p-3 text-sm focus:outline-none focus:border-primary/50 text-white" 
                name="message"
                value={formState.message}
                onChange={handleInputChange}
              ></textarea>
              <button type="submit" className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-200 transition-colors">
                Request Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vykensecurity. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-condition" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
