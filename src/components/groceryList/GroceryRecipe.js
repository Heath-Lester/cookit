
import React, { useContext, useEffect } from "react"
import { GroceryContext } from "./GroceryProvider"
import { MealContext } from "../meal/MealProvider"
import "./GroceryList.css"


export const GroceryRecipe = ({ ingredient }) => {

    const { recipe, groceryList, getRecipeList, spoonacularRecipe } = useContext(GroceryContext)

    let i = 0


    return (
        <>
            {
                <input type="checkbox" className="ingredient" id={ingredient.id + "--" + i} key={ingredient.id + "--" + i}
                    name={ingredient.name} checked={ingredient.aquired}>
                        <label className="ingredient">{ingredient.name} :  {ingredient.amount} {ingredient.unit}</label>
                </input>
            }

        </>
    )
}