
import React, { useContext } from "react"
import { GroceryContext } from "./GroceryProvider"
import "./GroceryList.css"


export const GroceryIngredient = ({ ingredient }) => {

    const { ingredientAquired } = useContext(GroceryContext)

    let i = 0
    i++

    return (
        <div className="ingredient">

            <input type="checkbox"
                id={ingredient.id + "--" + i}
                key={ingredient.id + "--" + i}
                name={ingredient.name + "--" + i}
                checked={ingredient.aquired}
                onChange={() => {
                    ingredientAquired(ingredient.id)
                }} />

            <label htmlFor={ingredient.name + "--" + i}
            >{ingredient.original} </label>
        </div>
    )
}