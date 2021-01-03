
import React, { useState } from "react"
import { apiKey } from "../../.api_key.js"


export const SearchContext = React.createContext()


export const SearchProvider = props => {

    const [searchResults, setResults] = useState([])

    const [detailedRecipe, setRecipe] = useState({})

    const [searchTerms, setTerms] = useState("")

    const [autoResults, setAutoResults] = useState([])

    const [extracedRecipe, setExtracedRecipe] = useState({})

    const [ingredient, setIngredient] = useState({})


    //// Search Requests ////
    const searchRecipeByKeyword = keyword => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${keyword}&number=100&instructionsRequired=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => setResults(response.results))
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

    const extractRecipeByUrl = url => {

        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract?url=${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => setRecipe(response))
    }


    //// Ingredient Requests ////
    const getIngredientById = id => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/${id}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => setIngredient(response))
    }


    //// Autocomplete Requests ////
    const recipeAutocomplete = RecipeTerm => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete?query=${RecipeTerm}&number=4`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(setAutoResults)
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
            extracedRecipe,
            setExtracedRecipe,
            ingredient,
            setIngredient,
            searchRecipeByKeyword,
            getRecipeById,
            getMultipleRecipesById,
            extractRecipeByUrl,
            getIngredientById,
            recipeAutocomplete,
            ingredientAutocomplete
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}