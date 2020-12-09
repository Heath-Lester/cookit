
import React, { useEffect, useContext } from "react"
import { SearchContext } from "./SearchProvider"
import { MultiResults } from "./MultiResults"
import "./Search.css"


export const SearchResults = props => {

    const { searchResults, setResults } = useContext(SearchContext)
    console.log("SearchResults.js", searchResults)
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