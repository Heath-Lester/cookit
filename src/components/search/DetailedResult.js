
import React, { useContext, } from "react"
import { SearchContext } from "./SearchProvider"
import "./Search.css"


export const SelectedRecipe = ({ recipe }) => {

    const { detailedRecipe } = useContext(SearchContext)

    const imageUrl = `https://spoonacular.com/recipeImages/`

    return (
        <section className="detailedRecipe" id={recipe.id}>
            <h2 className="detailedRecipe__name">{result.title}</h2>
            <img className="detailedRecipe__image" src={recipe.image} alt={`Recipe Image`}></img>
            <h3 className="detailedRecipe__author">Author: <a href={`http://www.google.com/search?q=${recipe.sourceName}&btnI`}>{recipe.sourceName}</a></h3>
            <a className="detailedRecipe__webLink" href={recipe.sourceUrl}>Original Recipe</a>
            <p className="detailedRecipe__dishTypes">{recipe.dishTypes}</p>
            <p className="detailedRecipe__time">Serves {recipe.servings}</p>
            <p className="detailedRecipe__time">Ready in {recipe.readyInMinutes} minutes</p>
            <p className="detailedRecipe__summary">{recipe.summary}</p>
            <ul className="detailedRecipe__ingredients">
                {
                    recipe.extendedIngredients.map(ingredient => {
                            <li>{ingredient.name}</li>
                    })
                }
            </ul>
            <ul className="detailedRecipe__equipment">
                {
                    recipe.analizedInstructions[0].steps.map(instruction => {
                        instruction.equipment.map(equipmentList => {
                            <li>{equipmentList.name}</li>
                        })
                    })
                }
            </ul>
            <ol className="detailedRecipe__instructions">
                {
                    recipe.analizedInstructions[0].steps.map(instruction => {
                        <li>{instruction.step}</li>
                    })
                }
            </ol>
        </section>
    )

}