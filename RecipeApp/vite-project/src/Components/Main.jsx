import { useState } from 'react';
import ChefIvoReceipt from './ChefIvoReceipt';
import IngredientsList from './IngredientsList';

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [recipeShown, setRecipeShown] = useState(false)



    function handleSubmit(event) {
        event.preventDefault();
        const newIngredient = inputValue.trim();

        if (newIngredient && !ingredients.includes(newIngredient.toLowerCase())) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient.toLowerCase()]);
            setInputValue(""); // Clear input after adding
        }

    }



    function handleRemoveIngredient(ingredientToRemove) {
        setIngredients(prev => prev.filter(ingredient => ingredient !== ingredientToRemove));
    }


    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (



        <div className="bg-gray-100 py-6">
            <form
                onSubmit={handleSubmit} // Use onSubmit directly
                className="mt-8 flex justify-center px-4"
            >
                <div className="flex flex-wrap items-center gap-3 w-full max-w-xl">
                    <input
                        type="text"
                        className="flex-grow min-w-[200px] py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="e.g salt"
                        name="ingredient"
                        value={inputValue} // Controlled input
                        onChange={(e) => setInputValue(e.target.value)} // Update state
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        + Add ingredient
                    </button>
                </div>
            </form>

            <ul className="mt-4 text-left list-disc pl-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-blue-300 pb-1 tracking-wide inline-block px-4">
                    🧂 List of Ingredients:
                </h2>
                {ingredients.map((ingredient, index) => (
                    <li key={ingredient}>{ingredient}  {/*index   */}


                        <button
                            onClick={() => handleRemoveIngredient(ingredient)}
                            className="ml-4 text-sm text-red-500 hover:text-red-700"
                        >
                            ✖ Remove
                        </button>
                    </li>
                ))}
            </ul>



            {ingredients.length > 3 && <IngredientsList
                toggleRecipeShown={toggleRecipeShown}
            />}

            {recipeShown && <ChefIvoReceipt
                ingredients={ingredients} />}

        </div>


















    );
};

export default Main;
