
import React, { useContext } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import "../savedRecipes/SavedRecipes.css"


export const DetailedSavedRecipe = props => {


    const { selectedRecipe } = useContext(SavedRecipeContext)


    if (selectedRecipe.hasOwnProperty("id") === false) {
        return <></>

    } else {

        return (
            <>
                <div className="buttons">
                    {/* <button className="detailedRecipe__addMeal" id={`Add--${detailedRecipe.id}`} type="submit"
                            onClick={event => {
                                event.preventDefault()
                                if (meals.filter(m => m.recipeId === detailedRecipe.id).length === 0) {
                                    constructIngredientList()
                                    addMeal({ userId, recipeId: detailedRecipe.id })
                                    return <MealBuilder />
                                } else {
                                    window.alert(`Recipe ${detailedRecipe.id} has already beed added`)
                                }
                            }}>Add to Meal
                        </button> */}
                </div>

                <header className="selectedRecipe__title"><h2 className="selectedRecipe__name">{selectedRecipe.title}</h2></header>
                <section className="selectedRecipe" id={selectedRecipe.id} autoFocus key={selectedRecipe.id}>

                    <img className="selectedRecipe__image" src={selectedRecipe.image} alt={`Recipe Image`}></img>

                    <h3 className="selectedRecipe__author">Author: <a href={`http://www.google.com/search?q=${selectedRecipe.sourceName}&btnI`}>{selectedRecipe.sourceName}</a></h3>
                    <a className="selectedRecipe__webLink" href={selectedRecipe.source_url}>Original Recipe</a>
                    <p className="selectedRecipe__time">Serves {selectedRecipe.servings}</p>
                    <p className="selectedRecipe__time">Ready in {selectedRecipe.ready_in_minutes} minutes</p>
                    <p className="selectedRecipe__summary" dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></p>
                    <ul className="selectedRecipe__ingredients" key="ingredients">Ingredients
                        {
                            selectedRecipe.ingredients.map(ingredient => {
                                return <li className="ingredient" key={"ingredient--" + ingredient.id}>{ingredient.name}</li>
                            })
                        }
                    </ul>
                    <ul className="selectedRecipe__equipment" key="equipment">Cook Ware
                        {
                            selectedRecipe.equipment.map(item => {
                                return <li className="equipment" key={"equipment--" + item.id}>{item.name}</li>
                            })
                        }

                    </ul>
                    <ol className="selectedRecipe__instructions" key="instructions">Instructions
                        {
                            selectedRecipe.instructions.map(instruction => {
                                return <li className="instruction" key={"step--" + instruction.instruction.id}>{instruction.instruction}</li>
                            })
                        }
                    </ol>
                </section>
            </>
        )
    }
}

