
import React, { useState } from "react"


export const SavedRecipeContext = React.createContext()



export const RecipeProvider = props => {

    const [savedRecipes, setSavedRecipes] = useState([])

    const [selectedRecipe, setSelectedRecipe] = useState({})

    const userToken = localStorage.getItem("cookit_user")


    /// Saved Recipe Requests ///
    const getSavedRecipes = () => {
        return fetch(`http://localhost:8000/recipes`, {
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setSavedRecipes)
    }

    const getSingleRecipe = (recipeId) => {
        return fetch(`http://localhost:8000/recipes/${recipeId}`, {
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setSelectedRecipe)
    }

    const saveRecipe = recipeObj => {
        return fetch(`http://localhost:8000/recipes`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${userToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeObj)
        })
            .then(getSavedRecipes)
    }

    const saveNewRecipe = (recipeObj) => {
        return fetch(`http://localhost:8000/recipes/new`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${userToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeObj)
        })
            .then(getSavedRecipes)
    }

    const deleteRecipe = recipeId => {
        return fetch(`http://localhost:8000/recipes/${recipeId}`, {
            method: "DELETE",
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(getSavedRecipes)
    }

    //// Favorite/Unfavorite Request ////
    const favorite = (recipeId) => {
        return fetch(`http://localhost:8000/recipes/${recipeId}/favorite`, {
            headers: {
                "Authorization": `Token ${userToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favorite)
        })
            .then(getSavedRecipes)
    }

    const editRecipe = (recipeObj, recipeId) => {
        return fetch(`http://localhost:8000/recipe/${recipeId}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${userToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeObj)
        })
            .then(getSavedRecipes)
    }


    return (
        <SavedRecipeContext.Provider value={{
            savedRecipes,
            setSavedRecipes,
            selectedRecipe,
            setSelectedRecipe,
            getSavedRecipes,
            getSingleRecipe,
            saveRecipe,
            saveNewRecipe,
            deleteRecipe,
            favorite,
            editRecipe
        }}>
            {props.children}
        </SavedRecipeContext.Provider>
    )
}