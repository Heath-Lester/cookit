
import React, { useContext, useEffect } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "../search/SearchProvider"
import "./Meal.css"
import { MealContext } from "./MealProvider"


export const Meal = recipeId => {

    let userId = parseInt(localStorage.getItem("app_user_id"))

    const { detailedRecipe, getRecipeById } = useContext(SearchContext)

    const { savedRecipes, getSavedRecipes } = useContext(SavedRecipeContext)

    const { meals, setMeals } = useContext(MealContext)


        return (
            <>
                 {
                meals.map(meal => {
                    return <section className="meal" id={meal.id} autoFocus key={meal.id}>
                        <img className="recipe__image" src={imageUrl + meal.image} alt={`Recipe`}></img>
                        <h3 className="recipe__name">{meal.title}</h3>
                        <dt>Ready in {meal.readyInMinutes} minutes</dt>
                        <dt>Serves {meal.servings}</dt>
                        <dt><a href={meal.sourceUrl}>Original Recipe</a></dt>
                    </section>
                })
            }
            </>
        )
    }
}

