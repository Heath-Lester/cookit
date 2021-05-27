
import React, { useEffect, useContext } from "react"
import { SavedRecipeContext } from "./RecipeProvider"
import { ViewPortContext } from "../viewport/ViewPortContext"
import { ViewPort } from "../viewport/ViewPort"
import { Link } from "react-router-dom"
import star_icon from "../../images/star_icon.png"
import "./SavedRecipes.css"


export const SavedRecipeList = props => {

    const { savedRecipes, getSavedRecipes, getSingleRecipe, setSelectedRecipe } = useContext(SavedRecipeContext)

    const { setViewPort } = useContext(ViewPortContext)

    let alphabetical = savedRecipes.sort((a, b) => (b.title > a.title) ? 1 : -1)
    let sortedRecipes = alphabetical.sort((a, b) => (b.favorite > a.favorite) ? 1 : -1)

    useEffect(() => {
        getSavedRecipes()
    }, [])

    return (
        <>
            <h2 className="section--title">Saved Recipes</h2>
            <article className="savedRecipes">

                {
                    sortedRecipes.map(recipe => {
                        return <div className="savedRecipe" id={recipe.id} key={"savedRecipe--" + recipe.id}
                            onClick={() => {
                                setSelectedRecipe()
                                getSingleRecipe(recipe.id)
                                setViewPort(3)
                                return <ViewPort {...props} />
                            }}>
                            <img className="recipe__image" src={recipe.image} alt={`Recipe`}></img>
                            {recipe.favorite ? <h4 className="recipe__name">{recipe.title}<img className="favorite__icon" src={star_icon} /></h4> :
                                <h4 className="recipe__name">{recipe.title}</h4>}
                        </div>
                    }

                    )
                }
            </article>
        </>

    )
}