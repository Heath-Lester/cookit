
import React, { useState } from "react"
import { apiKey } from "../../.api_key.js"

export const MealContext = React.createContext()


export const MealProvider = props => {

    const [meals, setMeals] = useState([])

    const userId = parseInt(localStorage.getItem("app_user_id"))

    const getMeals = () => {
        return fetch(`http://localhost:8088/mealsToPrep/?userId=${userId}`)
            .then(result => result.json())
            .then(setMeals)
            .then(console.log(meals))
    }

    const addMeal = recipeObj => {
        return fetch(`http://localhost:8088/mealsToPrep`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeObj)
        })
            .then(getMeals)
    }

    const getRecipe = id => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
    }

    return (
        <MealContext.Provider value={{
            meals,
            setMeals,
            getMeals,
            getRecipe,
            addMeal
        }}>
            {props.children}
        </MealContext.Provider>
    )
}