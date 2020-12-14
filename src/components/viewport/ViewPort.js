
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
        return (ReactDOM.render(<SearchResults key={"searchResults--" + { input }} keyword={input} />, document.getElementById("viewport")))
        // return <SearchResults key={"searchResults--"+{input}}  keyword={input} />

    } else if (typeof input === "number") {
        return <DetailedResult recipeId={input} />
        // return DetailedResult(input)

    } else {
        return <h3>Nothing to Render</h3>
    }

}

