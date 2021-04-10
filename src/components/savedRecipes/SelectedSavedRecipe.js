
import React, { useContext } from "react"
import { SavedRecipeContext } from "./RecipeProvider"
import "./SavedRecipes.css"


export const SelectedSavedRecipe = props => {


    const { selectedRecipe, setSelectedRecipe, deleteRecipe } = useContext(SavedRecipeContext)

    if (!selectedRecipe || selectedRecipe.id === null || selectedRecipe.hasOwnProperty("id") === false) {
        return <></>

    } else {

        return (
            <>
                <section className="selectedSavedRecipe" id={selectedRecipe.id} autoFocus key={selectedRecipe.id}>
                    <header className="selectedSavedRecipe__title"><h2 className="selectedSavedRecipe__name">{selectedRecipe.title}</h2></header>

                    <img className="selectedSavedRecipe__image" src={selectedRecipe.image} alt={`Recipe Image`}></img>

                    <div className="selectedSavedRecipe__buttons">
                        <button className="selectedSavedRecipe__deleteButton" id={`Delete--${selectedRecipe.id}`}
                            onClick={event => {
                                event.preventDefault()
                                deleteRecipe(selectedRecipe.id)
                                setSelectedRecipe({})
                            }}>Delete Recipe
                    </button>

                        <button className="selectedSavedRecipe__editButton" id={`Edit--${selectedRecipe.id}`}
                            onClick={event => {
                                event.preventDefault()
                                console.log(props)
                                props.history.push(`/editrecipe/${selectedRecipe.id}`)
                                props.history.location.state = { recipeId: selectedRecipe.id }
                            }}>Edit Recipe
                    </button>
                    </div>
                    <div className="selectedSavedRecipe__basicInfo">
                        <div className="selectedSavedRecipe__leftside">

                            {selectedRecipe.sourceName ? <h3 className="selectedSavedRecipe__author">Author: <a href={`http://www.google.com/search?q=${selectedRecipe.sourceName}&btnI`}>{selectedRecipe.sourceName}</a></h3> :
                                <p className="selectedSavedRecipe__author">Author: {selectedRecipe.source_name}</p>}
                            <p className="selectedSavedRecipe__servings">Serves {selectedRecipe.servings}</p>
                        </div>
                        <div className="selectedSavedRecipe__rightside">

                            <a className="selectedSavedRecipe__webLink" href={selectedRecipe.source_url}>Original Recipe</a>
                            <p className="selectedSavedRecipe__time">Ready in {selectedRecipe.ready_in_minutes} minutes</p>
                        </div>
                    </div>
                    <p className="selectedSavedRecipe__summary" dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></p>
                    <ul className="selectedSavedRecipe__ingredients" key="ingredients">Ingredients
                        {
                            selectedRecipe.ingredients.map(ingredient => {
                                return <li className="ingredient" key={"ingredient--" + ingredient.id}>{ingredient.original}</li>
                            })
                        }
                    </ul>
                    <ul className="selectedSavedRecipe__equipment" key="equipment">Cook Ware
                        {
                            selectedRecipe.equipment.map(item => {
                                return <li className="equipment" key={"equipment--" + item.id}>{item.name}</li>
                            })
                        }

                    </ul>
                    <ol className="selectedSavedRecipe__instructions" key="instructions">Instructions
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