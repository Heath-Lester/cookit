
import React, { useEffect, useContext } from "react"
import { SearchContext } from "./SearchProvider"
import { MultiResults } from "./MultiResults"
import "./Search.css"


export const SearchResults = props => {

    const { searchResults, setResults, detailedRecipe, setRecipe } = useContext(SearchContext)
    console.log("SearchResults.js", searchResults)
    console.log("SearchResults.js", detailedRecipe)
    // debugger

    return (
        <>

                {
                    searchResults.map(result => {
                        return <MultiResults key={result.id}
                            result={result} />
                    })
                }
        </>
    )
}