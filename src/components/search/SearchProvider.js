
import React, { useState } from "react"
import { apiKey } from "../../.api_key.js"


export const SearchContext = React.createContext()


export const SearchProvider = props => {
    // debugger
    const [searchResults, setResults] = useState([])

    const [detailedRecipe, setRecipe] = useState({})
    
    const [searchTerms, setTerms] = useState("")
    
    const [autoResults, setAutoResults] = useState([])


    // console.log("searchResults", searchResults)
    // console.log("detailedRecipe", detailedRecipe)
    // console.log("searchTerms", searchTerms)
    // console.log("autoResults", autoResults)
    

    //// Search Requests ////
    const searchRecipeByKeyword = keyword => {
        // debugger
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${keyword}&number=10&instructionsRequired=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => setResults(response.results))
            .then(console.log("search results", searchResults))
            .catch(err => console.error(err))
    }
   

    //// Recipe Requests ////
    const getRecipeById = id => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => setRecipe(response))
        .then(console.log("getRecipeById", detailedRecipe))
        .catch(err => console.error(err))
    }


    const getMultipleRecipesById = idString => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${idString}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
        }


    //// Autocomplete Requests ////
    const recipeAutocomplete = RecipeTerm => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete?query=${RecipeTerm}&number=5`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(setAutoResults)
            .then(console.log(autoResults))
            .catch(err => console.error(err))
    }


    const ingredientAutocomplete = IngredientTerm => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?query=${IngredientTerm}&number=25`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .then(setAutoResults)
            .then(console.log(autoResults))
            .catch(err => console.error(err))
    }


    return (
        <SearchContext.Provider value={{
            searchResults, 
            setResults,
            detailedRecipe,
            setRecipe, 
            searchTerms, 
            setTerms,
            autoResults, 
            setAutoResults, 
            searchRecipeByKeyword, 
            getRecipeById,
            getMultipleRecipesById,
            recipeAutocomplete, 
            ingredientAutocomplete
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}