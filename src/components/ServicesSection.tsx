import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: "Briefcase",
    title: "Управление отелем",
    description:
      "Комплексное управление отелем, включая операционную деятельность, маркетинг, финансы и HR.",
  },
  {
    icon: "LineChart",
    title: "Бизнес-консалтинг",
    description:
      "Аудит бизнес-процессов, разработка стратегии развития, оптимизация расходов и увеличение доходов.",
  },
  {
    icon: "Users",
    title: "Обучение персонала",
    description:
      "Тренинги для сотрудников по стандартам сервиса, продажам и работе с клиентами.",
  },
  {
    icon: "GraduationCap",
    title: "Обучение с сертификацией",
    description:
      "Профессиональные курсы для работников гостиничного бизнеса с выдачей сертификата по окончании обучения.",
    special: true,
  },
  {
    icon: "Search",
    title: "Аудит качества",
    description:
      "Проверка качества сервиса, соответствия стандартам и выявление точек роста.",
  },
  {
    icon: "Laptop",
    title: "Цифровизация",
    description:
      "Внедрение современных IT-решений для автоматизации процессов и повышения эффективности.",
  },
  {
    icon: "BookOpen",
    title: "Правовое сопровождение",
    description:
      "Юридическая поддержка, лицензирование, работа с контролирующими органами.",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const staggered = document.querySelectorAll(".stagger");

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });

      staggered.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-hotel-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hotel-blue">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Предлагаем полный спектр услуг по сопровождению и открытию отелей и
            гостиниц любого масштаба. Наши специалисты помогут вам
            оптимизировать все аспекты бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${service.special ? "ring-2 ring-hotel-gold/50" : ""}`}
            >
              <CardHeader>
                <div
                  className={`h-12 w-12 ${service.special ? "bg-hotel-gold" : "bg-hotel-blue"} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon name={service.icon} className="text-white" size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl font-semibold text-hotel-blue">
                    {service.title}
                  </CardTitle>
                  {service.special && (
                    <Badge className="bg-hotel-gold text-hotel-blue">
                      Сертификат
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Button className="bg-hotel-blue hover:bg-hotel-blue/90 text-white">
            Узнать больше об услугах
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
