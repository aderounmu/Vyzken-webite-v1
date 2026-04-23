import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import VykenGuardPage from './components/VykenGuardPage';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-textMain font-sans selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProductsSection />
                <ServicesSection />
              </>
            } />
            <Route path="/vyken-guard" element={<VykenGuardPage />} />
            <Route path="/terms-condition" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;