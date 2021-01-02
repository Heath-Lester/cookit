
import React, { useContext, useEffect } from "react"
import { MealContext } from "./MealProvider"
import { Link } from "react-router-dom"
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
            <button className="groceryList--button" type="submit"
                onClick={ event => {
                    event.preventDefault()
                    return <Link to={`/groceryList/`} />
                }}>Create Grocery List</button>
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




