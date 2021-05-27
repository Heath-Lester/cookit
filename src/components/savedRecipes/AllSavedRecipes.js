
import React, { useContext, useEffect } from "react"
import { SelectedSavedRecipe } from "./SelectedSavedRecipe"
import { SavedRecipeContext } from "./RecipeProvider"
import star_icon from "../../images/star_icon.png"
import "./SavedRecipes.css"


export const AllSavedRecipes = props => {

    const { savedRecipes, getSavedRecipes, setSelectedRecipe, favorite, getSingleRecipe, selectedRecipe } = useContext(SavedRecipeContext)

    let alphabetical = savedRecipes.sort((a, b) => (b.title > a.title) ? 1 : -1)
    let sortedRecipes = alphabetical.sort((a, b) => (b.favorite > a.favorite) ? 1 : -1)

    useEffect(() => {
        getSavedRecipes()
    }, [])

    useEffect(() => {
        if (sortedRecipes.length !== 0 && selectedRecipe.id === null) {
            setSelectedRecipe(sortedRecipes[0])
        }
    }, [savedRecipes])

    return (
        <>
            <main className="savedContainer--main">
                <section className="savedContainer--left">

                    <header className="savedRecipe--buttons">
                        <button className="newRecipe" onClick={() => {
                            setSelectedRecipe({})
                            props.history.push(`/newrecipe`)
                        }
                        }>Create New Recipe
                        </button>
                    </header>
                    
                    <article className="savedRecipe--list">
                        {
                            sortedRecipes.map(recipe => {
                                return <div className="myRecipe" id={recipe.id} key={"myRecipe--" + recipe.id}
                                    onClick={() => {
                                        getSingleRecipe(recipe.id)
                                    }}>
                                    <img className="myRecipe__image" src={recipe.image} alt={`Recipe`}></img>

                                    {recipe.favorite ? <h4 className="myRecipe__name">{recipe.title}<img className="myRecipeFavorite__icon" src={star_icon} /></h4> :
                                        <h4 className="myRecipe__name">{recipe.title}</h4>}

                                    {recipe.favorite ? <button className="myRecipe__favorite"
                                        onClick={() => {
                                            favorite(recipe.id)
                                            setSelectedRecipe(recipe.id)
                                        }}>Unfavorite</button> : <button className="myRecipe__favorite"
                                            onClick={() => {
                                                favorite(recipe.id)
                                            }}>Favorite</button>
                                    }
                                </div>
                            }
                            )
                        }
                    </article>
                </section>
                <section className="savedContainer--right">
                    {<SelectedSavedRecipe {...props} />}
                </section>
            </main>
        </>
    )
}