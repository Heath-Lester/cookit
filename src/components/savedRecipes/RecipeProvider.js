
import React, { useState } from "react"


export const SavedRecipeContext = React.createContext()


export const RecipeProvider = props => {

    const [savedRecipes, setSavedRecipes] = useState([])
    console.log("Saved Recipe: Saved Recipe Provider", savedRecipes)


    const getSavedRecipes = userId => {
        return fetch(`http://localhost:8088/savedRecipes/userId=${userId}`)
            .then(result => result.json())
            .then(setSavedRecipes)
    }

    const saveRecipe = recipeObj => {
        return fetch(`http://localthost:8088/savedRecipes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeObj)
        })
            .then(getSavedRecipes)
    }


    return (
        <SavedRecipeContext.Provider value={{
            savedRecipes,
            setSavedRecipes,
            getSavedRecipes,
            saveRecipe
        }}>
            {props.children}
        </SavedRecipeContext.Provider>
    )
}