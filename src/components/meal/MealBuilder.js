
import React, { useContext, useState, useEffect } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "../search/SearchProvider"
import { Meal } from "./Meal"
import { MealContext } from "./MealProvider"
import "./Meal.css"

export const MealBuilder = props => {


    const { meals, getMeals } = useContext(MealContext)


    useEffect(() => {
        getMeals()
    }, [])

    return (
        <>
            <h2>MealBuilder</h2>
            <article className="MealList">
                {
                    meals.map(meal => {
                        return <Meal meal={meal}/>
                    })
                }
            </article>
        </>
    )
}




