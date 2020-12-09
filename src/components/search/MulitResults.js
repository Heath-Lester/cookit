
import React from "react"
import { Link } from "react-router-dom"
import "./SearchBar.css"

export default ({ result }) => (
    <section className="recipe">
        <img src={result.image} alt={`${result.image}`}><Link to={result.sourceUrl} /></img>
        <h3 className="recipe__name">{result.title}</h3>
        <dt>Ready in: {result.readyinMinutes} minutes</dt>
        <dt>Sevings: {result.servings}</dt>
        <dt>Original Recipe: <a src={result.sourceUrl}>{result.sourceUrl}</a></dt>
    </section>
)