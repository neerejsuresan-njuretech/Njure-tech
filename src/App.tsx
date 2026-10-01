import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FutureTechPage } from './pages/FutureTechPage';
import { DeliveryCenterPage } from './pages/DeliveryCenterPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { SEOHead } from './components/SEOHead';

export default function App() {
  const getInitialPage = (): string => {
    const hash = window.location.hash.replace('#', '').trim();
    const validPages = ['home', 'about', 'services', 'future-tech', 'delivery-center', 'careers', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = ['home', 'about', 'services', 'future-tech', 'delivery-center', 'careers', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Dynamic SEO & OpenGraph Meta Handler */}
      <SEOHead page={currentPage} />

      {/* Top Corporate Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Multi-Page Container */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'future-tech' && <FutureTechPage onNavigate={handleNavigate} />}
        {currentPage === 'delivery-center' && <DeliveryCenterPage onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <CareersPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
