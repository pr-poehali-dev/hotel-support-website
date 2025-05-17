import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-hotel-blue text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-hotel-light to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-hotel-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-hotel-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы улучшить работу вашего отеля?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Свяжитесь с нами для получения бесплатной консультации. Мы
              проанализируем текущее состояние вашего бизнеса и предложим
              оптимальные решения для повышения его эффективности.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-hotel-gold/20 p-3 mt-1">
                  <Icon name="Phone" className="text-hotel-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Телефон</h3>
                  <p className="text-white/80">+7 953 108-99-93</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-hotel-gold/20 p-3 mt-1">
                  <Icon name="Mail" className="text-hotel-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-white/80">info@hotelproservice.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-hotel-gold/20 p-3 mt-1">
                  <Icon name="MapPin" className="text-hotel-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Адрес</h3>
                  <p className="text-white/80">Краснодарский край, г. Анапа</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <Card className="border-none shadow-xl bg-white text-black">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-hotel-blue">
                  Оставьте заявку
                </h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1"
                    >
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш запрос..."
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hotel-blue hover:bg-hotel-blue/90"
                  >
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Отправляя форму, вы соглашаетесь с нашей{" "}
                    <a href="#" className="underline">
                      Политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
