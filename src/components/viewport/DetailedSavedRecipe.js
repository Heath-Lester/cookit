
import React, { useContext } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { ViewPortContext } from "./ViewPortContext"
import { MealContext } from "../meal/MealProvider"
import { MealBuilder } from "../meal/MealBuilder"
import "../savedRecipes/SavedRecipes.css"


export const DetailedSavedRecipe = props => {


    const { selectedRecipe, getSavedRecipes } = useContext(SavedRecipeContext)

    const { setViewPort } = useContext(ViewPortContext)

    const { meals, addMeal } = useContext(MealContext)

    const makeMeal = (recipe) => {

        let checkedMeal = meals.find(m => {
            if (m.saved_recipe !== null) {
                return m.saved_recipe.id === recipe.id
            }
        })

        if (!checkedMeal) {
            addMeal({ spoonacularId: recipe.spoonacular_id, savedRecipeId: recipe.id })
        } else if (checkedMeal) {
            alert(`Recipe ${checkedMeal.id} has already been added to Meal queue!`)
        }

    }

    if (!selectedRecipe || selectedRecipe.id === null) {
        return <></>

    } else {
        return (
            <>
                <section className="selectedRecipe" id={selectedRecipe.id} autoFocus key={selectedRecipe.id}>
                    <header className="selectedRecipe__title"><h2 className="selectedRecipe__name">{selectedRecipe.title}</h2></header>
                    <div className="selectedRecipe__buttons">
                        <button className="selectedRecipe__returnButton" id={`Return--${selectedRecipe.id}`} type="submit"
                            onClick={event => {
                                event.preventDefault()
                                setViewPort(1)
                            }}>Back to Search Results
                        </button>
                        <button className="selectedRecipe__addMeal" id={`Add--${selectedRecipe.id}`} type="submit"
                            onClick={event => {
                                event.preventDefault()
                                getSavedRecipes()
                                makeMeal(selectedRecipe)
                                return <MealBuilder />
                            }}>Add to Meal
                    </button>
                    </div>


                    <img className="selectedRecipe__image" src={selectedRecipe.image} alt={`Recipe Image`}></img>

                    <div className="selectedSavedRecipe__basicInfo">
                        {selectedRecipe.sourceName ? <p className="selectedSavedRecipe__author">Author: <a href={`http://www.google.com/search?q=${selectedRecipe.sourceName}&btnI`}>{selectedRecipe.sourceName}</a></p> :
                            <p className="selectedSavedRecipe__author">Author: {selectedRecipe.source_name}</p>}
                        <a className="selectedRecipe__webLink" href={selectedRecipe.source_url}>Original Recipe</a>
                        <p className="selectedRecipe__servings">Serves {selectedRecipe.servings}</p>
                        <p className="selectedRecipe__time">Ready in {selectedRecipe.ready_in_minutes} minutes</p>
                    </div>
                    {selectedRecipe.summary ?
                        <p className="selectedRecipe__summary" dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></p>
                        :
                        <></>}
                    <ul className="selectedRecipe__ingredients" key="ingredients">Ingredients:
                        {
                            selectedRecipe.ingredients.map(ingredient => {
                                return <li className="ingredient" key={"ingredient--" + ingredient.id}>{ingredient.original}</li>
                            })
                        }
                    </ul>
                    <ul className="selectedRecipe__equipment" key="equipment">Cook Ware:
                        {
                            selectedRecipe.equipment.map(item => {
                                return <li className="equipment" key={"equipment--" + item.id}>{item.name}</li>
                            })
                        }

                    </ul>
                    <ol className="selectedRecipe__instructions" key="instructions">Instructions:
                        {
                            selectedRecipe.instructions.map(instruction => {
                                return <li className="instruction" key={"step--" + instruction.step_number}>{instruction.instruction}</li>
                            })
                        }
                    </ol>
                </section>
            </>
        )
    }
}

