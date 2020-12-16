
import React, { useState } from "react"


export const MealContext = React.createContext()


export const MealProvider = props => {

    const [meals, setMeals] = useState([])

    const userId = parseInt(localStorage.getItem("app_user_id"))

    const getMeals = userId => {
        return fetch(`http://localhost:8088/mealsToPrep/?userId=${userId}`)
            .then(result => result.json())
            .then(setMeals)
    }

    const addMeal = recipeObj => {
        return fetch(`http://localhost:8088/mealsToPrep`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeObj)
        })
            .then(getMeals)
    }

    return (
        <MealContext.Provider value={{
            meals, setMeals, getMeals, addMeal
        }}>
            {props.children}
        </MealContext.Provider>
    )
}