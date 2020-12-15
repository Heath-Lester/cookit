
import React, { useContext, useRef, useEffect } from "react"
import { SearchContext } from "./SearchProvider"
import "./Search.css"


export const SearchBar = props => {

    const { searchTerms,
        setTerms,
        autoResults,
        setRecipe,
        recipeAutocomplete,
        searchRecipeByKeyword
    } = useContext(SearchContext)


    useEffect(() => {
        if (searchTerms !== "") {
            // debugger
            recipeAutocomplete(searchTerms)
        }
    }, [searchTerms])


    const keyword = useRef(null)

    return (
        <form className="searchBar">
            Search Recipes:
            <input type="text" className="searchBar--input" ref={keyword} required autoFocus
                onKeyUp={
                    (keyEvent) => {
                        setTerms(keyEvent.target.value)
                        // .then(recipeAutocomplete(searchTerms))
                    }
                }
                placeholder="Search Recipes using a Keyword...">
            </input>

            <button type="submit" className="searchBar--button"
                onClick={event => {
                    event.preventDefault()
                    setRecipe({})
                    setTerms([])
                    searchRecipeByKeyword(keyword.current.value)
                    props.setSelectedRecipeId(0)
                }}>Search
            </button>

            <div className="searchBar--autocomplete">
                {
                    autoResults.map(result => {
                        return <dt key={result.id} value={result.id}>
                            {result.title}
                        </dt>
                    })
                }
            </div>
        </form>
    )
}