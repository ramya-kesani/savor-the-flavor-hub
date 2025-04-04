
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)' }}
      ></div>
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-merriweather text-white mb-4 animate-fade-in">
          Discover the Joy of <span className="text-culinary-orange">Home Cooking</span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Delicious recipes, cooking tips, and culinary inspiration to bring out the chef in you.
        </p>
        <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-culinary-orange hover:bg-orange-600 text-white">
            <Link to="/recipes">Explore Recipes</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link to="/about">Our Story</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
