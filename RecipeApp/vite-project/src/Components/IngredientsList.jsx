import React from 'react'

const IngredientsList = (props) => {
    return (
        <div>

            <section className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🍳 Ready for a recipe?</h3>
                <p className="text-gray-600 mb-4">Generate a recipe from your list of ingredients</p>
                <button onClick={props.toggleRecipeShown}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition">
                    Get a random recipe
                </button>
            </section></div>
    )
}

export default IngredientsList