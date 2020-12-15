
import React, { useState } from "react"


const MealContext = React.createContext()


const MealProvider = () => {

    const [meal, setMeal] = useState([])

    const userId = parseInt(localStorage.getItem("app_user_id"))

    const getMeals = userId => {
        return fetch(`http://localhost:8088/mealsToPrep/?userId=${userId}`)
            .then(result => result.json())
            .then(setMeal)
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
            meal, setMeal, getMeals, addMeal
        }}>
            {props.childer}
        </MealContext.Provider>
    )
}