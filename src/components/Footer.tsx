
import React from 'react';
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-hotel-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              HotelPro<span className="text-hotel-gold">Service</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Профессиональное сопровождение отелей и гостиниц для повышения эффективности вашего бизнеса.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-hotel-gold transition-colors">
                <Icon name="Facebook" size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-hotel-gold transition-colors">
                <Icon name="Instagram" size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-hotel-gold transition-colors">
                <Icon name="Linkedin" size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white hover:text-hotel-gold transition-colors">
                <Icon name="Telegram" size={20} />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Управление отелем
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Бизнес-консалтинг
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Обучение персонала
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Аудит качества
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Цифровизация
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Команда
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="text-hotel-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  г. Москва, ул. Гостиничная, 123, офис 45
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="text-hotel-gold flex-shrink-0" size={18} />
                <span className="text-gray-400">+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="text-hotel-gold flex-shrink-0" size={18} />
                <span className="text-gray-400">info@hotelproservice.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" className="text-hotel-gold flex-shrink-0" size={18} />
                <span className="text-gray-400">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HotelProService. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
