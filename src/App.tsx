import { Suspense, lazy } from 'react';
import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Hero } from '@/sections/Hero';
import { usePageLoad } from '@/hooks/usePageLoad';

const About = lazy(() => import('@/sections/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('@/sections/Services').then((m) => ({ default: m.Services })));
const Portfolio = lazy(() => import('@/sections/Portfolio').then((m) => ({ default: m.Portfolio })));
const Testimonials = lazy(() => import('@/sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const CTA = lazy(() => import('@/sections/CTA').then((m) => ({ default: m.CTA })));
const Footer = lazy(() => import('@/sections/Footer').then((m) => ({ default: m.Footer })));

function App() {
  const { showOverlay } = usePageLoad(500);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Load Overlay */}
      <PageOverlay isVisible={showOverlay} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <CTA />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
