
import React, { useState } from "react"


export const MealContext = React.createContext()


export const MealProvider = props => {

    const [meals, setMeals] = useState([])

    const userToken = localStorage.getItem("cookit_user")


    const getMeals = () => {
        return fetch(`http://localhost:8088/meals`, {
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setMeals)
    }

    const addMeal = mealObj => {
        return fetch(`http://localhost:8088/meals`, {
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
        return fetch(`http://localhost:8088/meals/${mealId}`, {
            method: "DELETE",
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(getMeals)
    }

    const resetMeals = () => {
        return fetch(`http://localhost:8088/meals/complete`, {
            method: "DELETE",
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setMeals)
    }


    return (
        <MealContext.Provider value={{
            meals,
            setMeals,
            getMeals,
            addMeal,
            deleteMeal,
            resetMeals
        }}>
            {props.children}
        </MealContext.Provider>
    )
}