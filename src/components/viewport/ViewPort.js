
import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import { DetailedResult } from "./DetailedResult"
import { SearchResults } from "./SearchResults"
import { SearchContext } from "../search/SearchProvider"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import "./ViewPort.css"


export const ViewPort = ({props}) => {
    // const { searchResults, setRecipe } = useContext(SearchContext)
    console.log("props", props)
    // debugger




    if (typeof props === "string") {
        return <SearchResults  {...props}/>

    } else if (typeof props === "number") {
        return <DetailedResult  {...props}/>

    } else {
        return <h3>Nothing to Render</h3>
    }

}

