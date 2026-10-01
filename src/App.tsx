import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import { ScrollToTop } from './components/ScrollToTop';
import { LegacyHashRedirect } from './components/LegacyHashRedirect';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        {/* Dynamic SEO, Canonical & Schema.org JSON-LD Handler */}
        <SEOHead />

        {/* Scroll To Top on Route Changes */}
        <ScrollToTop />

        {/* Legacy Hash Redirect Support (e.g. /#services -> /services) */}
        <LegacyHashRedirect />

        {/* Top Corporate Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/technology" element={<FutureTechPage />} />
            <Route path="/operations" element={<DeliveryCenterPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legacy & Synonym Redirects */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/future-tech" element={<Navigate to="/technology" replace />} />
            <Route path="/delivery-center" element={<Navigate to="/operations" replace />} />
            <Route path="/remote-operations" element={<Navigate to="/operations" replace />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
