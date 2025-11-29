import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    type: '',
    weight: '',
    distance: '',
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const services = [
    {
      icon: 'Truck',
      title: 'Автоперевозки',
      description: 'Быстрая доставка грузов по России и СНГ',
      features: ['До 20 тонн', 'Экспресс-доставка', '24/7 мониторинг'],
    },
    {
      icon: 'Train',
      title: 'Ж/Д логистика',
      description: 'Надежная транспортировка крупных партий',
      features: ['Любые объемы', 'Контейнеры', 'Температурный режим'],
    },
    {
      icon: 'Plane',
      title: 'Авиаперевозки',
      description: 'Срочная доставка по всему миру',
      features: ['2-5 дней', 'Международная доставка', 'Таможенное оформление'],
    },
    {
      icon: 'Ship',
      title: 'Морская логистика',
      description: 'Экономичная доставка больших грузов',
      features: ['Контейнеры FCL/LCL', 'Порт-порт', 'Страхование груза'],
    },
  ];

  const calculatePrice = () => {
    const weight = parseFloat(calculatorData.weight);
    const distance = parseFloat(calculatorData.distance);
    
    if (!calculatorData.type || !weight || !distance) return;

    const rates = {
      auto: 15,
      train: 8,
      avia: 45,
      sea: 5,
    };

    const rate = rates[calculatorData.type as keyof typeof rates] || 0;
    const price = weight * distance * rate;
    setCalculatedPrice(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">ГрузЭкспресс</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-secondary hover:text-primary transition-colors font-medium">
              Услуги
            </a>
            <a href="#calculator" className="text-secondary hover:text-primary transition-colors font-medium">
              Калькулятор
            </a>
            <a href="#contacts" className="text-secondary hover:text-primary transition-colors font-medium">
              Контакты
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Заказать звонок
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/c462bc28-f7f2-45bc-a472-616c727d79b7/files/8c94523f-5626-4390-8403-af507dc6ddc5.jpg)',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
              Грузоперевозки
              <span className="block text-primary">по всему миру</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Надежная доставка грузов любого объема автомобильным, железнодорожным, авиа и морским транспортом
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Выберите оптимальный способ доставки для вашего груза
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-orange-50">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Icon name="Calculator" size={32} />
                Калькулятор стоимости
              </CardTitle>
              <CardDescription className="text-white/90 text-base">
                Рассчитайте примерную стоимость доставки вашего груза
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="type" className="text-base font-semibold">
                  Тип доставки
                </Label>
                <Select
                  value={calculatorData.type}
                  onValueChange={(value) => setCalculatorData({ ...calculatorData, type: value })}
                >
                  <SelectTrigger id="type" className="h-12">
                    <SelectValue placeholder="Выберите тип доставки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">🚚 Автоперевозки</SelectItem>
                    <SelectItem value="train">🚂 Ж/Д логистика</SelectItem>
                    <SelectItem value="avia">✈️ Авиаперевозки</SelectItem>
                    <SelectItem value="sea">🚢 Морская логистика</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight" className="text-base font-semibold">
                  Вес груза (кг)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Например: 500"
                  className="h-12"
                  value={calculatorData.weight}
                  onChange={(e) => setCalculatorData({ ...calculatorData, weight: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance" className="text-base font-semibold">
                  Расстояние (км)
                </Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Например: 1000"
                  className="h-12"
                  value={calculatorData.distance}
                  onChange={(e) => setCalculatorData({ ...calculatorData, distance: e.target.value })}
                />
              </div>

              <Button
                onClick={calculatePrice}
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
                size="lg"
              >
                Рассчитать стоимость
              </Button>

              {calculatedPrice !== null && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 animate-fade-in">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Примерная стоимость доставки:</p>
                    <p className="text-4xl font-bold text-primary">
                      {calculatedPrice.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      *Окончательная стоимость уточняется у менеджера
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">
              Мы ответим на все ваши вопросы и поможем организовать перевозку
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Телефон</p>
                    <p className="text-xl font-semibold">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-xl font-semibold">info@gruzexpress.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Адрес</p>
                    <p className="text-xl font-semibold">Москва, ул. Логистическая, 10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-secondary">Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Опишите ваш груз" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Truck" size={28} className="text-primary" />
            <span className="text-2xl font-bold">ГрузЭкспресс</span>
          </div>
          <p className="text-gray-400">© 2024 ГрузЭкспресс. Все права защищены.</p>
          <p className="text-gray-400 mt-2">Надежные грузоперевозки с 2010 года</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;