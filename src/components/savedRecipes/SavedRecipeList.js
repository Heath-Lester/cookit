
import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { SavedRecipeContext } from "./RecipeProvider"
import { SearchContext } from "../search/SearchProvider"


export const SavedRecipeList = props => {

    const { savedRecipes, setSavedRecipe, getSavedRecipes } = useContext(SavedRecipeContext)

    const { searchRecipeByKeyword } = useContext(SearchContext)

    useEffect(() => {
        getSavedRecipes()
    }, [])

    return (
        <article className="savedRecipes">
            <header className="allSavedRecipes">
                <Link to={`/savedRecipes/`}>Saved Recipes</Link>
                </header> 

            {
                savedRecipes.map(recipe => {
                    return <section className="savedRecipe" id={recipe.id} key={"savedRecipe--" + recipe.id}
                        onClick={() => {
                            // setRecipe({})
                            // setrecipes([])
                            // props.setSelectedRecipeId(recipe.id)
                        }}>
                        <img className="recipe__image" src={recipe.image} alt={`Recipe`}></img>
                        <h3 className="recipe__name">{recipe.title}</h3>
                    </section>
                }

                )
            }
        </article>

    )
}