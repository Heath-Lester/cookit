
import React, { useContext, useEffect } from "react"
import { SearchContext } from "../search/SearchProvider"
import { ViewPortContext } from "./ViewPortContext"
import { ViewPort } from "./ViewPort"
import "./ViewPort.css"


export const SearchResults = (props) => {
    
    const { searchRecipeByKeyword, searchResults, getRecipeById } = useContext(SearchContext)

    const { setViewPort } = useContext(ViewPortContext)
    // searchRecipeByKeyword(keyword)

    const imageUrl = `https://spoonacular.com/recipeImages/`

    // useEffect(() => {
    //     // getRecipeById(props.selectedRecipeId)
    //     searchRecipeByKeyword(keyword)
    // }, [])

    return (
        <>
            {
                searchResults.map(result => {
                    return <section className="recipe" id={result.id} autoFocus key={result.id}
                        onClick={() => {
                            debugger
                            // setRecipe({})
                            // setResults([])
                            // props.setSelectedRecipeId(result.id)
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