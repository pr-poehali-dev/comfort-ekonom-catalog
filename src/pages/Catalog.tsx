import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Catalog = () => {
  const categories = [
    {
      id: "влажные-салфетки",
      name: "Влажные салфетки",
      products: [
        {
          id: 1,
          name: "Влажные салфетки универсальные",
          description: "Мягкие влажные салфетки для различных поверхностей",
          specifications: [
            "Размер: 15x20 см",
            "Упаковка: 50-100 шт",
            "Материал: спанлейс",
            "Пропитка: гипоаллергенная"
          ],
          image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
        },
        {
          id: 2,
          name: "Влажные салфетки антибактериальные",
          description: "Салфетки с антибактериальным эффектом",
          specifications: [
            "Размер: 15x20 см",
            "Упаковка: 50-100 шт",
            "Содержание спирта: 70%",
            "Эффективность: 99,9%"
          ],
          image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
        }
      ]
    },
    {
      id: "бумажные-полотенца",
      name: "Бумажные полотенца",
      products: [
        {
          id: 3,
          name: "Полотенца бумажные рулонные",
          description: "Экономичные рулонные полотенца для диспенсеров",
          specifications: [
            "Длина рулона: 150-200 м",
            "Ширина: 20-25 см",
            "Слойность: 1-2 слоя",
            "Перфорация: каждые 20 см"
          ],
          image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
        },
        {
          id: 4,
          name: "Полотенца бумажные листовые",
          description: "Листовые полотенца V-сложения",
          specifications: [
            "Размер: 23x21 см",
            "Упаковка: 200-250 шт",
            "Тип: V-сложение",
            "Цвет: белый, натуральный"
          ],
          image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
        }
      ]
    },
    {
      id: "туалетная-бумага",
      name: "Туалетная бумага",
      products: [
        {
          id: 5,
          name: "Туалетная бумага однослойная",
          description: "Экономичный вариант для общественных мест",
          specifications: [
            "Слойность: 1 слой",
            "Намотка: 200 м",
            "Втулка: без втулки",
            "Перфорация: каждые 10 см"
          ],
          image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
        },
        {
          id: 6,
          name: "Туалетная бумага двухслойная",
          description: "Комфортная двухслойная туалетная бумага",
          specifications: [
            "Слойность: 2 слоя",
            "Намотка: 150 м",
            "Втулка: с втулкой",
            "Материал: 100% целлюлоза"
          ],
          image: "/img/3a89aa20-0c86-4e7a-84e7-d82bc4da00a1.jpg"
        }
      ]
    }
  ];

  useEffect(() => {
    // Скролл к нужной категории при загрузке страницы
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Package" size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl">Comfort «ЭКОНОМ»</span>
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <Icon name="ArrowLeft" size={20} className="mr-2 inline" />
              Назад к главной
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Каталог продукции
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный ассортимент гигиенических изделий для вашего бизнеса
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.id} id={category.id} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
              {category.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Характеристики:</h4>
                      <ul className="space-y-1">
                        {product.specifications.map((spec, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;