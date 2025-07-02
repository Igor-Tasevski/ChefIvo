import { useState, useEffect } from 'react';

const ChefIvoReceipt = ({ ingredients }) => {
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "" /*authentucation key removed */
                    },
                    body: JSON.stringify({
                        model: "gpt-4.1-nano",
                        messages: [
                            {
                                role: "user",
                                content: `Create a simple recipe using the following ingredients: ${ingredients.join(", ")}. Include ingredients and instructions in a clear format.`
                            }
                        ],
                        temperature: 0.7
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    console.error("OpenAI API error:", data);
                    throw new Error(data.error?.message || "Failed to fetch recipe");
                }

                if (data.choices && data.choices[0]?.message?.content) {
                    setRecipe(data.choices[0].message.content);
                } else {
                    throw new Error("Invalid response structure from OpenAI");
                }
            } catch (err) {
                console.error(err);
                setError("Failed to fetch recipe. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [ingredients]);

    return (
        <section className="suggested-recipe-container mt-6 max-w-xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">👨‍🍳 Chef Ivo Recommends:</h2>
            {loading && <p>Loading recipe...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
                <article className="whitespace-pre-line text-gray-700">
                    {recipe}
                </article>
            )}
        </section>
    );
};

export default ChefIvoReceipt;
