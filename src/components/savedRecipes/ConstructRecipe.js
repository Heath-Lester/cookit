
import React, { useContext } from "react"
import { RecipeContext } from "./RecipeProvider"
import { SearchContext } from "../search/SearchProvider"


export const ConstructRecipe = props => {

    const { saveRecipe,
        saveRecipe,
        saveIngredients,
        saveInstructions,
        saveCookWear,
        getSavedRecipes } = useContext(RecipeContext)
        
    const { detailedRecipe } = useContext(SearchContext)

}