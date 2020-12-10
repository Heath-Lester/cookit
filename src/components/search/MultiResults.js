
import React from "react"
import { Link } from "react-router-dom"
import "./Search.css"

export const MultiResults = ({result}) => {
    // debugger
    const imageUrl = `https://spoonacular.com/recipeImages/`

    return (
        <section className="recipe">
            <img className="recipe__image" src={imageUrl + result.image} alt={`Recipe Image`}></img>
            <h3 className="recipe__name">{result.title}</h3>
            <dt>Ready in {result.readyInMinutes} minutes</dt>
            <dt>Serves {result.servings}</dt>
            <dt><a href={result.sourceUrl}>Original Recipe</a></dt>
        </section>
    )
}