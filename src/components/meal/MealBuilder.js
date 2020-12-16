
import React, { useContext, useState, useEffect } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "./MealProvider"
import "./Meal.css"

export const MealBuilder = props => {

    // const { detailedRecipe, getRecipeById } = useContext(SearchContext)

    const { meals, currentMeal, getRecipe, getMeals, setCurrentMeal } = useContext(MealContext)

    const [light, setLight] = useState("green")
    
    let mealsArray = []


    if (light === "green") {
        debugger
        const populateArray = () => {
            getMeals()
            meals.map(meal => {
                setCurrentMeal(getRecipe(meal.recipeId))
                return mealsArray.push(currentMeal)
            })
            setLight("red")
        }
    }


    return (
        <>
            <h2>MealBuilder</h2>
            <article className="MealList">
                {
                    mealsArray.map(meal => {
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
