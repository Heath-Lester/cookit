
import React, { useContext } from "react"
import { SearchContext } from "../search/SearchProvider"
import { ViewPortContext } from "./ViewPortContext"
import { ViewPort } from "./ViewPort"
import "./ViewPort.css"


export const SearchResults = (props) => {
    
    const { searchResults, getRecipeById } = useContext(SearchContext)

    const { setViewPort } = useContext(ViewPortContext)

    const imageUrl = `https://spoonacular.com/recipeImages/`

 
    return (
        <>
            {
                searchResults.map(result => {
                    return <section className="recipe" id={"recipe"+result.id} autoFocus key={"recipe"+result.id}
                        onClick={() => {
                            getRecipeById(result.id)
                            setViewPort(2)
                            return <ViewPort {...props} />
                        }}>
                        <img className="recipe__image" src={imageUrl + result.image} alt={`Recipe`}></img>
                        <h3 className="recipe__name">{result.title}</h3>
                        <dt>Ready in {result.readyInMinutes} minutes</dt>
                        <dt>Serves {result.servings}</dt>
                        <dt><a href={result.sourceUrl}>Original Recipe</a></dt>
                    </section>
                })
            }
        </>
    )
}