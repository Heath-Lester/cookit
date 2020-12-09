
import React from "react"
import { Link } from "react-router-dom"
import "./Search.css"

export const MultiResults = ({result}) => {
    // debugger
    const imageUrl = `https://spoonacular.com/recipeImages/`

    // const url = window.location.pathname
    // const image = url.substring((result.image).lastIndexOf('/')+1)
    return (
        <section className="recipe">
            <img src={imageUrl + result.image} alt={`Recipe Image`}></img>
            <h3 className="recipe__name">{result.title}</h3>
            <dt>Ready in {result.readyInMinutes} minutes</dt>
            <dt>Serves {result.servings}</dt>
            <dt><a href={result.sourceUrl}>Original Recipe</a></dt>
        </section>
    )
}


  {/* <img src={imageUrl} alt={`${result.image}`}><Link to={result.sourceUrl} /></img> */}