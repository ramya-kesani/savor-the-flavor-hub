
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import RecipeGrid from '@/components/recipes/RecipeGrid';
import NewsletterSection from '@/components/home/NewsletterSection';
import { getFeaturedRecipes } from '@/data/recipes';

const Index = () => {
  const featuredRecipes = getFeaturedRecipes();

  return (
    <Layout>
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather mb-4 text-gray-800">
            Welcome to SavorTheFlavor Hub
          </h2>
          <p className="text-gray-600">
            Discover a world of delicious homemade recipes that are easy to follow and guaranteed to impress. 
            Whether you're a beginner or an experienced home chef, our recipes are designed to help you 
            create amazing meals that your family and friends will love.
          </p>
        </div>
        
        <RecipeGrid recipes={featuredRecipes} title="Featured Recipes" />
      </div>
      
      <FeaturedCategories />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
