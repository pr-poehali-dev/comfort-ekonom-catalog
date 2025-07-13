import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: "Салфетки бумажные",
      description: "Однослойные и двухслойные салфетки для ресторанов и кафе",
      specifications: [
        "Размер: 24x24 см, 33x33 см",
        "Цвет: белый, кремовый",
        "Упаковка: 250-500 шт",
        "Материал: 100% целлюлоза"
      ],
      image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
    },
    {
      id: 2,
      name: "Полотенца бумажные",
      description: "Рулонные и листовые полотенца для офисов и производства",
      specifications: [
        "Тип: V-сложение, рулонные",
        "Слойность: 1-2 слоя",
        "Длина рулона: 150-200 м",
        "Перфорация: каждые 20 см"
      ],
      image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
    },
    {
      id: 3,
      name: "Туалетная бумага",
      description: "Экономичные варианты для общественных туалетов",
      specifications: [
        "Слойность: 1-2 слоя",
        "Намотка: 150-200 м",
        "Втулка: с втулкой и без",
        "Перфорация: каждые 10 см"
      ],
      image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
    },
    {
      id: 4,
      name: "Диспенсеры",
      description: "Держатели для бумажных изделий",
      specifications: [
        "Материал: пластик, металл",
        "Тип: настенные, настольные",
        "Цвет: белый, серый, прозрачный",
        "Крепление: винты, двусторонний скотч"
      ],
      image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
    },
    {
      id: 5,
      name: "Влажные салфетки",
      description: "Антибактериальные салфетки для рук и поверхностей",
      specifications: [
        "Тип: спиртовые, безспиртовые",
        "Упаковка: 10-100 шт",
        "Аромат: без запаха, ментол",
        "Применение: руки, поверхности"
      ],
      image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
    },
    {
      id: 6,
      name: "Мешки для мусора",
      description: "Прочные пакеты для утилизации отходов",
      specifications: [
        "Объем: 30-240 л",
        "Толщина: 20-40 мкм",
        "Цвет: черный, синий, прозрачный",
        "Тип: с завязками, без завязок"
      ],
      image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Icon name="ArrowLeft" size={20} className="text-blue-600" />
                <span className="text-lg font-bold text-blue-600">Comfort «ЭКОНОМ»</span>
              </Link>
            </div>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              На главную
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Каталог продукции
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Полный ассортимент гигиенических изделий для вашего бизнеса
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Характеристики:</h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <Icon name="Dot" size={16} className="text-blue-600 mr-1 mt-1 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Запросить цену
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Нужна индивидуальная консультация?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Наши менеджеры помогут подобрать оптимальное решение для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-w-48">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="min-w-48">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;