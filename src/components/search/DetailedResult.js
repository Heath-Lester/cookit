
import React, { useContext, useRef, useEffect } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "./SearchProvider"
import "./Search.css"


export const SelectedRecipe = props => {

    const { detailedRecipe, getRecipeById } = useContext(SearchContext)

    let userId = parseInt(localStorage.getItem("app_user_id"))

    useEffect(() => {
        getRecipeById(props.selectedRecipeId)
    }, [])

    const { savedRecipes,
        saveRecipe,
        saveIngredients,
        saveInstructions,
        saveCookWear,
        getSavedRecipes } = useContext(SavedRecipeContext)


    if (detailedRecipe.hasOwnProperty("id") === false) {

        return <></>

    } else {
        let recipeId
        let title
        let image


        // debugger

        // if (detailedRecipe.userId) {

        let ingredientsArray = []
        let equipmentArray = []
        let instructionsArray = []


        detailedRecipe.extendedIngredients.map(ingredient => ingredientsArray.push(ingredient))
        detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => step.equipment.map(item => { if (item.hasOwnProperty("id") && equipmentArray.filter(e => e.id === item.id).length === 0) { equipmentArray.push(item) } })))
        detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => instructionsArray.push(step)))

        // setIngredients(ingredientsArray)
        // setEquipment(equipmentArray)
        // setInstructions(instructionsArray)

        // }

        const constructRecipe = () => {

            debugger

            if (savedRecipes.filter(r => r.recipeId === recipeId).length > 0) {
                window.alert(`Recipe ID of ${recipeId} already exists for this user. (ID ${userId})`)
            } else {
                saveRecipe({
                    userId,
                    recipeId: detailedRecipe.id,
                    title: detailedRecipe.title,
                    image: detailedRecipe.image,
                    favorite: false,
                    edited: false
                })
                    .then(saveIngredients({
                        userId,
                        recipeId,
                        ingredients: ingredientsArray
                    }))
                    .then(saveCookWear({
                        userId,
                        recipeId,
                        equipment: equipmentArray
                    }))
                    .then(saveInstructions({
                        userId,
                        recipeId,
                        instructions: instructionsArray
                    }))
            }
        }

        console.log("ingredientsArray", ingredientsArray, "equipmentArray", equipmentArray, "instructionsArray", instructionsArray)

        let parsedEquipment = []

        return (
            <>
                <section className="detailedRecipe" id={detailedRecipe.id} autoFocus key={detailedRecipe.id}>
                    <button className="detailedRecipe__saveButton" id={`Save--${detailedRecipe.id}`}
                        onClick={event => {
                            event.preventDefault()
                            getSavedRecipes(userId)
                                .then(constructRecipe())
                        }}>Save Recipe
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
                                return <li className="ingredient" key={ingredient.id}>{ingredient.original}</li>
                            })
                        }
                    </ul>
                    <ul className="detailedRecipe__equipment" key="equipment">Cook Ware
                        {
                            detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => step.equipment.map(item => {
                                if (item.hasOwnProperty("id") && parsedEquipment.filter(e => e.id === item.id).length === 0) {
                                    parsedEquipment.push(item)
                                    return <li className="equipment" key={item.id}>{item.name}</li>
                                }
                            })))
                        }

                    </ul>
                    <ol className="detailedRecipe__instructions" key="instructions">Instructions
                        {
                            detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => {
                                return <li className="instruction" key={step.number}>{step.step}</li>
                            }))
                        }
                    </ol>
                </section>
            </>
        )
    }
}
