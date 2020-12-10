
import React, { useContext, Dangers } from "react"
import { SearchContext } from "./SearchProvider"
import "./Search.css"


export const SelectedRecipe = props => {
    // debugger
    const { detailedRecipe } = useContext(SearchContext)

    const imageUrl = `https://spoonacular.com/recipeImages/`



    console.log(detailedRecipe)

    if (detailedRecipe.hasOwnProperty("id") === false) {

        return <></>

    } else {
        const summary = detailedRecipe.summary
        
        // debugger
        return (
            <>
                <section className="detailedRecipe" id={detailedRecipe.id} autoFocus key={detailedRecipe.id}>
                    <h2 className="detailedRecipe__name">{detailedRecipe.title}</h2>
                    <img className="detailedRecipe__image" src={detailedRecipe.image} alt={`Recipe Image`}></img>
                    <h3 className="detailedRecipe__author">Author: <a href={`http://www.google.com/search?q=${detailedRecipe.sourceName}&btnI`}>{detailedRecipe.sourceName}</a></h3>
                    <a className="detailedRecipe__webLink" href={detailedRecipe.sourceUrl}>Original Recipe</a>
                    <p className="detailedRecipe__dishTypes">{detailedRecipe.dishTypes}</p>
                    <p className="detailedRecipe__time">Serves {detailedRecipe.servings}</p>
                    <p className="detailedRecipe__time">Ready in {detailedRecipe.readyInMinutes} minutes</p>
                    <p className="detailedRecipe__summary" dangerouslySetInnerHTML={{__html: summary}}></p>
                    <ul className="detailedRecipe__ingredients">Ingredients
                        {
                            detailedRecipe.extendedIngredients.map(ingredient => {
                                return <li className="ingredient" key={ingredient.id}>{ingredient.name}</li>
                            })
                        }
                    </ul>
                    <ul className="detailedRecipe__equipment">Cook Ware
                        {
                            detailedRecipe.analyzedInstructions[0].steps.map(step => {
                                return step.equipment.map(equipmentList => {
                                    return <li className="equipment" key={equipmentList.id}>{equipmentList.name}</li>
                                })
                            })
                        }
                    </ul>
                    <ol className="detailedRecipe__instructions">Instructions
                        {
                            detailedRecipe.analyzedInstructions[0].steps.map(instruction => {
                                return <li className="instruction" key={instruction.id}>{instruction.step}</li>
                            })
                        }
                    </ol>
                </section>
            </>
        )
    }
}