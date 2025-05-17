
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  // Scroll to top button visibility
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* Scroll to top button */}
      <Button
        className={`fixed bottom-6 right-6 bg-hotel-blue hover:bg-hotel-blue/90 shadow-lg z-50 h-12 w-12 rounded-full p-0 transition-opacity duration-300 ${
          showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Прокрутить вверх"
      >
        <Icon name="ChevronUp" size={24} />
      </Button>

      {/* Animation Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const handleScroll = () => {
              const reveals = document.querySelectorAll('.reveal');
              const staggered = document.querySelectorAll('.stagger');
              
              reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                  element.classList.add('active');
                }
              });
              
              staggered.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                  element.classList.add('active');
                }
              });
            };
            
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Trigger on initial load
          });
        `
      }} />
    </div>
  );
};

export default Index;
