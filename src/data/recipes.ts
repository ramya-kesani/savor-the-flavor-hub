
import { Recipe } from '@/components/recipes/RecipeCard';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Garlic Parmesan Pasta',
    description: 'A rich and creamy pasta dish with garlic and parmesan cheese that\'s perfect for a quick weeknight dinner.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    rating: 4.7,
    category: 'Dinner',
    slug: 'creamy-garlic-parmesan-pasta',
  },
  {
    id: '2',
    title: 'Blueberry Pancakes with Maple Syrup',
    description: 'Fluffy pancakes packed with fresh blueberries and drizzled with pure maple syrup.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.8,
    category: 'Breakfast',
    slug: 'blueberry-pancakes-maple-syrup',
  },
  {
    id: '3',
    title: 'Mediterranean Chickpea Salad',
    description: 'A refreshing salad with chickpeas, cucumbers, tomatoes, feta, and olives tossed in a lemon-herb dressing.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    prepTime: 15,
    cookTime: 0,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.5,
    category: 'Lunch',
    slug: 'mediterranean-chickpea-salad',
  },
  {
    id: '4',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Soft and chewy chocolate chip cookies with a perfect balance of sweet and chocolatey flavors.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'Medium',
    rating: 4.9,
    category: 'Dessert',
    slug: 'classic-chocolate-chip-cookies',
  },
  {
    id: '5',
    title: 'Spicy Thai Basil Chicken',
    description: 'A flavorful stir-fry with chicken, Thai basil, and a spicy sauce that comes together in minutes.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.6,
    category: 'Dinner',
    slug: 'spicy-thai-basil-chicken',
  },
  {
    id: '6',
    title: 'Avocado Toast with Poached Eggs',
    description: 'Creamy avocado spread on toasted sourdough and topped with perfectly poached eggs.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.5,
    category: 'Breakfast',
    slug: 'avocado-toast-poached-eggs',
  },
];

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.slice(0, 3);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipes.filter(recipe => 
    recipe.category.toLowerCase() === category.toLowerCase()
  );
};

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.slug === slug);
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowercaseQuery) || 
    recipe.description.toLowerCase().includes(lowercaseQuery)
  );
};
