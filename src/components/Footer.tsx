
import React from 'react';
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-hotel-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-2xl">
                HotelPro<span className="text-hotel-gold">Service</span>
              </span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Профессиональное сопровождение и открытие отелей и гостиниц. 
              Помогаем создавать успешный гостиничный бизнес 
              и повышать его эффективность.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hotel-gold transition-colors" aria-label="Instagram">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-hotel-gold transition-colors" aria-label="Facebook">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-hotel-gold transition-colors" aria-label="Telegram">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="hover:text-hotel-gold transition-colors" aria-label="WhatsApp">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          
          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-hotel-gold transition-colors">Управление отелем</a></li>
              <li><a href="#services" className="text-white/80 hover:text-hotel-gold transition-colors">Бизнес-консалтинг</a></li>
              <li><a href="#services" className="text-white/80 hover:text-hotel-gold transition-colors">Обучение персонала</a></li>
              <li><a href="#services" className="text-white/80 hover:text-hotel-gold transition-colors">Обучение с сертификацией</a></li>
              <li><a href="#services" className="text-white/80 hover:text-hotel-gold transition-colors">Аудит качества</a></li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="Phone" className="text-hotel-gold mr-2 mt-1 flex-shrink-0" size={16} />
                <span>+7 953 108-99-93</span>
              </li>
              <li className="flex items-start">
                <Icon name="Mail" className="text-hotel-gold mr-2 mt-1 flex-shrink-0" size={16} />
                <span>info@hotelproservice.ru</span>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" className="text-hotel-gold mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Краснодарский край, г. Анапа</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} HotelProService. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
