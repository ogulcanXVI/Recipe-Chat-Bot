import React from "react"
import IngredientsList from "./components/IngredientsList"
import OgiRecipe from "./components/OgiRecipe"
import getRecipeFromMistral from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        []
    )
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        try {
            const response = await getRecipeFromMistral(ingredients)
            setRecipe(response)
        } catch (error) {
            console.error(error)
        }
    }

    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.target.reset()
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <OgiRecipe recipe={recipe} />}
        </main>
    )
}