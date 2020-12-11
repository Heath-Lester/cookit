
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
        <>
            Search Recipes:
            <input type="text" className="search--bar" ref={keyword} required autoFocus
                onKeyUp={
                    (keyEvent) => {
                        setTerms(keyEvent.target.value)
                        // .then(recipeAutocomplete(searchTerms))
                    }
                }
                placeholder="Search Recipes using a Keyword...">
            </input>

            <button type="submit" className="search--button"
                onClick={event => {
                    event.preventDefault()
                    setRecipe({})
                    setTerms([])
                    searchRecipeByKeyword(keyword.current.value)
                }}>Search
            </button>

            <div className="search--autocomplete">
                {
                    autoResults.map(result => {
                        return <dt key={result.id} value={result.id}>
                            {result.title}
                        </dt>
                    })
                }
            </div>
        </>
    )
}