
import React, { useState } from "react"
import { apiKey } from "../.api_key.js"


export const SearchContext = React.createContext()


export const SearchProvider = props => {

    const [searchResults, setResults] = useState([])

    const [detailedRecipe, setRecipe] = useState({})
    
    const [searchTerms, setTerms] = useState("")
    
    const [autoResults, setAutoResults] = useState([])
    console.log("searchResults", searchResults)
    console.log("detailedRecipe", detailedRecipe)
    console.log("searchTerms", searchTerms)
    console.log("autoResults", autoResults)
    

    //// Search Requests ////
    const searchRecipeByKeyword = keyword => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${keyword}&number=10&instructionsRequired=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => setResults(response.results))
            .then(console.log(searchResults))
            .catch(err => console.error(err))
    }


    const searchRecipeDetailed = searchObj => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${searchObj.keyword}&diet=${searchObj.diet}&excludeIngredients=${searchObj.excludedIngredients}&intolerances=${searchObj.intolerances}&number=${searchObj.numberOfResults}&offset=${searchObj.SkipResults}&type=${searchObj.TypeOfCourse}&instructionsRequired=${searchObj.includeInstruction}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            })
            .then(setResults);
    }

    
    const searchByIngredients = ingredient => {
        return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredient}&number=100&ranking=1&ignorePantry=false`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        })
        .then(setResults);
    }
    
    //// Recipe Requests ////
    const getRecipebyId = id => {
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

    //// Autocomplete Requests ////
    const recipeAutocomplete = RecipeTerm => {
        // debugger
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
            searchRecipeDetailed, 
            searchByIngredients, 
            getRecipebyId,
            recipeAutocomplete, 
            ingredientAutocomplete
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}