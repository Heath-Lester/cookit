
import React, { useContext, useEffect, useState } from "react"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "../meal/MealProvider"
import "./GroceryList.css"


export const IngredientList = ({ meal }) => {

    const { getRecipeById, detailedRecipe, getIngredientById, ingredient } = useContext(SearchContext)
    
    const [recipe, setRecipe] = useState({ title: null, image: null })

    useEffect(() => {
        console.log("Grocery Item", meal)
        getRecipeById(meal.recipeId)
            .then(console.log("detailed recipe", detailedRecipe))
            .then(setRecipe(detailedRecipe))
        console.log("ingredient list detailed recipe", recipe)
    }, [])


    return (
        <>
                <div className="recipe--information">
                    <img className="recipe__image" src={recipe.image} alt={`Meal`} />
                    <h4 className="recipe__name">{recipe.title}</h4>
                </div>

                <div className="recipe---ingredients">

                </div>
        </>
    )
}