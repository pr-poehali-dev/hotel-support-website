
import React, { useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Сотрудничество с командой HotelProService позволило нам значительно улучшить качество обслуживания и увеличить прибыль отеля. Профессиональный подход и внимание к деталям - вот что отличает эту компанию.",
    author: "Екатерина Соколова",
    position: "Генеральный менеджер, Grand Hotel",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    initials: "ЕС"
  },
  {
    quote: "После внедрения рекомендаций по оптимизации бизнес-процессов мы смогли сократить расходы на 18% и увеличить среднюю заполняемость отеля на 27%. Отличный результат!",
    author: "Алексей Петров",
    position: "Владелец сети бутик-отелей",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    initials: "АП"
  },
  {
    quote: "Специалисты компании провели глубокий аудит нашего отеля и разработали эффективную стратегию развития. Благодаря этому мы смогли переориентировать бизнес и выйти на новый уровень прибыльности.",
    author: "Марина Иванова",
    position: "Операционный директор, Riverside Hotel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    initials: "МИ"
  },
  {
    quote: "Программа обучения персонала, разработанная командой профессионалов, позволила нам значительно повысить качество сервиса. Наши гости это оценили - рейтинг отеля вырос с 8.3 до 9.2!",
    author: "Сергей Николаев",
    position: "Директор по персоналу, City Plaza Hotel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    initials: "СН"
  }
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-hotel-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hotel-blue">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы гордимся доверием, которое нам оказывают владельцы и управляющие отелей. 
            Вот что говорят о нас наши клиенты.
          </p>
        </div>

        <div className="reveal">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 px-2">
                  <Card className="h-full border-none shadow-lg">
                    <CardContent className="pt-6">
                      <div className="mb-4 text-hotel-gold">
                        <Icon name="Quote" size={32} />
                      </div>
                      <p className="text-gray-700 mb-6">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback className="bg-hotel-blue text-white">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static translate-y-0 mx-2" />
              <CarouselNext className="relative static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 text-center reveal">
          <div className="inline-flex items-center gap-2 p-4 bg-white shadow-md rounded-lg">
            <div className="flex -space-x-4">
              {testimonials.map((testimonial, index) => (
                <Avatar key={index} className="border-2 border-white">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback className="bg-hotel-blue text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-left pl-4">
              <p className="font-medium">Присоединяйтесь к нашим довольным клиентам</p>
              <p className="text-sm text-gray-500">Более 150+ отелей уже выбрали нас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
