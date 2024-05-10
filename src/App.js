import './App.css';
import omlette from './assets/image-omelette.jpeg';

function App() {
  return (
     <div id="recipe"> 
            <h1>Simple Omelette Recipe</h1>
            <img src={omlette} alt="Omlette"/>
            <h4>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</h4>
            <br/>
            <h3>Preparation time</h3>
            <ul> 
            <li>Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li>Cooking: 5 minutes</li>
            </ul>
            <br/>
            <h3>Ingredients</h3>
            <ul>
            <li>2-3 large eggs, </li>
            <li>Salt, </li>
            <li>Pepper, </li>
            <li>1 tablespoon of butter or oil </li>
            <p id="optionalfillings">Optional fillings: cheese, diced vegetables, cooked meats, herbs </p>
            </ul>
            <br/>
            <h3>Instructions</h3>
            <p>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture. Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil. Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface. Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate. Enjoy: Serve hot, with additional salt and pepper if needed. Nutrition The table below shows nutritional values per serving without the additional fillings. Calories 277kcal Carbs 0g Protein 20g Fat 22g</p>
        </div>
  );
}

export default App;
