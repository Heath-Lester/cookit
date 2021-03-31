
import React, { useContext } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { ViewPortContext } from "./ViewPortContext"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "../meal/MealProvider"
import { MealBuilder } from "../meal/MealBuilder"
import "./ViewPort.css"


export const DetailedResult = () => {

    let userToken = localStorage.getItem("cookit_user")

    const { setViewPort } = useContext(ViewPortContext)

    const { detailedRecipe } = useContext(SearchContext)

    const { meals, addMeal } = useContext(MealContext)

    const { savedRecipes, saveRecipe, getSavedRecipes } = useContext(SavedRecipeContext)



    if (detailedRecipe.hasOwnProperty("id") === false) {
        return <></>

    } else {

        let ingredientsArray = []
        let instructionsArray = []
        let equipmentArray = []

        detailedRecipe.extendedIngredients.map(ingredient => ingredientsArray.push(ingredient))
        detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => instructionsArray.push(step)))
        detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => step.equipment.map(item => { if (item.hasOwnProperty("id") && equipmentArray.filter(e => e.id === item.id).length === 0) { equipmentArray.push(item) } })))


        const constructRecipe = () => {

            if (savedRecipes.filter(r => r.spoonacular_id === detailedRecipe.id).length > 0) {
                window.alert(`Recipe ID of ${detailedRecipe.id} already exists for this user. (ID ${userToken})`)

            } else {
                
                const currentServings = detailedRecipe.servings ? detailedRecipe.servings : null
                const minutes = detailedRecipe.readyInMinutes ? detailedRecipe.readyInMinutes : null
                saveRecipe({
                    spoonacularId: detailedRecipe.id,
                    title: detailedRecipe.title,
                    image: detailedRecipe.image,
                    sourceName: detailedRecipe.sourceName,
                    sourceUrl: detailedRecipe.sourceUrl,
                    servings: currentServings,
                    readyInMinutes: minutes,
                    summary: detailedRecipe.summary,
                    ingredients: ingredientsArray,
                    instructions: instructionsArray,
                    equipment: equipmentArray
                })
            }
        }

        

        const makeMeal = (checkedRecipe) => {

            const checkedMeal= meals.find(m => m.spoonacular_id === detailedRecipe.id)

            if (!checkedMeal) {

                if (checkedRecipe) {
                    addMeal({ spoonacularId: detailedRecipe.id, savedRecipeId: checkedRecipe.id })
                } else if (!checkedRecipe) {
                    addMeal({
                        spoonacularId: detailedRecipe.id,
                        savedRecipeId: null,
                        ingredients: ingredientsArray,
                        instructions: instructionsArray,
                        equipment: equipmentArray
                    })
                }
            } else if (checkedMeal) {
                alert(`Recipe ${checkedMeal.id} has already been added to Meal queue!`)
            }
        }


        let parsedEquipment = []

        let i = 0


        return (
            <>
                <section className="detailedRecipe" id={"detailedRecipe" + detailedRecipe.id} key={"detailedRecipe" + detailedRecipe.id}>
                    <div className="buttons">
                        <button className="detailedRecipe__saveButton" id={`Save--${detailedRecipe.id}`} type="submit"
                            onClick={event => {
                                event.preventDefault()
                                setViewPort(1)
                            }}>Back to Search Results
                        </button>

                        <button className="detailedRecipe__saveButton" id={`Save--${detailedRecipe.id}`} type="submit"
                            onClick={event => {
                                event.preventDefault()
                                getSavedRecipes()
                                constructRecipe()
                            }}>Save Recipe
                        </button>

                        <button className="detailedRecipe__addMeal" id={`Add--${detailedRecipe.id}`} type="submit"
                            onClick={event => {
                                event.preventDefault()
                                getSavedRecipes()
                                makeMeal(savedRecipes.find(r => r.spoonacular_id === detailedRecipe.id))
                                return <MealBuilder />
                            }}>Add to Meal
                        </button>
                    </div>

                    <h2 className="detailedRecipe__name">{detailedRecipe.title}</h2>
                    <img className="detailedRecipe__image" src={detailedRecipe.image} alt={`Recipe Image`}></img>
                    <h3 className="detailedRecipe__author">Author: <a href={`http://www.google.com/search?q=${detailedRecipe.sourceName}&btnI`}>{detailedRecipe.sourceName}</a></h3>
                    <a className="detailedRecipe__webLink" href={detailedRecipe.sourceUrl}>Original Recipe</a>
                    <p className="detailedRecipe__servings">Serves {detailedRecipe.servings}</p>
                    <p className="detailedRecipe__time">Ready in {detailedRecipe.readyInMinutes} minutes</p>
                    <p className="detailedRecipe__summary" dangerouslySetInnerHTML={{ __html: detailedRecipe.summary }}></p>
                    <ul className="detailedRecipe__ingredients" key="ingredients">Ingredients
                        {
                            detailedRecipe.extendedIngredients.map(ingredient => {
                                i++
                                return <li className="ingredient" key={"ingredient--" + ingredient.id + "--" + i}>{ingredient.original}</li>
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

