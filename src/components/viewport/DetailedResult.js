
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "../search/SearchProvider"
import React, { useContext, useEffect } from "react"
import { MealContext } from "../meal/MealProvider"
import { MealBuilder } from "../meal/MealBuilder"
import "./ViewPort.css"


export const DetailedResult = () => {

    let userId = parseInt(localStorage.getItem("app_user_id"))

    const { detailedRecipe } = useContext(SearchContext)

    const { savedRecipes,
        saveRecipe,
        // saveIngredients,
        // saveInstructions,
        // saveCookWear,
        getSavedRecipes } = useContext(SavedRecipeContext)

    const { addMeal, meals } = useContext(MealContext)



    if (detailedRecipe.hasOwnProperty("id") === false) {
        return <></>

    } else {
        console.log(detailedRecipe)
        let ingredientsArray = []
        let equipmentArray = []
        let instructionsArray = []

        detailedRecipe.extendedIngredients.map(ingredient => ingredientsArray.push(ingredient))
        detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => step.equipment.map(item => { if (item.hasOwnProperty("id") && equipmentArray.filter(e => e.id === item.id).length === 0) { equipmentArray.push(item) } })))
        detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => instructionsArray.push(step)))


        const constructRecipe = () => {
            console.log(savedRecipes)

            if (savedRecipes.filter(r => r.recipeId === detailedRecipe.id).length > 0) {
                window.alert(`Recipe ID of ${detailedRecipe.id} already exists for this user. (ID ${userId})`)

            } else {

                saveRecipe({
                    userId,
                    recipeId: detailedRecipe.id,
                    title: detailedRecipe.title,
                    image: detailedRecipe.image,
                    favorite: false,
                    edited: false
                })
                // .then(ingredientsArray.map(i => saveIngredients({
                //     userId,
                //     recipeId: detailedRecipe.id,
                //     ingredientId: i.id,
                //     name: i.name,
                //     unit: i.unit,
                //     amount: i.unit,
                //     aisle: i.aisle
                // })))
                // .then(equipmentArray.map(e => saveEquipment({
                //     userId,
                //     recipeId: detailedRecipe.id,
                //     equipmentId: e.id,
                //     name: e.name,
                // })))
                // .then(instructionArray.map(i => saveInstructions({
                //     userId,
                //     recipeId: detailedRecipe.id,
                //     number: i.number,
                //     step: i.step
                // })))
            }
        }


        let parsedEquipment = []


        return (
            <>
                <section className="detailedRecipe" id={detailedRecipe.id} key={detailedRecipe.id}>
                    <button className="detailedRecipe__saveButton" id={`Save--${detailedRecipe.id}`}
                        onClick={event => {
                            event.preventDefault()
                            getSavedRecipes()
                            constructRecipe()
                        }}>Save Recipe
                    </button>

                    <button className="detailedRecipe__addMeal" id={`Add--${detailedRecipe.id}`}
                        onClick={event => {
                            event.preventDefault()
                            if (meals.filter(m => m.recipeId === detailedRecipe.id).length === 0) {
                                addMeal({ userId, recipeId: detailedRecipe.id, title: detailedRecipe.title, image: detailedRecipe.image, readyInMinutes: detailedRecipe.readyInMinutes })
                                return <MealBuilder />
                            } else {
                                window.alert(`Recipe ${detailedRecipe.id} has already beed added`)
                            }
                        }}>Add to Meal
                    </button>

                    <h2 className="detailedRecipe__name">{detailedRecipe.title}</h2>
                    <img className="detailedRecipe__image" src={detailedRecipe.image} alt={`Recipe Image`}></img>
                    <h3 className="detailedRecipe__author">Author: <a href={`http://www.google.com/search?q=${detailedRecipe.sourceName}&btnI`}>{detailedRecipe.sourceName}</a></h3>
                    <a className="detailedRecipe__webLink" href={detailedRecipe.sourceUrl}>Original Recipe</a>
                    <p className="detailedRecipe__time">Serves {detailedRecipe.servings}</p>
                    <p className="detailedRecipe__time">Ready in {detailedRecipe.readyInMinutes} minutes</p>
                    <p className="detailedRecipe__summary" dangerouslySetInnerHTML={{ __html: detailedRecipe.summary }}></p>
                    <ul className="detailedRecipe__ingredients" key="ingredients">Ingredients
                        {
                            detailedRecipe.extendedIngredients.map(ingredient => {
                                return <li className="ingredient" key={"ingredient--" + ingredient.id}>{ingredient.original}</li>
                            })
                        }
                    </ul>
                    <ul className="detailedRecipe__equipment" key="equipment">Cook Ware
                        {
                            detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => step.equipment.map(item => {
                                if (item.hasOwnProperty("id") && parsedEquipment.filter(e => e.id === item.id).length === 0) {
                                    parsedEquipment.push(item)
                                    return <li className="equipment" key={"equipment--" + item.id}>{item.name}</li>
                                }
                            })))
                        }

                    </ul>
                    <ol className="detailedRecipe__instructions" key="instructions">Instructions
                        {
                            detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => {
                                return <li className="instruction" key={"step--" + step.number}>{step.step}</li>
                            }))
                        }
                    </ol>
                </section>
            </>
        )
    }
}
