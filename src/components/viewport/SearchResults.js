
import React, { useContext } from "react"
import { ViewPortContext } from "./ViewPortContext"
import { SearchContext } from "../search/SearchProvider"
import { ViewPort } from "./ViewPort"
import Spinner from 'react-bootstrap/Spinner'
import "./ViewPort.css"


export const SearchResults = (props) => {

    const { searchResults, getRecipeById, setRecipe } = useContext(SearchContext)

    const { setViewPort } = useContext(ViewPortContext)

    const imageUrl = `https://spoonacular.com/recipeImages/`


    if (searchResults.length === 0) {
        return <Spinner className="search__spinner" animation="border" size="lg" role="status" variant="warning" />
    } else if (searchResults.length > 0) {
        return (
            <section className="search__results">
                {
                    searchResults.map(result => {
                        return <div className="results__recipe" id={"recipe" + result.id} autoFocus key={"recipe" + result.id}
                            onClick={() => {
                                setRecipe({})
                                getRecipeById(result.id)
                                setViewPort(2)
                                return <ViewPort {...props} />
                            }}>
                            <img className="results__image" src={imageUrl + result.image} alt={`Recipe`} />
                            <div className="results__details">
                                <h3 className="results__name">{result.title}</h3>
                                <dt>Ready in {result.readyInMinutes} minutes</dt>
                                <dt>Serves {result.servings}</dt>
                                <dt><a href={result.sourceUrl}>Original Recipe</a></dt>
                            </div>
                        </div>
                    })
                }
            </section>
        )
    }
}