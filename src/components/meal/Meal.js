
import React, { useContext, useEffect } from "react"
import { ViewPortContext } from "../viewport/ViewPortContext"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "./MealProvider"
import { ViewPort } from "../viewport/ViewPort"
import "./Meal.css"

export const Meal = ({ meal }) => {

    const { deleteMeal, spoonacularRecipe, recipe } = useContext(MealContext)

    const { getRecipeById } = useContext(SearchContext)

    const { getSingleRecipe } = useContext(SearchContext)

    const { setViewPort } = useContext(ViewPortContext)

    useEffect(() => {
        if (meal.saved_recipe === null) {
            spoonacularRecipe(meal.spoonacular_id)
        }
    }, [])

    if (meal.saved_recipe !== null) {

        return (
            <>
                <div className="meal" id={"mealId--" + meal.id} key={"mealId--" + meal.id}>

                    <div className="meal__content">
                        <img className="meal__image" src={meal.saved_recipe.image} alt={`Meal`}
                            onClick={() => {
                                getSingleRecipe(meal.saved_recipe.id)
                                setViewPort(3)
                                return <ViewPort />
                            }} />
                        <div className="meal__details">
                            <h4 className="meal__name">{meal.saved_recipe.title}</h4>
                            <dt className="meal__prepTime">Ready in {meal.saved_recipe.ready_in_minutes} minutes</dt>
                        </div>
                    </div>

                    <button className="meal--delete_button"
                        onClick={() => {
                            deleteMeal(meal.id)
                        }}>Remove</button>
                </div>
            </>
        )
    } else if (meal.saved_recipe === null) {
        return (
            <>
                <div className="meal" id={"mealId--" + meal.id} key={"mealId--" + meal.id}>
                    <div className="meal__content">
                        <img className="meal__image" src={recipe.image} alt={`Meal`}
                            onClick={() => {
                                getRecipeById(recipe.id)
                                setViewPort(2)
                                return <ViewPort />
                            }} />
                        <div className="meal__details">
                            <h4 className="meal__name">{recipe.title}</h4>
                            <dt className="meal__prepTime">Ready in {recipe.readyInMinutes} minutes</dt>
                        </div>
                    </div>
                    <button className="meal--delete_button"
                        onClick={() => {
                            deleteMeal(meal.id)
                        }}>Remove</button>
                </div>
            </>
        )
    }
}








