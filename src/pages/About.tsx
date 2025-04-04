
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-merriweather text-center mb-8 text-gray-800">
            About SavorTheFlavor Hub
          </h1>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Our Story" 
              className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
            />
            
            <h2 className="text-2xl font-bold font-merriweather mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              SavorTheFlavor Hub was born from a passion for home cooking and a desire to share delicious, 
              accessible recipes with food lovers everywhere. What started as a small personal blog has grown 
              into a vibrant community of home cooks sharing their love for food.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to inspire people to cook at home more often by providing easy-to-follow recipes, 
              cooking tips, and culinary inspiration. We believe that cooking is not just about feeding ourselves 
              but also about creativity, tradition, and bringing people together.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-merriweather mb-4 text-gray-800">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Emily Chen" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center mb-2">Emily Chen</h3>
                <p className="text-culinary-orange text-center mb-3">Founder & Head Chef</p>
                <p className="text-gray-600 text-center">
                  Emily has been cooking since she was a child and has a passion for creating simple yet 
                  delicious recipes that anyone can make at home.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Michael Rodriguez" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center mb-2">Michael Rodriguez</h3>
                <p className="text-culinary-orange text-center mb-3">Food Photographer</p>
                <p className="text-gray-600 text-center">
                  Michael brings our recipes to life through his stunning photography, capturing the beauty 
                  and appeal of each dish.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold font-merriweather mb-4 text-gray-800">
              Join Our Culinary Journey
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for new recipe ideas, cooking tips, and food stories. 
              If you'd like to contribute or simply say hello, we'd love to hear from you!
            </p>
            <Button asChild className="bg-culinary-orange hover:bg-orange-600">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
