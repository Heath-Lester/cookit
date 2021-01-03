
import React, { useState } from "react"
import { apiKey } from "../../.api_key.js"


export const GroceryContext = React.createContext()


export const GroceryProvider = props => {

    const [groceryList, setGroceryList] = useState([])

    const userId = parseInt(localStorage.getItem("app_user_id"))


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


    const deleteGroceryItem = itemId => {
        return fetch(`http://localhost:8088/groceryItems/${itemId}`, {
            method: "DELETE",
        })
            .then(getGroceryList)
    }


    const deleteGroceryList = () => {
        return fetch(`http://localhost:8088/groceryItems/?userId=${userId}`, {
            method: "DELETE",
        })
            .then(getGroceryList)
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
            addGroceryRecipe,
            deleteGroceryItem,
            deleteGroceryList,
            ingredientAquired
        }}>
            {props.children}
        </GroceryContext.Provider>
    )
}