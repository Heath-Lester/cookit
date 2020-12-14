
import React, { useContext, useEffect } from "react"
import { SearchContext } from "../search/SearchProvider"
import "./ViewPort.css"


export const SearchResults = keyword => {
    // debugger

    const { setResults, searchResults, getRecipeById, setRecipe, searchRecipeByKeyword } = useContext(SearchContext)

    const imageUrl = `https://spoonacular.com/recipeImages/`

    useEffect(() => {
        // getRecipeById(props.selectedRecipeId)
        searchRecipeByKeyword(keyword)
    }, [])

    return (
        <>
            {
                searchResults.map(result => {
                    return <section className="recipe" id={result.id} autoFocus key={result.id}
                        onClick={() => {
                            // setRecipe({})
                            // setResults([])
                            // props.setSelectedRecipeId(result.id)
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