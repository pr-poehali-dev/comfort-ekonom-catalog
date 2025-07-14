import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Влажные антибактериальные салфетки",
      description: "Эффективная защита от бактерий и вирусов. Подходят для офисов, кафе, медицинских учреждений.",
      category: "влажные-салфетки",
      features: ["Антибактериальный эффект", "Безопасный состав", "Удобная упаковка"]
    },
    {
      id: 2,
      title: "Рулоны вискозных салфеток",
      description: "Прочные и впитывающие салфетки для профессиональной уборки. Идеальны для HoReCa сектора.",
      category: "бумажные-полотенца",
      features: ["Высокая впитываемость", "Прочность", "Экономичность"]
    },
    {
      id: 3,
      title: "Туалетная бумага премиум",
      description: "Мягкая двухслойная туалетная бумага для комфортного использования в офисах и общественных местах.",
      category: "туалетная-бумага",
      features: ["Двухслойная", "Мягкость", "Белоснежность"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Comfort «ЭКОНОМ»</h1>
                <p className="text-sm text-gray-500">Оптовые поставки</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
                 onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>Главная</a>
              <a href="#влажные-салфетки" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
                 onClick={(e) => { e.preventDefault(); document.getElementById('влажные-салфетки')?.scrollIntoView({ behavior: 'smooth' }); }}>Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
                 onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
                 onClick={(e) => { e.preventDefault(); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }); }}>Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Профессиональные решения</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Качественные салфетки и
                <span className="text-blue-600"> бумажные изделия</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Оптовые поставки влажных антибактериальных салфеток, 
                бумажных полотенец и туалетной бумаги для вашего бизнеса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/58110354-cf0c-4814-bd97-89e74ed730fc.jpg" 
                alt="Продукция Comfort ЭКОНОМ" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">Сертифицированная продукция соответствует всем стандартам качества</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">Быстрая доставка по всей России. Оптимальные логистические решения</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сервис</h3>
              <p className="text-gray-600">Индивидуальный подход и профессиональная поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Влажные салфетки */}
      <section id="влажные-салфетки" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Влажные салфетки</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный ассортимент влажных салфеток для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Антибактериальные салфетки Универсал", specs: ["Размер: 15x20 см", "Упаковка: 100 шт", "Спирт: 70%"] },
              { name: "Антибактериальные салфетки Премиум", specs: ["Размер: 18x20 см", "Упаковка: 80 шт", "Алоэ + Витамин E"] },
              { name: "Салфетки для очистки поверхностей", specs: ["Размер: 20x25 см", "Упаковка: 50 шт", "Материал: спанлейс"] },
              { name: "Салфетки с хлоргексидином", specs: ["Размер: 15x20 см", "Упаковка: 100 шт", "Медицинское применение"] },
              { name: "Салфетки для рук с алоэ", specs: ["Размер: 15x18 см", "Упаковка: 120 шт", "Увлажняющий эффект"] },
              { name: "Салфетки антивирусные", specs: ["Размер: 18x20 см", "Упаковка: 80 шт", "Эффективность: 99,9%"] },
              { name: "Салфетки для офиса Мини", specs: ["Размер: 12x15 см", "Упаковка: 200 шт", "Компактные"] },
              { name: "Салфетки с витамином C", specs: ["Размер: 15x20 см", "Упаковка: 100 шт", "Освежающий аромат"] },
              { name: "Салфетки для клавиатуры", specs: ["Размер: 10x15 см", "Упаковка: 100 шт", "Антистатик"] },
              { name: "Салфетки с маслом чайного дерева", specs: ["Размер: 15x20 см", "Упаковка: 80 шт", "Натуральные компоненты"] },
              { name: "Салфетки гипоаллергенные", specs: ["Размер: 15x18 см", "Упаковка: 120 шт", "Без спирта"] },
              { name: "Салфетки с лимонным ароматом", specs: ["Размер: 15x20 см", "Упаковка: 100 шт", "Освежающий эффект"] }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg" 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                  <div className="space-y-2">
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Бумажные полотенца */}
      <section id="бумажные-полотенца" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Бумажные полотенца</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный ассортимент бумажных полотенец для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Полотенца рулонные Однослойные", specs: ["Длина: 200 м", "Ширина: 20 см", "Перфорация: 20 см"] },
              { name: "Полотенца рулонные Двухслойные", specs: ["Длина: 150 м", "Ширина: 22 см", "Повышенная прочность"] },
              { name: "Полотенца листовые V-сложение", specs: ["Размер: 23x21 см", "Упаковка: 250 шт", "Компактное сложение"] },
              { name: "Полотенца листовые Z-сложение", specs: ["Размер: 25x23 см", "Упаковка: 200 шт", "Легкое извлечение"] },
              { name: "Полотенца микрофольдеры", specs: ["Размер: 20x22 см", "Упаковка: 300 шт", "Микрофольдеры"] },
              { name: "Полотенца с тиснением", specs: ["Размер: 23x25 см", "Упаковка: 200 шт", "Декоративное тиснение"] },
              { name: "Полотенца для диспенсеров Мини", specs: ["Размер: 19x21 см", "Упаковка: 250 шт", "Компактный размер"] },
              { name: "Полотенца экологические", specs: ["Размер: 22x24 см", "Упаковка: 180 шт", "Переработанная целлюлоза"] },
              { name: "Полотенца супервпитывающие", specs: ["Размер: 25x25 см", "Упаковка: 150 шт", "Повышенная впитываемость"] },
              { name: "Полотенца для кухни", specs: ["Размер: 24x26 см", "Упаковка: 100 шт", "Маслостойкие"] },
              { name: "Полотенца с логотипом", specs: ["Размер: 23x21 см", "Упаковка: 200 шт", "Персонализация"] },
              { name: "Полотенца цветные", specs: ["Размер: 22x23 см", "Упаковка: 200 шт", "Различные цвета"] }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg" 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                  <div className="space-y-2">
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Туалетная бумага */}
      <section id="туалетная-бумага" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Туалетная бумага</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный ассортимент туалетной бумаги для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Туалетная бумага однослойная Эконом", specs: ["Намотка: 200 м", "Без втулки", "Перфорация: 10 см"] },
              { name: "Туалетная бумага двухслойная Комфорт", specs: ["Намотка: 150 м", "С втулкой", "Мягкая фактура"] },
              { name: "Туалетная бумага трёхслойная Премиум", specs: ["Намотка: 120 м", "С втулкой", "Максимальный комфорт"] },
              { name: "Туалетная бумага для диспенсеров Джамбо", specs: ["Намотка: 500 м", "Без втулки", "Диаметр: 19 см"] },
              { name: "Туалетная бумага для диспенсеров Мини", specs: ["Намотка: 170 м", "Без втулки", "Компактный размер"] },
              { name: "Туалетная бумага с тиснением", specs: ["Намотка: 140 м", "С втулкой", "Декоративное тиснение"] },
              { name: "Туалетная бумага цветная", specs: ["Намотка: 120 м", "С втулкой", "Различные цвета"] },
              { name: "Туалетная бумага ароматизированная", specs: ["Намотка: 130 м", "С втулкой", "Лавандовый аромат"] },
              { name: "Туалетная бумага экологическая", specs: ["Намотка: 160 м", "Без втулки", "Переработанная целлюлоза"] },
              { name: "Туалетная бумага с алоэ", specs: ["Намотка: 140 м", "С втулкой", "Увлажняющий эффект"] },
              { name: "Туалетная бумага с витамином E", specs: ["Намотка: 120 м", "С втулкой", "Питательные свойства"] },
              { name: "Туалетная бумага с логотипом", specs: ["Намотка: 150 м", "С втулкой", "Персонализация"] }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg" 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                  <div className="space-y-2">
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                Comfort «ЭКОНОМ» — надежный поставщик качественных гигиенических изделий 
                для бизнеса. Мы специализируемся на оптовых поставках салфеток, 
                бумажных полотенец и туалетной бумаги.
              </p>
              <div className="space-y-4">

                <div className="flex items-start space-x-3">
                  <Icon name="Award" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Сертификация</h3>
                    <p className="text-gray-600">Вся продукция сертифицирована и соответствует ГОСТ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">География</h3>
                    <p className="text-gray-600">Доставляем по всей России</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg" 
                alt="Офис компании Comfort ЭКОНОМ" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для оформления заказа или получения консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (964) 001-61-65</p>
                <p className="text-gray-600">+7 (800) 555-00-99</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@comfort-econom.ru</p>
                <p className="text-gray-600">comffortt@bk.ru</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">г. Махачкала, ул. Аджамтова, 5</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="https://wa.me/79640016165" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Отправить заявку
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Package" size={20} className="text-white" />
                </div>
                <span className="font-bold text-xl">Comfort «ЭКОНОМ»</span>
              </div>
              <p className="text-gray-400">
                Качественные гигиенические изделия для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/catalog#влажные-салфетки">Влажные салфетки</Link></li>
                <li><Link to="/catalog#бумажные-полотенца">Бумажные полотенца</Link></li>
                <li><Link to="/catalog#туалетная-бумага">Туалетная бумага</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">География</h3>
              <p className="text-gray-400">
                Доставляем по всей России и странам СНГ
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (964) 001-61-65</li>
                <li>comffortt@bk.ru</li>
                <li>г. Махачкала, ул. Аджамтова, 5</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Comfort «ЭКОНОМ». Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;