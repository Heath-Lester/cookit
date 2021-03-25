import React, { useContext, useState, useEffect } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./SavedRecipes.css"
import { render } from "@testing-library/react"


export const NewRecipe = props => {

    const [newRecipe, setCurrentRecipe] = useState({
        title: "",
        image: "",
        servings: null,
        readyInMinutes: null,
        summary: ""
    })

    const [ingredientArray, setIngredientArray] = useState([{
        title: "",
        amount: null,
        unit: "",
        aisle: "",
        original: ""
    }])

    const changeCurrentRecipe = event => {
        const newRecipeProperty = Object.assign({}, newRecipe)
        newRecipeProperty[event.target.name] = event.target.value
        setCurrentRecipe(newRecipeProperty)
    }

    const changeCurrentIngredient = (event, index) => {
        const newIngredientProperty = Object.assign({}, ingredientArray[index])
        newIngredientProperty[event.target.name] = event.target.value
        const newIngredientArray = [...ingredientArray]
        newIngredientArray.splice(index, 1, newIngredientProperty)
        setIngredientArray(newIngredientArray)
    }

    useEffect(() => {
        IngredientForms()
    }, [ingredientArray])

    const IngredientForms = () => {
        console.log("IngredientForms ran!")
        let i = -1
        return ingredientArray.map(ingredient => {
            i++
            return <IngredientFields key={i} index={i} ingredient={ingredient} />
        })
    }


    const IngredientFields = (props) => {
        console.log("IngredientFiels ran!")
        const i = props.index
        const ingredient = props.ingredient
        return (
            <>
                <fieldset>
                    <label htmlFor="title">Name </label>
                    <input type="text" className="recipeForm" name="title" required
                        maxLength={100} placeholder="enter a name..." defaultValue={ingredient.title}
                        onChange={e => changeCurrentIngredient(e, i)} />
                </fieldset>

                <fieldset>
                    <label htmlFor="amount">Amount </label>
                    <input type="number" className="recipeForm" name="amount" required
                        placeholder="0.5..." defaultValue={ingredient.amount}
                        onChange={e => changeCurrentIngredient(e, i)} />
                    <label htmlFor="unit">Unit </label>
                    <select className="recipeForm" name="unit" required defaultValue={ingredient.unit}
                        onChange={e => changeCurrentIngredient(e, i)}>
                        <option htmlFor="unit" value={null}>Select a Unit</option>
                        <option htmlFor="unit" value={null}>None</option>
                        <option htmlFor="unit" value="teaspoon">Teaspoon</option>
                        <option htmlFor="unit" value="tablespoon">Tablespoon</option>
                        <option htmlFor="unit" value="ounce">Ounces</option>
                        <option htmlFor="unit" value="cup">Cups</option>
                        <option htmlFor="unit" value="pint">Pints</option>
                        <option htmlFor="unit" value="quart">Quarts</option>
                        <option htmlFor="unit" value="gallon">Gallons</option>
                        <option htmlFor="unit" value="pound">Pounds</option>
                        <option htmlFor="unit" value="gram">Grams</option>
                        <option htmlFor="unit" value="milligram">Milligrams</option>
                        <option htmlFor="unit" value="inch">Inch</option>
                        <option htmlFor="unit" value="centimeter">Centimeters</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="aisle">Grocery Aisle </label>
                    <select className="recipeForm" name="aisle" required defaultValue={ingredient.aisle}
                        onChange={event => changeCurrentIngredient(event, i)}>
                        <option htmlFor="aisle" value={null}>Select an Aisle </option>
                        <option htmlFor="aisle" value="alcoholic beverages">Alcoholic Beverages</option>
                        <option htmlFor="aisle" value="baking">Baking</option>
                        <option htmlFor="aisle" value="bakery/bread">Bakery/Bread</option>
                        <option htmlFor="aisle" value="beverages">Beverages</option>
                        <option htmlFor="aisle" value="bread">Bread</option>
                        <option htmlFor="aisle" value="canned and jarred">Canned and Jarred</option>
                        <option htmlFor="aisle" value="cereal">Cereal</option>
                        <option htmlFor="aisle" value="cheese">Cheese</option>
                        <option htmlFor="aisle" value="condiments">Condiments</option>
                        <option htmlFor="aisle" value="dried fruits">Dried Fruits</option>
                        <option htmlFor="aisle" value="ethnic foods">Ethic Foods</option>
                        <option htmlFor="aisle" value="frozen">Frozen</option>
                        <option htmlFor="aisle" value="gourmet">Gourmet</option>
                        <option htmlFor="aisle" value="gluten free">Glueten Free</option>
                        <option htmlFor="aisle" value="grilling supplies">Grilling Supplies</option>
                        <option htmlFor="aisle" value="health foods">Health Foods</option>
                        <option htmlFor="aisle" value="milk, eggs, other dairy">Milk, Eggs, Other Dairy</option>
                        <option htmlFor="aisle" value="meat">Meat</option>
                        <option htmlFor="aisle" value="nut butters, jams, and honey">Nut Butters, Jams, and Honey</option>
                        <option htmlFor="aisle" value="nuts">Nuts</option>
                        <option htmlFor="aisle" value="oil, vinegar, salad dressing">Oil, Vinegar, Salad Dressing</option>
                        <option htmlFor="aisle" value="pasta and rice">Pasta and Rice</option>
                        <option htmlFor="aisle" value="produce">Produce</option>
                        <option htmlFor="aisle" value="refrigerated">Refrigerated</option>
                        <option htmlFor="aisle" value="savory snacks">Savory Snacks</option>
                        <option htmlFor="aisle" value="seafood">Seafood</option>
                        <option htmlFor="aisle" value="spices and seasonings">Spices and Seasonings</option>
                        <option htmlFor="aisle" value="sweet snacks">Sweet Snacks</option>
                        <option htmlFor="aisle" value="tea and coffee">Tea and Coffee</option>
                        <option htmlFor="aisle" value="online">Online</option>
                        <option htmlFor="aisle" value="not in grocery store/homemade">Not in Grocery/Homemade</option>
                    </select>
                </fieldset>
            </>
        )
    }

    return (
        <>
            <header className="savedRecipe--header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
                <h1 className="title" >Create a New Recipe</h1>
                <h3 className="link"><Link to={'/savedRecipes'}>Back</Link></h3></header>
            <form className="recipeForm" key={"recipeForm"}>
                <h3 className="formSection">Recipe</h3>
                <fieldset>
                    <label htmlFor="title">Name </label>
                    <input type="text" className="recipeForm" name="title" required
                        maxLength={100} autoFocus placeholder="enter a name..." defaultValue={newRecipe.title}
                        onChange={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="image">Image </label>
                    <input type="url" className="recipeForm" name="image" required
                        placeholder="https://..." defaultValue={newRecipe.image}
                        onChange={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="servings">Servings </label>
                    <input type="number" className="recipeForm" name="servings" required
                        placeholder="2..." defaultValue={newRecipe.servings}
                        onChange={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="readyInMinutes">Ready in Minutes </label>
                    <input type="number" className="recipeForm" name="readyInMinutes" required
                        placeholder="120..." defaultValue={newRecipe.readyInMinutes}
                        onChange={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="summary">Summary </label>
                    <input type="text" className="recipeForm" name="summary" maxLength={500} required
                        placeholder="briefly explain this recipe..." defaultValue={newRecipe.summary}
                        onChange={changeCurrentRecipe} />
                </fieldset>
            </form>
            <form className="recipeForm">
                <h3 className="formSection">Ingredients</h3>
                <IngredientForms />
                <button type="button"
                    onClick={() => {
                        const newIngredientArray = [...ingredientArray]
                        newIngredientArray.push({
                            title: "",
                            amount: null,
                            unit: "",
                            aisle: "",
                            original: ""
                        })
                        setIngredientArray(newIngredientArray)
                        console.log(ingredientArray)
                    }}>+
            </button>
            </form>

        </>
    )
}