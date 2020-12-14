
import React, { useContext, useRef, useEffect } from "react"
import { SearchContext } from "./SearchProvider"
import { ViewPort } from "../viewport/ViewPort"
import "./Search.css"


export const SearchBar = props => {

    const { searchTerms,
        setTerms,
        autoResults,
        recipeAutocomplete,
        searchRecipeByKeyword
    } = useContext(SearchContext)

    useEffect(() => {
        if (searchTerms !== "") {
            recipeAutocomplete(searchTerms)
        }
    }, [searchTerms])

    const passToViewPort = () => {
        ViewPort(keyword.current.value)
    }
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
                    // debugger
                    event.preventDefault()
                    // searchRecipeByKeyword(keyword.current.value)
                    console.log(keyword.current.value)
                    // ViewPort(keyword.current.value)
                    passToViewPort()
                    // return <ViewPort input={keyword.current.value}></ViewPort>

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