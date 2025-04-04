
import { Link } from 'react-router-dom';
import { Clock, User, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  category: string;
  slug: string;
};

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { id, title, description, image, prepTime, cookTime, servings, difficulty, rating, category, slug } = recipe;

  return (
    <div className="recipe-card bg-white rounded-lg overflow-hidden shadow">
      <Link to={`/recipe/${slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-culinary-orange text-white">
            {category}
          </Badge>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="text-xs font-medium">{difficulty}</Badge>
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
        <Link to={`/recipe/${slug}`}>
          <h3 className="font-merriweather font-bold text-lg mb-2 hover:text-culinary-orange transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between text-xs text-gray-500 border-t pt-3">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{prepTime + cookTime} mins</span>
          </div>
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 mr-1" />
            <span>{servings} servings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
