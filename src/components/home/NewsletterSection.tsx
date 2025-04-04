
import { Button } from '@/components/ui/button';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-culinary-orange">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-white mb-4">
          Join Our Culinary Community
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest recipes, cooking tips, and exclusive content delivered straight to your inbox.
        </p>
        
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
          />
          <Button className="bg-white text-culinary-orange hover:bg-gray-100">
            Subscribe
          </Button>
        </div>
        <p className="text-white/70 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
