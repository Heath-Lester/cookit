
import React, { useContext, useEffect } from "react"
import { MealContext } from "./MealProvider"
import "./Meal.css"

export const MealBuilder = props => {

const { meal, setMeal } = useContext(MealContext)

useEffect(() => {

}, [])

    return (
        <>
            <h2>MealBuilder</h2>
            <article className="MealList">

            </article>
        </>

    )
}