
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Алексей Петров",
    position: "Генеральный директор отеля Черноморская Жемчужина",
    text: "Благодаря команде HotelProService мы смогли оптимизировать все процессы в нашем отеле и существенно повысить качество обслуживания. Профессиональный подход и внимание к деталям — то, что отличает эту компанию от других.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Марина Соколова",
    position: "Владелец гостевого дома Морской Бриз",
    text: "Обратились в компанию с запросом на полное сопровождение при открытии нашего гостевого дома. Результат превзошел все ожидания! Особенно ценным было обучение персонала и получение сертификатов, что повысило доверие гостей.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Дмитрий Васильев",
    position: "Управляющий комплексом апартаментов Лазурный",
    text: "Профессиональная команда, которая знает все нюансы гостиничного бизнеса. После проведения аудита и внедрения их рекомендаций, наш рейтинг на площадках бронирования вырос с 8.6 до 9.2! Однозначно рекомендую!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hotel-blue">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы гордимся сотрудничеством с лучшими отелями и гостиницами региона. 
            Вот что говорят о нас наши клиенты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-hotel-gold/10 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-hotel-gold" size={20} />
                      ))}
                    </div>
                    
                    {/* Testimonial text */}
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(part => part[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-hotel-blue">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
