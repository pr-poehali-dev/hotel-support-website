
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-hotel-blue font-bold text-2xl">
            HotelPro<span className="text-hotel-gold">Service</span>
          </span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium">Услуги</a>
          <a href="#advantages" className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium">Преимущества</a>
          <a href="#testimonials" className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium">Отзывы</a>
          <a href="#contact" className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium">Контакты</a>
          <Button className="bg-hotel-blue hover:bg-hotel-blue/90 text-white">
            Связаться
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-hotel-blue" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#advantages" 
              className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#testimonials" 
              className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="text-hotel-dark hover:text-hotel-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="bg-hotel-blue hover:bg-hotel-blue/90 text-white w-full">
              Связаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
