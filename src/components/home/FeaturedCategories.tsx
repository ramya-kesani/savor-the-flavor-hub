
import { ChefHat, Coffee, Utensils, Cake } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Breakfast',
    icon: Coffee,
    description: 'Start your day with our delicious breakfast recipes',
    slug: 'breakfast',
    color: 'bg-culinary-yellow',
    textColor: 'text-gray-800',
  },
  {
    name: 'Lunch',
    icon: Utensils,
    description: 'Quick and satisfying lunch ideas for busy days',
    slug: 'lunch',
    color: 'bg-culinary-orange',
    textColor: 'text-white',
  },
  {
    name: 'Dinner',
    icon: ChefHat,
    description: 'Impressive dinner recipes for any occasion',
    slug: 'dinner',
    color: 'bg-culinary-peach',
    textColor: 'text-gray-800',
  },
  {
    name: 'Desserts',
    icon: Cake,
    description: 'Sweet treats to satisfy your cravings',
    slug: 'dessert',
    color: 'bg-culinary-cream',
    textColor: 'text-gray-800',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Browse by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={`/recipes?category=${category.slug}`}
              className="block group"
            >
              <div className={`${category.color} rounded-lg p-6 text-center h-full transform transition duration-300 group-hover:scale-105 shadow-sm group-hover:shadow-md`}>
                <category.icon className={`${category.textColor} h-12 w-12 mx-auto mb-4`} />
                <h3 className={`${category.textColor} text-xl font-bold mb-2 font-merriweather`}>
                  {category.name}
                </h3>
                <p className={`${category.textColor} text-sm opacity-90`}>
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
