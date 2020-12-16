
import React, { useState } from "react"


export const SavedRecipeContext = React.createContext()



export const RecipeProvider = props => {

    const [savedRecipes, setSavedRecipes] = useState([])

    const [selectedRecipe, setSelectedRecipe] = useState({})

    const userId = parseInt(localStorage.getItem("app_user_id"))


    /// Saved Recipe Requests ///
    const getSavedRecipes = () => {
        debugger
        return fetch(`http://localhost:8088/savedRecipes/?userId=${userId}`)
            .then(result => result.json())
            .then(setSavedRecipes)
    }


    const saveRecipe = recipeObj => {
        return fetch(`http://localhost:8088/savedRecipes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeObj)
        })
            .then(getSavedRecipes)
    }

    const deleteRecipe = recipeId => {
        return fetch(`http://localhost:8088/savedRecipes/${recipeId}`, {
            method: "DELETE",
        })
            .then(getSavedRecipes)
    }

    //// Favorite/Unfavorite Request ////
    const favorite = (savedRecipeId, favorite) => {
        return fetch(`http://localhost:8088/savedRecipes/${savedRecipeId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(favorite)
        })
            .then(getSavedRecipes)
    }

    /// Saved Ingredients Requests ///
    const getIngredients = recipeId => {
        return fetch(`http://localhost:8088/ingredientsJoin/?recipeId=${recipeId}`)
            .then(result => result.json())
    }


    const saveIngredients = ingredientsArray => {
        return fetch(`http://localhost:8088/ingredientsJoin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ingredientsArray)
        })
    }


    /// Saved Instructions Requests ///
    const getInstructions = recipeId => {
        return fetch(`http://localhost:8088/instructions/?recipeId=${recipeId}`)
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
    // const getCookWear = recipeId => {
    //     return fetch(`http://localhost:8088/cookWear/recipeId=${recipeId}`)
    //         .then(result => result.json())
    // }


    // const saveCookWear = cookWearArray => {
    //     return fetch(`http://localhost:8088/cookWear`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(cookWearArray)
    //     })
    // }


    return (
        <SavedRecipeContext.Provider value={{
            savedRecipes,
            setSavedRecipes,
            selectedRecipe,
            setSelectedRecipe,
            getSavedRecipes,
            saveRecipe,
            deleteRecipe,
            favorite,
            getIngredients,
            saveIngredients,
            getInstructions,
            saveInstructions,
            // getCookWear,
            // saveCookWear
        }}>
            {props.children}
        </SavedRecipeContext.Provider>
    )
}