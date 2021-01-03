
import React, { useContext, useEffect, useState } from "react"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "../meal/MealProvider"
import "./GroceryList.css"


export const GroceryItem = ({ meal }) => {

    const { getIngredientById, ingredient } = useContext(SearchContext)

    const { getRecipe } = useContext(MealContext)

    const [recipe, setRecipe] = useState({ title: null, image: null, extendedIngredients: [] })

    useEffect(() => {
        getRecipe(meal.recipeId)
            .then(setRecipe)
    }, [])

    let ingredientsArray = []

    let i = 0

    recipe.extendedIngredients.map(ingredient => ingredientsArray.push(ingredient))

    console.log("Ingredients Array", ingredientsArray)

    return (
        <>
            <section className="groceryItem">

                <div className="recipe__information">
                    <img className="recipe__image" src={recipe.image} alt={`Meal`} />
                    <h4 className="recipe__name">{recipe.title}</h4>
                </div>

                <form className="recipe__ingredients">
                    {
                        ingredientsArray.map(ingredient => {
                            i++
                            return (
                                <>
                                    <label className="recipe__ingredient">
                                        <input type="checkbox" className="ingredient" id={ingredient.id + "--" + i} key={ingredient.id + "--" + i}
                                            name={ingredient.originalName} value={recipe.id + "--" + i}>
                                        </input>
                                        { ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}: {ingredient.amount} {ingredient.measures.us.unitLong}
                                    </label>
                                </>
                            )
                        })
                    }
                </form>

            </section>
        </>
    )
}