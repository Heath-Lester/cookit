
import React, { useState, useEffect, useContext } from "react"
import { DetailedResult } from "./DetailedResult"
import { SearchResults } from "./SearchResults"
import { SearchContext } from "../search/SearchProvider"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import "./ViewPort.css"

export const ViewPort = props => {

    const [selectedRecipeId , setSelectedRecipeId] = useState(0)

    const { setResults,
        searchResults,
        getRecipebyId,
        setRecipe } = useContext(SearchContext)

    const { savedRecipes,
        saveRecipe,
        // saveIngredients,
        // saveInstructions,
        // saveCookWear,
        getSavedRecipes } = useContext(SavedRecipeContext)
        

    if ( searchResults !== [] && setRecipe === {} ) {
        return <SearchResults setSelectedRecipeId={setSelectedRecipeId} />

    } else if (searchResults === [] && setRecipe !== {} ) {
        return <DetailedResult selectedRecipeId={selectedRecipeId} />

    } else if ( searchResults === [] && setRecipe === {} ) {
       return <></>

    } else {
        return <h3>Nothing to Render</h3>
    }

}