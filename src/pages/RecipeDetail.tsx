
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { getRecipeBySlug } from '@/data/recipes';
import { Clock, User, ChefHat, Printer, Share2, BookmarkPlus, Star, MessageSquare } from 'lucide-react';
import NotFound from './NotFound';

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;
  
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    {
      name: 'Sarah Johnson',
      text: 'I made this last night and it was delicious! My whole family loved it.',
      date: '2 days ago'
    },
    {
      name: 'Michael Rodriguez',
      text: 'Great recipe! I added some red pepper flakes for a bit of heat and it was perfect.',
      date: '1 week ago'
    }
  ]);
  
  if (!recipe) {
    return <NotFound />;
  }
  
  const handleRating = (value: number) => {
    setRating(value);
    toast({
      title: "Rating Saved!",
      description: `You rated this recipe ${value} stars.`,
    });
  };
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        {
          name: 'You',
          text: comment,
          date: 'Just now'
        },
        ...comments
      ]);
      setComment('');
      toast({
        title: "Comment Posted!",
        description: "Thank you for sharing your thoughts!",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-culinary-orange">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/recipes" className="hover:text-culinary-orange">Recipes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{recipe.title}</span>
          </div>
          
          {/* Recipe Header */}
          <div className="mb-10">
            <Badge className="mb-4 bg-culinary-orange text-white">
              {recipe.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-merriweather text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              {recipe.description}
            </p>
            
            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Prep: {recipe.prepTime} mins</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Cook: {recipe.cookTime} mins</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Serves: {recipe.servings}</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-4 w-4 mr-2" />
                <span>Difficulty: {recipe.difficulty}</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="flex items-center">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
          
          {/* Recipe Image */}
          <div className="mb-10">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Recipe Content - For a real app, this would contain actual ingredients and instructions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
                <h2 className="text-xl font-bold font-merriweather mb-4 text-gray-800">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-culinary-orange mr-2">•</span>
                    <span>2 cups all-purpose flour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-culinary-orange mr-2">•</span>
                    <span>1 cup granulated sugar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-culinary-orange mr-2">•</span>
                    <span>2 large eggs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-culinary-orange mr-2">•</span>
                    <span>1/2 cup unsalted butter, softened</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-culinary-orange mr-2">•</span>
                    <span>1 teaspoon vanilla extract</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-culinary-orange mr-2">•</span>
                    <span>1/2 teaspoon salt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-culinary-orange mr-2">•</span>
                    <span>1 cup chocolate chips</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold font-merriweather mb-4 text-gray-800">
                Instructions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Step 1</h3>
                  <p className="text-gray-600">
                    Preheat your oven to 350°F (175°C). Line a baking sheet with parchment paper.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Step 2</h3>
                  <p className="text-gray-600">
                    In a large bowl, cream together the butter and sugar until light and fluffy. 
                    Beat in the eggs one at a time, then stir in the vanilla.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Step 3</h3>
                  <p className="text-gray-600">
                    In a separate bowl, combine flour and salt. Gradually add to the butter mixture 
                    and mix well. Fold in the chocolate chips.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Step 4</h3>
                  <p className="text-gray-600">
                    Drop rounded tablespoons of dough onto the prepared baking sheet, spacing them about 2 inches apart.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Step 5</h3>
                  <p className="text-gray-600">
                    Bake for 10-12 minutes, or until the edges are lightly golden. Allow cookies to cool on the 
                    baking sheet for a few minutes before transferring to a wire rack to cool completely.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recipe Notes */}
          <div className="bg-culinary-cream p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold font-merriweather mb-4 text-gray-800">
              Chef's Notes
            </h2>
            <p className="text-gray-600">
              For the best flavor, let the dough chill in the refrigerator for at least 30 minutes before baking. 
              This helps the flavors meld together and prevents the cookies from spreading too much during baking. 
              You can also experiment with different mix-ins like nuts, dried fruits, or different types of chocolate.
            </p>
          </div>
          
          {/* Rating Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold font-merriweather mb-4 text-gray-800 flex items-center">
              <Star className="h-5 w-5 mr-2 text-culinary-orange" />
              Rate this Recipe
            </h2>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className="text-2xl focus:outline-none"
                >
                  <Star 
                    className={`h-8 w-8 ${star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold font-merriweather mb-6 text-gray-800 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-culinary-orange" />
              Comments ({comments.length})
            </h2>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <Textarea
                placeholder="Share your experience with this recipe..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mb-3"
                rows={4}
              />
              <Button type="submit" className="bg-culinary-orange hover:bg-orange-600">
                Post Comment
              </Button>
            </form>
            
            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold text-gray-800">{comment.name}</h4>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-600">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetail;
