
import React, { useContext, useEffect } from "react"
import { SavedRecipeContext } from "./RecipeProvider"
import { SelectedSavedRecipe } from "./SelectedSavedRecipe"
import { SearchContext } from "../search/SearchProvider"
import "./SavedRecipes.css"
import { Link } from "react-router-dom"


export const AllSavedRecipes = props => {

    const { savedRecipes, getSavedRecipes, setSelectedRecipe, selectedRecipe } = useContext(SavedRecipeContext)

    const { getRecipeById } = useContext(SearchContext)

    useEffect(() => {
        getSavedRecipes()
    }, [])

    // const clickedRecipe = () => {
    //     return recipe.id
    // }

    return (
        <>
        <header className="savedRecipe--header"><h1>All Recipes</h1></header>
        <h3><Link to={'/'}>Back</Link></h3>
        <section className="container--left">
            {
                savedRecipes.map(recipe => {
                    return <section className="savedRecipe" id={recipe.id} key={"savedRecipe--" + recipe.id}
                    onClick={() => {
                        // clickedRecipe(recipe.id)
                        console.log(recipe.recipeId)
                        setSelectedRecipe(recipe.recipeId)
                        console.log("selectedRecipe", selectedRecipe)

                    }}>
                        <img className="recipe__image" src={recipe.image} alt={`Recipe`}></img>
                        <h3 className="recipe__name">{recipe.title}</h3>
                    </section>
                }
                
                )
            }
            </section>
            <section className="container--right">
                {<SelectedSavedRecipe {...props}/>}
            </section>
        </>
    )
}