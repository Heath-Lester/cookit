
import React, { useContext, useEffect } from "react"
import { MealContext } from "./MealProvider"
import { Meal } from "./Meal"
import "./Meal.css"

export const MealBuilder = (props) => {

    const { meals, getMeals } = useContext(MealContext)

    useEffect(() => {
        getMeals()
    }, [])


    return (
        <>
            <h2>Meal Builder</h2>
            <button className="groceryList--button" 
                onClick={ () => {
                    props.history.push(`/groceryList`)
                }}>Create Grocery List</button>
            <article className="GropceryList">
                {
                    meals.map(meal => {
                        return <Meal meal={meal} key={"mealKey--"+meal.id}/>
                    })
                }
            </article>
        </>
    )
}




