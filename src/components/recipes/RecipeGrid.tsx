
import RecipeCard, { Recipe } from './RecipeCard';

type RecipeGridProps = {
  recipes: Recipe[];
  title?: string;
};

const RecipeGrid = ({ recipes, title }: RecipeGridProps) => {
  return (
    <div className="py-8">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
