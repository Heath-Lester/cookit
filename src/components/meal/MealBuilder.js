
import React, { useContext, useState, useEffect } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "./MealProvider"
import "./Meal.css"

export const MealBuilder = props => {

    const { detailedRecipe, getRecipeById } = useContext(SearchContext)

    const { meals } = useContext(MealContext)

    let mealsArray = []

    useEffect(() => {
        debugger
        meals.map(meal => getRecipeById(meal.recipeId).then( mealsArray.push(detailedRecipe) ))
    }, [meals])


    return (
        <>
            <h2>MealBuilder</h2>
            <article className="MealList">
                {
                    mealsArray.map(meal => {
                        return <div className="meal" id={meal.id} key={meal.id}>
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
