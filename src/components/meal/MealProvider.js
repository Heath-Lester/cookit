
import React, { useState } from "react"
import { apiKey } from "../../.api_key.js"


export const MealContext = React.createContext()


export const MealProvider = props => {

    const [meals, setMeals] = useState([])

    const [recipe, setRecipe] = useState({title: null, image: null, readyInMinutes: null})

    const userToken = localStorage.getItem("cookit_user")


    const getMeals = () => {
        return fetch(`http://localhost:8000/meals`, {
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setMeals)
    }

    const addMeal = mealObj => {
        return fetch(`http://localhost:8000/meals`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${userToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mealObj)
        })
            .then(getMeals)
    }

    const deleteMeal = mealId => {
        return fetch(`http://localhost:8000/meals/${mealId}`, {
            method: "DELETE",
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(getMeals)
    }

    //// Delete all meals for a given User ////
    const resetMeals = () => {
        return fetch(`http://localhost:8000/meals/complete`, {
            method: "DELETE",
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setMeals)
    }

    const spoonacularRecipe = recipeId => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => setRecipe(response))
    }


    return (
        <MealContext.Provider value={{
            meals,
            setMeals,
            recipe,
            setRecipe,
            getMeals,
            addMeal,
            deleteMeal,
            resetMeals,
            spoonacularRecipe
        }}>
            {props.children}
        </MealContext.Provider>
    )
}