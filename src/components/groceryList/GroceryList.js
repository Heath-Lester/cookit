
import React, { useContext, useEffect } from "react"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "../meal/MealProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./GroceryList.css"
import { IngredientList } from "./IngredientsList"

export const GroceryList = props => {

    const { meals, getMeals } = useContext(MealContext)

    const { getRecipeById, detailedRecipe, getIngredientById, ingredient } = useContext(SearchContext)


    useEffect(() => {
        getMeals()
        console.log("Meals", meals)
    }, [])



    return (
        <>
            <header className="GroceryList--header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
                <h1 className="title">Grocery List</h1>
                <h3 className="link"><Link to={'/'}>Back</Link></h3>
            </header>

            <article className="GroceryList">
                {
                    meals.map(meal => {
                        return <IngredientList meal={meal} key={"groceryItem--"+meal.recipeId}/>
                    })
                }
            </article>
        </>
    )

}