
import React, { useContext, useRef, useEffect, useState } from "react"
import { ViewPortContext } from "../viewport/ViewPortContext"
import { SearchContext } from "./SearchProvider"
import { ViewPort } from "../viewport/ViewPort"
import "./Search.css"


export const SearchBar = props => {

    const { searchTerms,
        setTerms,
        autoResults,
        setRecipe,
        recipeAutocomplete,
        searchRecipeByKeyword,
        extractRecipeByUrl
    } = useContext(SearchContext)


    const { setViewPort } = useContext(ViewPortContext)


    const [bar, setBar] = useState("search")


    useEffect(() => {
        if (searchTerms !== "") {
            recipeAutocomplete(searchTerms)
        }
    }, [searchTerms])


    const keyword = useRef(null)
    const url = useRef(null)


    if (bar === "search") {
        return (
            <>
                <form className="searchBar">

                    <select className="selectSearchType" defaultValue="search" name="barType"
                        onChange={(c => {
                            setBar(c.target.value)
                            console.log()
                        })}>
                        <option value={"search"}>Search Bar</option>
                        <option value={"extract"}>Extract Bar</option>
                    </select>

                    <input type="text" className="searchBar--input" ref={keyword} required autoFocus autoComplete
                        onKeyUp={
                            (keyEvent) => {
                                setTerms(keyEvent.target.value)
                            }
                        }
                        placeholder="Search Recipes using a Keyword...">

                        {/* <AutoComplete className="searchBar--autocomplete" 
                            suggestions={autoResults}
                            /> */}
                    </input>

                    <button type="submit" className="searchBar--button"
                        onClick={event => {
                            event.preventDefault()
                            searchRecipeByKeyword(keyword.current.value)
                            setRecipe({})
                            setTerms(" ")
                            setViewPort(1)
                            return <ViewPort {...props} />

                        }}>Search
                </button>
                </form>

                {/* <div className="searchBar--autocomplete">
                    {
                        autoResults.map(result => {
                            return <dt key={result.id} value={result.id}>
                                {result.title}
                            </dt>
                        })
                    }
                </div> */}
            </>
        )
    } else if (bar === "extract") {
        return (
            <form className="extractBar">

                <select className="selectSearchType" defaultValue="search" name="barType"
                    onChange={(c => {
                        setBar(c.target.value)
                        console.log()
                    })}>
                    <option value={"search"}>Search Bar</option>
                    <option value={"extract"}>Extract Bar</option>
                </select>

                <input type="text" className="extractBar--input" ref={url} required autoFocus
                    placeholder="Paste in a Url...">
                </input>

                <button type="submit" className="extractBar--button"
                    onClick={event => {
                        event.preventDefault()
                        extractRecipeByUrl(url.current.value)
                        setRecipe({})
                        setTerms([])
                        setViewPort(2)
                        return <ViewPort {...props} />

                    }}>Extract
                </button>
            </form>
        )
    }


}