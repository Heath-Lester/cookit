
import React, { useContext } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { GroceryContext } from "../groceryList/GroceryProvider"
import { SearchContext } from "../search/SearchProvider"
import { MealContext } from "../meal/MealProvider"
import { MealBuilder } from "../meal/MealBuilder"
import "./ViewPort.css"


export const DetailedResult = () => {

    let userToken = localStorage.getItem("cookit_user")

    const { detailedRecipe } = useContext(SearchContext)

    const { addMeal, meals } = useContext(MealContext)

    const { addGroceryRecipe } = useContext(GroceryContext)

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

            } else if (detailedRecipe.id < 1) {

                window.alert(`Recipe has ID of ${detailedRecipe.id} and is currently unable to be saved`)

            } else {
                debugger
                saveRecipe({
                    spoonacularId: detailedRecipe.id,
                    title: detailedRecipe.title,
                    image: detailedRecipe.image,
                    sourceName: detailedRecipe.sourceName,
                    sourceUrl: detailedRecipe.sourceUrl,
                    servings: detailedRecipe.servings,
                    readyInMinutes: detailedRecipe.readyInMinutes,
                    summary: detailedRecipe.summary,
                    ingredients: ingredientsArray,
                    instructions: instructionsArray,
                    equipment: equipmentArray
                })
            }
        }

        // const constructIngredientList = () => {
        //     console.log("Detailed Result", ingredientsArray)
        //     ingredientsArray.map(ingredient => {
        //         // debugger
        //         return addGroceryRecipe({
        //             userId,
        //             recipeId: detailedRecipe.id,
        //             ingredientId: ingredient.id,
        //             amount: ingredient.amount,
        //             unit: ingredient.measures.us.unitLong,
        //             aquired: false
        //         })
        //     })
        // }


        let parsedEquipment = []

        let i = 0


        return (
            <>
                <section className="detailedRecipe" id={"detailedRecipe" + detailedRecipe.id} key={"detailedRecipe" + detailedRecipe.id}>
                    <div className="buttons">
                        <button className="detailedRecipe__saveButton" id={`Save--${detailedRecipe.id}`} type="submit"
                            onClick={event => {
                                event.preventDefault()
                                getSavedRecipes()
                                constructRecipe()
                            }}>Save Recipe
                        </button>

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

