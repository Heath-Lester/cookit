
import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import { DetailedResult } from "./DetailedResult"
import { SearchResults } from "./SearchResults"
import { SearchContext } from "../search/SearchProvider"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import "./ViewPort.css"


export const ViewPort = input => {
    // const { searchResults, setRecipe } = useContext(SearchContext)
    debugger
    console.log("viewport_input", input)




    if (typeof input === "string") {
        return (ReactDOM.render(document.getElementById("viewport"), < SearchResults key = "keyword" keyword = { input } />))
        // return <SearchResults  keyword={input}/>

    } else if (typeof input === "number") {
        // return <DetailedResult  recipeId={input}/>
        return DetailedResult(input)

    } else {
        return <h3>Nothing to Render</h3>
    }

}

