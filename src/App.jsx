import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SpotlightProject from './components/SpotlightProject';
import ProductsCatalogue from './components/ProductsCatalogue';
import CaseStudies from './components/CaseStudies';
import OriginalCases from './components/OriginalCases';
import ExperienceFooter from './components/ExperienceFooter';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-canvas-dark text-white font-sans">
      {/* Band 0+1: Sticky Nav */}
      <Navigation />
      {/* Band 2+3: Hero with profile photo + Metrics strip */}
      <Hero />
      {/* Band 5: Spotlight — JobSuite Tracker (dark canvas) */}
      <SpotlightProject />
      {/* Band 6: Products Catalogue (light canvas) */}
      <ProductsCatalogue />
      {/* Band 7: Original Product Cases - 0-1 case studies (soft canvas) */}
      <OriginalCases />
      {/* Band 8: Case Studies & Teardowns (light canvas) */}
      <CaseStudies />
      {/* Band 9+10: Experience + Contact CTA + Footer (dark canvas) */}
      <ExperienceFooter />
    </div>
  );
}

export default App;
