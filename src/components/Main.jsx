import { useEffect, useRef, useState } from "react"
import IngredientsList from "./IngredientsList"
import { getRecipeFromGoogleGenai } from "../ai"
import GeminiRecipe from "./GeminiRecipe"

export default function Main() {

    const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )

    const [recipe, setRecipe] = useState("")

    const recipeSection = useRef(null)
    
    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth"})
        }
    }, [ recipe])


    function addIngredient(formData) {               
        const newIngredient = formData.get("ingredient")
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])         
    }


    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromGoogleGenai(ingredients)
        setRecipe(recipeMarkdown)
        
    }


    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
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
                    ref={recipeSection}
                    ingredients={ingredients} 
                    getRecipe={getRecipe} 
                />
            }

            { recipe && <GeminiRecipe recipe={recipe} />}

        </main>
    )
}