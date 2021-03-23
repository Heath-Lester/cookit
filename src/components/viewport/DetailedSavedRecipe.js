
import React, { useContext } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { MealContext } from "../meal/MealProvider"
import { MealBuilder } from "../meal/MealBuilder"
import "../savedRecipes/SavedRecipes.css"


export const DetailedSavedRecipe = props => {


    const { selectedRecipe, getSavedRecipes } = useContext(SavedRecipeContext)

    const { meals, addMeal } = useContext(MealContext)

    const makeMeal = (checkedMeal) => {
        if (!checkedMeal) {
            addMeal({ spoonacularId: selectedRecipe.spoonacular_id, savedRecipeId: selectedRecipe.id })
        } else if (checkedMeal) {
            alert(`Recipe ${checkedMeal.id} has already been added to Meal queue!`)
        }

    }

    if (selectedRecipe.hasOwnProperty("id") === false) {
        return <></>

    } else {

        return (
            <>
                <div className="buttons">
                    <button className="selectedRecipe__addMeal" id={`Add--${selectedRecipe.id}`} type="submit"
                        onClick={event => {
                            event.preventDefault()
                            getSavedRecipes()
                            makeMeal(meals.find(m => m.id === selectedRecipe.id))
                            return <MealBuilder />
                        }}>Add to Meal
                    </button>
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
                                return <li className="ingredient" key={"ingredient--" + ingredient.id}>{ingredient.original}</li>
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

