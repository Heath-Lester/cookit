
import React, { useState } from "react"
// import { apiKey } from "../../.api_key.js"
// http://localhost:8000/
// http://cookit-server-dev2.us-east-1.elasticbeanstalk.com//


export const GroceryContext = React.createContext()


export const GroceryProvider = props => {

    const [groceryList, setGroceryList] = useState([])

    const [recipe, setRecipe] = useState({ title: null, image: null, extendedIngredients: [] })

    const userToken = localStorage.getItem("cookit_user")


    const getGroceryList = () => {
        return fetch(`http://cookit-server-dev2.us-east-1.elasticbeanstalk.com/grocerylist`, {
            headers: { "Authorization": `Token ${userToken}` }
        })
            .then(result => result.json())
            .then(setGroceryList)
    }

    const ingredientAquired = (ingredientId) => {
        return fetch(`http://cookit-server-dev2.us-east-1.elasticbeanstalk.com/grocerylist/${ingredientId}/aquired`, {
            headers: { "Authorization": `Token ${userToken}` },
        })
            .then(getGroceryList)
    }

    const spoonacularRecipe = recipeId => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${process.env.apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => setRecipe(response))
    }


    return (
        <GroceryContext.Provider value={{
            recipe,
            groceryList,
            setGroceryList,
            getGroceryList,
            ingredientAquired,
            spoonacularRecipe
        }}>
            {props.children}
        </GroceryContext.Provider>
    )
}