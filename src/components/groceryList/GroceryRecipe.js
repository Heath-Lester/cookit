
import React, { useContext, useEffect, useState } from "react"
import { GroceryContext } from "./GroceryProvider"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "../meal/MealProvider"
import "./GroceryList.css"


export const GroceryRecipe = ({ meal }) => {

    const { getIngredientById, ingredient } = useContext(SearchContext)

    const { getRecipe } = useContext(MealContext)

    const { getRecipeList, ingredientsList } = useContext(GroceryContext)

    const [recipe, setRecipe] = useState({ title: null, image: null, extendedIngredients: [] })

    useEffect(() => {
        getRecipe(meal.recipeId)
            .then(setRecipe)
    }, [])

    let ingredientsArray = []

    let i = 0

    recipe.extendedIngredients.map(ingredient => ingredientsArray.push(ingredient))

    console.log(ingredientsArray)


    return (
        <>
            <section className="recipe">

                <div className="recipe__leftSide">
                    <div className="recipe__information">
                        <h2 className="recipe__name">{recipe.title}</h2>
                        <img className="grocery--recipe__image" src={recipe.image} alt={`Meal`} />
                    </div>
                </div>

                <ul className="recipe__ingredients">
                    {
                        ingredientsArray.map(ingredient => {
                            i++
                            return <li type="checkbox" className="ingredient" id={ingredient.id + "--" + i} key={ingredient.id + "--" + i}
                                name={ingredient.originalName} value={ingredient.id + "--" + i}><h3 className="ingredient">{ingredient.name} :  {ingredient.amount} {ingredient.measures.us.unitLong}</h3>
                            </li>
                        })
                    }
                </ul>

            </section>
        </>
    )
}