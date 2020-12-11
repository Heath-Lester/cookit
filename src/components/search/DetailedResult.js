
import React, { useContext, useState } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { SearchContext } from "./SearchProvider"
import "./Search.css"


export const SelectedRecipe = props => {
    // debugger
    const { detailedRecipe } = useContext(SearchContext)

    const { savedRecipes, saveRecipe, saveIngredients, saveInstructions, saveCookWear, getSavedRecipes } = useContext(SavedRecipeContext)

    const [ingredients, setIngredients] = useState([])
    const [equipment, setEquipment] = useState([])
    const [instructions, setInstructions] = useState([])

    if (detailedRecipe.hasOwnProperty("id") === false) {

        return <></>

    } else {

        const constructRecipe = () => {
            debugger
            const userId = parseInt(localStorage.getItem("app_user_id"))
            const recipeId = parseInt(id.current.value)
            const title = name.current.value
            const image = picture.current.value
            const sourceName = author.current.value
            const sourceUrl = url.current.value
            const servings = parseInt(serving.current.value)
            const readyInMinutes = parseInt(time.current.value)
            const summary = blurb.current.value

            getSavedRecipes(userId)

            if (savedRecipes.filter(r.recipeId === recipeId).length > 0) {
                window.alert(`Recipe ID of ${recipeId} already exists for this user. (ID ${userId})`)
            } else {
                saveRecipe({
                    userId,
                    recipeId,
                    title,
                    image,
                    sourceName,
                    sourceUrl,
                    servings,
                    readyInMinutes,
                    summary,
                    favorite: false,
                    edited: false
                })
                    .then(saveIngredients({
                        userId,
                        recipeId,
                        ingredients
                    }))
                    .then(saveCookWear({
                        userId,
                        recipeId,
                        equipment
                    }))
                    .then(saveInstructions({
                        userId,
                        recipeId,
                        instructions
                    })),
            }
        }

        debugger

        if (!detailedRecipe.userId) {

            let ingredientsArray = []
            let equipmentArray = []
            let instructionsArray = []


            detailedRecipe.extendedIngredients.map(ingredient => ingredientsArray.push(ingredient))
            detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => step.equipment.map(item => { if (item.hasOwnProperty("id") && equipmentArray.filter(e => e.id === item.id).length === 0) { equipmentArray.push(item) } })))
            detailedRecipe.analyzedInstructions.map(instruction => instruction.steps.map(step => instructionsArray.push(step)))

            setIngredients(ingredientsArray)
            setEquipment(equipmentArray)
            setInstructions(instructionsArray)
        }


        console.log("ingredientsArray", ingredientsArray, "equipmentArray", equipmentArray, "instructionsArray", instructionsArray)

        return (
            <>
                <section className="detailedRecipe" id={detailedRecipe.id} autoFocus key={detailedRecipe.id}>
                    <button className="detailedRecipe__saveButton" id={`Save--${detailedRecipe.id}`}
                        onClick={event => {
                            event.preventDefault()
                            constructRecipe()
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
                            ingredientsArray.map(ingredient => {
                                return <li className="ingredient" key={ingredient.id}>{ingredient.original}</li>
                            })
                        }
                    </ul>
                    <ul className="detailedRecipe__equipment" key="equipment">Cook Ware
                        {
                            equipmentArray.map(equipmentList => {
                                return <li className="equipment" key={equipmentList.id}>{equipmentList.name}</li>
                            })
                        }

                    </ul>
                    <ol className="detailedRecipe__instructions" key="instructions">Instructions
                        {
                            instructionsArray.map(instruction => {
                                return <li className="instruction" key={instruction.number}>{instruction.step}</li>
                            })
                        }
                    </ol>
                </section>
            </>
        )
    }
}