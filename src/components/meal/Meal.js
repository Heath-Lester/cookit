
import React, { useContext, useState, useEffect } from "react"
import { MealContext } from "./MealProvider"
import "./Meal.css"

export const Meal = ({ meal }) => {

    const { getRecipe } = useContext(MealContext)

    const [recipe, setRecipe] = useState({ title: null, image: null, readyInMinutes: null })

    useEffect(() => {
        getRecipe(meal.recipeId)
            .then(setRecipe)
    }, [])


    return (
        <>
            <div className="meal" id={"mealId--" + meal.id} key={"mealId--" + meal.id}>
                <img className="meal__image" src={recipe.image} alt={`Meal Image`} />
                <h4 className="meal__name">{recipe.title}</h4>
                <dt>Ready in {recipe.readyInMinutes} minutes</dt>
            </div>
        </>
    )
}





