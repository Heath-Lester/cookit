
import React, { useContext, useState, useEffect } from "react"
import { ViewPortContext } from "../viewport/ViewPortContext"
import { GroceryContext } from "../groceryList/GroceryProvider"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "./MealProvider"
import { ViewPort } from "../viewport/ViewPort"
import "./Meal.css"

export const Meal = ({ meal }) => {

    const { getRecipe, deleteMeal } = useContext(MealContext)

    const { getRecipeById } = useContext(SearchContext)

    const { setViewPort } = useContext(ViewPortContext)

    const { deleteGroceryRecipe } = useContext(GroceryContext)

    const [recipe, setRecipe] = useState({ title: null, image: null, readyInMinutes: null })
    

    useEffect(() => {
        getRecipe(meal.recipeId)
            .then(setRecipe)
    }, [])


    return (
        <>
            <div className="meal" id={"mealId--" + meal.id} key={"mealId--" + meal.id}>
                <img className="meal__image" src={recipe.image} alt={`Meal`}                 
                onClick={() => {
                    getRecipeById(recipe.id)
                    setViewPort(2)
                    return <ViewPort />
                }} />
                <h4 className="meal__name">{recipe.title}</h4>
                <dt>Ready in {recipe.readyInMinutes} minutes</dt>
                <button className="meal--delete_button"
                    onClick={() => {
                        deleteGroceryRecipe(meal.recipeId)
                        deleteMeal(meal.id)
                    }}>Remove</button>
            </div>
        </>
    )
}





