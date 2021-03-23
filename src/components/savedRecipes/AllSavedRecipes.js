
import React, { useContext, useEffect } from "react"
import { SelectedSavedRecipe } from "./SelectedSavedRecipe"
import { SavedRecipeContext } from "./RecipeProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import star_icon from "../../images/star_icon.png"
import "./SavedRecipes.css"


export const AllSavedRecipes = props => {

    const { savedRecipes, getSavedRecipes, setSelectedRecipe, favorite, getSingleRecipe } = useContext(SavedRecipeContext)

    let alphabetical = savedRecipes.sort((a, b) => (b.title > a.title) ? 1 : -1)
    let sortedRecipes = alphabetical.sort((a, b) => (b.favorite > a.favorite) ? 1 : -1)

    useEffect(() => {
        getSavedRecipes()
    }, [])


    return (
        <>
            <header className="savedRecipe--header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
                <h1 className="title" >All Recipes</h1>
                <h3 className="link"><Link to={'/'}>Back</Link></h3>
            </header>

            <main className="container--main">

                <section className="savedContainer--left">
                    {
                        sortedRecipes.map(recipe => {
                            return <section className="savedRecipe" id={recipe.id} key={"savedRecipe--" + recipe.id}
                                onClick={() => {
                                    getSingleRecipe(recipe.id)
                                }}>
                                <img className="recipe__image" src={recipe.image} alt={`Recipe`}></img>

                                {recipe.favorite ? <h4 className="recipe__name">{recipe.title}<img className="favorite__icon" src={star_icon} /></h4> :
                                    <h4 className="recipe__name">{recipe.title}</h4>}

                                {recipe.favorite ? <button className="recipe__favorite"
                                    onClick={() => {
                                        favorite(recipe.id)
                                        setSelectedRecipe(recipe.id)
                                    }}>Unfavorite</button> : <button className="recipe__favorite"
                                        onClick={() => {
                                            favorite(recipe.id)
                                        }}>Favorite</button>
                                }

                            </section>
                        }

                        )
                    }
                </section>
                <section className="container--right">
                    {<SelectedSavedRecipe {...props} />}
                </section>
            </main>
        </>
    )
}