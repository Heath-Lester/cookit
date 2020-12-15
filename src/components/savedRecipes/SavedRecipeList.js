
import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { SavedRecipeContext } from "./RecipeProvider"
import { ViewPortContext } from "../viewport/ViewPortContext"
import { ViewPort } from "../viewport/ViewPort"
import { SearchContext } from "../search/SearchProvider"
import star_icon from "../../images/star_icon.png"


export const SavedRecipeList = props => {

    const { savedRecipes, setSavedRecipe, getSavedRecipes } = useContext(SavedRecipeContext)

    const { getRecipeById } = useContext(SearchContext)

    const { setViewPort } = useContext(ViewPortContext)

    let alphabetical = savedRecipes.sort((a, b) => (b.title > a.title) ? 1 : -1)
    let sortedRecipes = alphabetical.sort((a, b) => (b.favorite > a.favorite) ? 1 : -1)

    useEffect(() => {
        getSavedRecipes()
    }, [])

    return (
        <article className="savedRecipes">
            <header className="allSavedRecipes">
                <h3><Link to={`/savedRecipes/`}>Saved Recipes</Link></h3>
                </header> 

            {
                sortedRecipes.map(recipe => {
                    return <section className="savedRecipe" id={recipe.id} key={"savedRecipe--" + recipe.id}
                        onClick={() => {
                            // debugger
                            // setRecipe({})
                            // setResults([])
                            // props.setSelectedRecipeId(result.id)
                            getRecipeById(recipe.recipeId)
                            setViewPort(2)
                            return <ViewPort {...props} />
                        }}>
                        <img className="recipe__image" src={recipe.image} alt={`Recipe`}></img>
                        {recipe.favorite ? <h3 className="recipe__name">{recipe.title}<img src={star_icon} /></h3> :
                                <h3 className="recipe__name">{recipe.title}</h3>}
                    </section>
                }

                )
            }
        </article>

    )
}