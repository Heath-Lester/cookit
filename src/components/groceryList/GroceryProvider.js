
import React, { useState } from "react"


export const GroceryContext = React.createContext()


export const GroceryProvider = props => {

    const [groceryList, setGroceryList] = useState([])

    const userToken = localStorage.getItem("cookit_user")


    const getGroceryList = () => {
        return fetch(`http://localhost:8088/grocerylist`, {
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setGroceryList)
    }

    const ingredientAquired = (ingredientId) => {
        return fetch(`https://localhost:8088/grocerylist/${ingredientId}/aquired`, {
            headers: { "Authorization": `Token ${userToken}` },
        })
            .then(getGroceryList)
    }


    return (
        <GroceryContext.Provider value={{
            groceryList,
            setGroceryList,
            getGroceryList,
            ingredientAquired
        }}>
            {props.children}
        </GroceryContext.Provider>
    )
}