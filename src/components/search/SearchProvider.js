
import React, { useState } from "react"
import { apiKey } from "../.api_key.js"


export const SearchContext = React.createContext()


export const SearchProvider = props => {

    const [searchTerms, setTerms] = useState("")

    const [searchResults, setResults] = useState([])

    const [autoResults, setAutoResults] = useState([])


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
            searchTerms, setTerms, searchResults, setResults, autoResults, setAutoResults, searchRecipeByKeyword, searchRecipeDetailed, searchByIngredients, recipeAutocomplete, ingredientAutocomplete
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}