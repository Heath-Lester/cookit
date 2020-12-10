
import React, { useState } from "react"


export const SavedRecipeContext = React.createContext()


export const RecipeProvider = props => {

    const [savedRecipes, setSavedRecipes] = useState([])
    console.log("Saved Recipe: Saved Recipe Provider", savedRecipes)


    /// Saved Recipe Requests ///
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


    /// Saved Ingredients Requests ///
    const getIngredients = recipeId => {
        return fetch(`http://localhost:8088/ingredients/recipeId=${recipeId}`)
            .then(result => result.json())
    }


    const saveIngredients = ingredientsArray => {
        return fetch(`http://localhost:8088/ingredients`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ingredientsArray)
        })
    }


    /// Saved Instructions Requests ///
    const getInstructions = recipeId => {
        return fetch(`http://localhost:8088/instructions/recipeId=${recipeId}`)
            .then(result => result.json())
    }


    const saveInstructions = instructionsArray => {
        return fetch(`http://localhost:8088/instructions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(instructionsArray)
        })
    }


    /// Saved Cook Wear Requests ///
    const getCookWear = recipeId => {
        return fetch(`http://localhost:8088/cookWear/recipeId=${recipeId}`)
            .then(result => result.json())
    }


    const saveCookWear = cookWearArray => {
        return fetch(`http://localhost:8088/cookWear`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cookWearArray)
        })
    }


    return (
        <SavedRecipeContext.Provider value={{
            savedRecipes,
            setSavedRecipes,
            getSavedRecipes,
            saveRecipe,
            getIngredients,
            saveIngredients,
            getInstructions,
            saveInstructions,
            getCookWear,
            saveCookWear
        }}>
            {props.children}
        </SavedRecipeContext.Provider>
    )
}