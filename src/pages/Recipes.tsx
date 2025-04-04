
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RecipeGrid from '@/components/recipes/RecipeGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { recipes, getRecipesByCategory, searchRecipes } from '@/data/recipes';
import { Search } from 'lucide-react';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Breakfast', slug: 'breakfast' },
  { name: 'Lunch', slug: 'lunch' },
  { name: 'Dinner', slug: 'dinner' },
  { name: 'Dessert', slug: 'dessert' },
];

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  
  const categoryParam = searchParams.get('category') || 'all';

  useEffect(() => {
    if (categoryParam.toLowerCase() === 'all') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(getRecipesByCategory(categoryParam));
    }
  }, [categoryParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setFilteredRecipes(searchRecipes(searchQuery));
    } else {
      // If search is empty, reset to category filter
      if (categoryParam.toLowerCase() === 'all') {
        setFilteredRecipes(recipes);
      } else {
        setFilteredRecipes(getRecipesByCategory(categoryParam));
      }
    }
  };

  const handleCategoryClick = (slug: string) => {
    setSearchQuery(''); // Clear search when changing category
    setSearchParams(slug === 'all' ? {} : { category: slug });
  };

  return (
    <Layout>
      <div className="bg-culinary-cream py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-merriweather text-center text-gray-800 mb-6">
            Our Recipes
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our collection of delicious homemade recipes for every occasion, 
            from quick weeknight dinners to special celebrations.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search recipes..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="absolute right-0 top-0 h-full rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.slug}
                variant={categoryParam === category.slug ? "default" : "outline"}
                className={categoryParam === category.slug ? "bg-culinary-orange" : ""}
                onClick={() => handleCategoryClick(category.slug)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {filteredRecipes.length > 0 ? (
          <RecipeGrid recipes={filteredRecipes} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-merriweather mb-2">No recipes found</h3>
            <p className="text-gray-600">Try a different search term or category</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Recipes;
