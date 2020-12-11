
import React, { useContext } from "react"
import { RecipeContext } from "./RecipeProvider"
import { SearchContext } from "../search/SearchProvider"


export const ConstructContext = React.createContext()


export const ConstructRecipe = props => {

    const { saveRecipe,
        saveRecipe,
        saveIngredients,
        saveInstructions,
        saveCookWear,
        getSavedRecipes } = useContext(RecipeContext)

    const { detailedRecipe } = useContext(SearchContext)


    debugger

    let userId = parseInt(localStorage.getItem("app_user_id"))
    let recipeId = detailedRecipe.id
    let title = detailedRecipe.title
    let image = detailedRecipe.image
    let sourceName = detailedRecipe.sourceName
    let sourceUrl = detailedRecipe.sourceUrl
    let servings = detailedRecipe.servings
    let readyInMinutes = detailedRecipe.readyInMinutes
    let summary = detailedRecipe.summary

    if (savedRecipes.filter(r => r.recipeId === recipeId).length > 0) {
        window.alert(`Recipe ID of ${recipeId} already exists for this user. (ID ${userId})`)
    } else {
        saveRecipe({
            userId,
            recipeId,
            title,
            image,
            sourceName,
            sourceUrl,
            servings,
            readyInMinutes,
            summary,
            favorite: false,
            edited: false
        })
            .then(saveIngredients({
                userId,
                recipeId,
                ingredients
            }))
            .then(saveCookWear({
                userId,
                recipeId,
                equipment
            }))
            .then(saveInstructions({
                userId,
                recipeId,
                instructions
            }))
    }
}

