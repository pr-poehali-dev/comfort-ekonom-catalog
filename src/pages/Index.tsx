import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Влажные антибактериальные салфетки",
      description: "Эффективная защита от бактерий и вирусов. Подходят для офисов, кафе, медицинских учреждений.",
      category: "Влажные салфетки",
      features: ["Антибактериальный эффект", "Безопасный состав", "Удобная упаковка"]
    },
    {
      id: 2,
      title: "Рулоны вискозных салфеток",
      description: "Прочные и впитывающие салфетки для профессиональной уборки. Идеальны для HoReCa сектора.",
      category: "Бумажные полотенца",
      features: ["Высокая впитываемость", "Прочность", "Экономичность"]
    },
    {
      id: 3,
      title: "Туалетная бумага премиум",
      description: "Мягкая двухслойная туалетная бумага для комфортного использования в офисах и общественных местах.",
      category: "Туалетная бумага",
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
              <a href="#catalog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
                 onClick={(e) => { e.preventDefault(); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }); }}>Каталог</a>
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

      {/* Catalog */}
      <section id="catalog" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Каталог продукции</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент гигиенических изделий для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <Icon name="Package2" size={20} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Особенности:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Посмотреть ассортимент
                    </Button>
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
                  <Icon name="Calendar" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Опыт работы</h3>
                    <p className="text-gray-600">Более 10 лет на рынке гигиенических изделий</p>
                  </div>
                </div>
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
                    <p className="text-gray-600">Доставляем по всей России и странам СНГ</p>
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
                <p className="text-gray-600">+7 (495) 123-45-67</p>
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
                <p className="text-gray-600">sales@comfort-econom.ru</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">г. Москва, ул. Промышленная, 15</p>
                <p className="text-gray-600">БЦ "Альфа", офис 301</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Отправить заявку
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
                <li><a href="#" className="hover:text-white">Влажные салфетки</a></li>
                <li><a href="#" className="hover:text-white">Бумажные полотенца</a></li>
                <li><a href="#" className="hover:text-white">Туалетная бумага</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@comfort-econom.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
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