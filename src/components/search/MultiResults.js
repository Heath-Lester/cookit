
import React, { useRef, useContext } from "react"
import { SearchContext } from "./SearchProvider"
import { Link } from "react-router-dom"
import "./Search.css"


export const MultiResults = ({ result }) => {
    debugger

    const { setResults, getRecipebyId } = useContext(SearchContext)

    const imageUrl = `https://spoonacular.com/recipeImages/`

    return (
        <section className="recipe" id={result.id} autoFocus
            onClick={() => {
                setResults([])
                getRecipebyId(result.id)
            }}>
            <img className="recipe__image" src={imageUrl + result.image} alt={`Recipe Image`}></img>
            <h3 className="recipe__name">{result.title}</h3>
            <dt>Ready in {result.readyInMinutes} minutes</dt>
            <dt>Serves {result.servings}</dt>
            <dt><a href={result.sourceUrl}>Original Recipe</a></dt>
        </section>
    )
}