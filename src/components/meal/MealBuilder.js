
import React, { useContext, useState, useEffect } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "./MealProvider"
import "./Meal.css"

export const MealBuilder = props => {

    // const { detailedRecipe, getRecipeById } = useContext(SearchContext)

    const { meals, currentMeal, getRecipe, getMeals, setCurrentMeal } = useContext(MealContext)

    const [recipeArray, setRecipeArray] = useState([])

    let mealsArray = []


    getMeals()

    meals.map(meal => {
        debugger
        getRecipe(meal.recipeId)
        return mealsArray.push(currentMeal)
    })

    setRecipeArray(mealsArray)

    return (
        <>
            <h2>MealBuilder</h2>
            <article className="MealList">
                {
                    recipeArray.map(meal => {
                        return <div className="meal" id={"mealId--" + meal.id} key={"mealId--" + meal.id}>
                            <img className="meal__image" src={meal.image} alt={`Meal Image`} />
                            <h4 className="meal__name">{meal.title}</h4>
                            <dt>Ready in {meal.readyInMinutes} minutes</dt>
                        </div>
                    })
                }
            </article>
        </>
    )
}




