
import React, { useEffect } from 'react';
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Award",
    title: "Опыт работы более 10 лет",
    description: "Мы работаем с отелями любого масштаба и имеем богатый опыт в гостиничном бизнесе."
  },
  {
    icon: "Users",
    title: "Команда профессионалов",
    description: "Наша команда состоит из специалистов с международным опытом работы в сфере гостеприимства."
  },
  {
    icon: "TrendingUp",
    title: "Увеличение прибыли",
    description: "Наши клиенты отмечают рост прибыли в среднем на 25-30% после сотрудничества с нами."
  },
  {
    icon: "Star",
    title: "Индивидуальный подход",
    description: "Мы разрабатываем индивидуальные решения для каждого отеля, учитывая его особенности."
  }
];

const AdvantagesSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="advantages" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-br from-hotel-blue/5 to-hotel-gold/10 rounded-bl-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hotel-blue">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем комплексный подход к сопровождению отелей, 
            основанный на многолетнем опыте и глубоком понимании индустрии гостеприимства.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="h-16 w-16 bg-hotel-blue/10 rounded-full flex items-center justify-center mb-4">
                <Icon name={advantage.icon} className="text-hotel-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-hotel-blue">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-hotel-blue/5 rounded-xl border border-hotel-blue/10 reveal">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-hotel-blue">
                Результаты нашей работы
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-hotel-gold mt-1 flex-shrink-0" size={20} />
                  <span>Увеличение среднего чека на 15-20%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-hotel-gold mt-1 flex-shrink-0" size={20} />
                  <span>Рост заполняемости номеров на 25-30%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-hotel-gold mt-1 flex-shrink-0" size={20} />
                  <span>Снижение операционных расходов на 10-15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-hotel-gold mt-1 flex-shrink-0" size={20} />
                  <span>Повышение качества сервиса и рейтингов отеля</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 md:border-l md:border-hotel-blue/20 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-hotel-blue">
                Наш подход
              </h3>
              <p className="text-gray-600 mb-4">
                Мы анализируем все аспекты работы отеля, определяем точки роста и разрабатываем 
                индивидуальный план улучшения бизнес-показателей. Наша команда работает в тесном 
                сотрудничестве с персоналом отеля для достижения максимальных результатов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
