
import React, { useState } from "react"


export const GroceryContext = React.createContext()


export const GroceryProvider = props => {

    const [groceryList, setGroceryList] = useState([])

    const [ingredientsList, setIngredientsList] = useState([])

    const userId = parseInt(localStorage.getItem("cookit_user"))
    
    console.log("GroceryProvider", ingredientsList)

    const getGroceryList = () => {
        return fetch(`http://localhost:8088/groceryItems/?userId=${userId}`)
            .then(result => result.json())
            .then(setGroceryList)
    }


    const addGroceryRecipe = groceryObj => {
        return fetch(`http://localhost:8088/groceryItems`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(groceryObj)
        })
            .then(getGroceryList)
    }


    const getRecipeList = recipeId => {
        // debugger
        return fetch(`http://localhost:8088/groceryItems/?recipeId=${recipeId}`)
        .then(result => result.json())
        .then(result => setIngredientsList(result))
}

    const deleteGroceryRecipe= recipeId => {
        return fetch(`http://localhost:8088/groceryItems/?recipeId=${recipeId}`)
        .then(result => result.json())
        .then(result => result.map(item => {
            return fetch(`http://localhost:8088/groceryItems/${item.id}`, {
                method: "DELETE",
            })
        }))
        }


    const ingredientAquired = (ingredientId, aquired) => {
        return fetch(`https://localhost:8088/groceryItems/${ingredientId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aquired)

        })
            .then(getGroceryList)
    }

    
    return (
        <GroceryContext.Provider value={{
            groceryList,
            setGroceryList,
            ingredientsList,
            setIngredientsList,
            addGroceryRecipe,
            getRecipeList,
            deleteGroceryRecipe,
            ingredientAquired
        }}>
            {props.children}
        </GroceryContext.Provider>
    )
}