
import React, { useContext } from "react"
import { SearchContext } from "./SearchProvider"
import "./Search.css"


export const CompactResults = props => {
    // debugger

    const { setResults, searchResults, getRecipebyId, setRecipe } = useContext(SearchContext)

    const imageUrl = `https://spoonacular.com/recipeImages/`

    return (
        <>
            {
                searchResults.map(result => {
                    return <section className="recipe" id={result.id} autoFocus key={result.id}
                        onClick={() => {
                            // setRecipe({})
                            setResults([])
                            getRecipebyId(result.id)
                        }}>
                        <img className="recipe__image" src={imageUrl + result.image} alt={`Recipe Image`}></img>
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

// {
//     <SelectedRecipe key={detailedRecipe.id} recipe={detailedRecipe}/>
// }