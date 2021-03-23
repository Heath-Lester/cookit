
import React, { useContext, useEffect } from "react"
import { GroceryRecipe } from "./GroceryRecipe"
import { MealContext } from "../meal/MealProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./GroceryList.css"

export const GroceryList = props => {

    const { meals, getMeals } = useContext(MealContext)

    useEffect(() => {
        getMeals()
    }, [])


    return (
        <>
            <header className="GroceryList--header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
                <h1 className="groceryList__title">Grocery List</h1>
                <h3 className="link"><Link to={'/'}>Back</Link></h3>
            </header>

            <article className="GroceryList">
                {
                    meals.map(meal => {
                        return <GroceryRecipe meal={meal} key={"groceryItem--"+meal.recipeId}/>
                    })
                }
            </article>
        </>
    )

}