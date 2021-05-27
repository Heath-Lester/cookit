
import React, { useContext } from "react"
import { GroceryContext } from "./GroceryProvider"
import "./GroceryList.css"


export const GroceryIngredient = ({ ingredient }) => {

    const { ingredientAquired } = useContext(GroceryContext)

    let i = 0
    i++

    return (
        <div className="ingredient">

            <button className="ingredientButton" onClick={() => ingredientAquired(ingredient.id)}>
                <input className="checkbox" type="checkbox" readOnly={true} 
                    id={ingredient.id + "--" + i}
                    key={ingredient.id + "--" + i}
                    name={ingredient.name + "--" + i}
                    checked={ingredient.aquired}
                />
            <label className="ingredientLabel" htmlFor={ingredient.name + "--" + i}
            >{ingredient.original} </label>
            </button>
        </div>
    )
}