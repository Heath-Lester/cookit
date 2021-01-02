
import React, { useContext, useEffect } from "react"
import { MealContext } from "./MealProvider"
import { Meal } from "./Meal"
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
                        return <Meal meal={meal} key={"mealKey--"+meal.id}/>
                    })
                }
            </article>
        </>
    )
}




