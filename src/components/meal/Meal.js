
import React, { useContext, useState, useEffect } from "react"
import { ViewPortContext } from "../viewport/ViewPortContext"
import { SearchContext } from "../search/SearchProvider"
import { ViewPort } from "../viewport/ViewPort"
import { MealContext } from "./MealProvider"
import "./Meal.css"

export const Meal = ({ meal }) => {

    const { getRecipe, deleteMeal } = useContext(MealContext)

    const { getRecipeById } = useContext(SearchContext)

    const { setViewPort } = useContext(ViewPortContext)

    const [recipe, setRecipe] = useState({ title: null, image: null, readyInMinutes: null })

    useEffect(() => {
        getRecipe(meal.recipeId)
            .then(setRecipe)
    }, [])


    return (
        <>
            <div className="meal" id={"mealId--" + meal.id} key={"mealId--" + meal.id}
                onClick={() => {
                    getRecipeById(recipe.id)
                    setViewPort(2)
                    return <ViewPort />
                }}>
                <img className="meal__image" src={recipe.image} alt={`Meal`} />
                <h4 className="meal__name">{recipe.title}</h4>
                <dt>Ready in {recipe.readyInMinutes} minutes</dt>
                <button className="meal--delete_button"
                    onClick={event => {
                        event.preventDefault()
                        deleteMeal(meal.id)
                    }}>Remove</button>
            </div>
        </>
    )
}





