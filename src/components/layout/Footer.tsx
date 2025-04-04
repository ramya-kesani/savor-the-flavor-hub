
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-merriweather font-bold text-white">
                Savor<span className="text-culinary-orange">The</span>Flavor
              </span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Discover the joy of homemade cooking with our delicious and easy-to-follow recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-culinary-orange transition-colors">Home</Link></li>
              <li><Link to="/recipes" className="text-gray-300 hover:text-culinary-orange transition-colors">Recipes</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-culinary-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-culinary-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/recipes?category=breakfast" className="text-gray-300 hover:text-culinary-orange transition-colors">Breakfast</Link></li>
              <li><Link to="/recipes?category=lunch" className="text-gray-300 hover:text-culinary-orange transition-colors">Lunch</Link></li>
              <li><Link to="/recipes?category=dinner" className="text-gray-300 hover:text-culinary-orange transition-colors">Dinner</Link></li>
              <li><Link to="/recipes?category=dessert" className="text-gray-300 hover:text-culinary-orange transition-colors">Desserts</Link></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-culinary-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-orange transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <form className="mt-4">
              <p className="text-sm text-gray-300 mb-2">Subscribe to our newsletter:</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 text-sm bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-culinary-orange flex-grow text-white"
                />
                <button 
                  type="submit" 
                  className="bg-culinary-orange text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SavorTheFlavor Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
