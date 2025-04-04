
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-merriweather font-bold text-culinary-orange">
            Savor<span className="text-gray-800">The</span>Flavor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-culinary-orange transition-colors font-medium">
            Home
          </Link>
          <Link to="/recipes" className="text-gray-700 hover:text-culinary-orange transition-colors font-medium">
            Recipes
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-culinary-orange transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-culinary-orange transition-colors font-medium">
            Contact
          </Link>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-culinary-orange transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className="text-gray-700 hover:text-culinary-orange transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-culinary-orange transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-culinary-orange transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center px-4 py-2">
              <input 
                type="text" 
                placeholder="Search recipes..." 
                className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-culinary-orange"
              />
              <Button className="rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
