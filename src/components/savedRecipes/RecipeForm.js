import React, { useContext, useState, useEffect } from "react"
import { SavedRecipeContext } from "./RecipeProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./SavedRecipes.css"


export const RecipeForm = props => {

    const { selectedRecipe, getSingleRecipe, saveNewRecipe, editRecipe } = useContext(SavedRecipeContext)

    let editmode
    let recipeId

    if (!props.history.location.state) {
        editmode = false
    } else {
        editmode = props.history.location.state.hasOwnProperty("recipeId") 
        recipeId = props.history.location.state.recipeId}


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

    const [equipmentArray, setEquipmentArray] = useState([{
        name: ""
    }])

    const [instructionArray, setInstructionArray] = useState([{
        instruction: ""
    }])

    useEffect(() => {
        getSingleRecipe(recipeId)
    }, [])

    useEffect(() => {
        if (editmode && selectedRecipe.id && selectedRecipe.id === recipeId) {
            const oldIngredientArray = []
            const oldEquipmentArray = []
            const oldInstructionArray = []
            setCurrentRecipe({
                title: selectedRecipe.title,
                image: selectedRecipe.image,
                servings: selectedRecipe.servings,
                readyInMinutes: selectedRecipe.servings,
                summary: selectedRecipe.summary,
                spoonacularId: selectedRecipe.spoonacular_id,
                favorite: selectedRecipe.favorite,
                sourceName: selectedRecipe.source_name,
                sourceUrl: selectedRecipe.source_url,

            })
            for (const ingredient of selectedRecipe.ingredients) {
                oldIngredientArray.push({
                    title: ingredient.name,
                    amount: ingredient.amount,
                    unit: ingredient.unit,
                    aisle: ingredient.aisle,
                })
            } setIngredientArray(oldIngredientArray)
            for (const equipment of selectedRecipe.equipment) {
                oldEquipmentArray.push({
                    name: equipment.name
                })
            } setEquipmentArray(oldEquipmentArray)
            for (const instruction of selectedRecipe.instructions) {
                oldInstructionArray.push({
                    instruction: instruction.instruction
                })
            } setInstructionArray(oldInstructionArray)
        }
    }, [selectedRecipe])


    const constructRecipe = () => {
        if (editmode) {
            editRecipe({
                title: newRecipe.title,
                image: newRecipe.image,
                servings: newRecipe.servings,
                readyInMinutes: newRecipe.readyInMinutes,
                summary: newRecipe.summary,
                ingredients: ingredientArray,
                equipment: equipmentArray,
                instructions: instructionArray
            }, selectedRecipe.id)
            .then(props.history.push(`/savedrecipes`))
        } else if (!editmode) {
            saveNewRecipe({
                title: newRecipe.title,
                image: newRecipe.image,
                servings: newRecipe.servings,
                readyInMinutes: newRecipe.readyInMinutes,
                summary: newRecipe.summary,
                ingredients: ingredientArray,
                equipment: equipmentArray,
                instructions: instructionArray
            })
            .then(props.history.push(`/savedrecipes`))
        }
    }


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

    const changeCurrentEquipment = (event, index) => {
        const newEquipmentProperty = Object.assign({}, equipmentArray[index])
        newEquipmentProperty[event.target.name] = event.target.value
        const newEquipmentArray = [...equipmentArray]
        newEquipmentArray.splice(index, 1, newEquipmentProperty)
        setEquipmentArray(newEquipmentArray)
    }

    const changeCurrentInstruction = (event, index) => {
        const newInstructionProperty = Object.assign({}, instructionArray[index])
        newInstructionProperty[event.target.name] = event.target.value
        const newInstructionArray = [...instructionArray]
        newInstructionArray.splice(index, 1, newInstructionProperty)
        setInstructionArray(newInstructionArray)
    }


    const IngredientForms = () => {
        let i = -1
        return ingredientArray.map(ingredient => {
            i++
            return <IngredientFields key={i} index={i} ingredient={ingredient} />
        })
    }

    const EquipmentForms = () => {
        let i = -1
        return equipmentArray.map(equipment => {
            i++
            return <EquipmentFields key={i} index={i} equipment={equipment} />
        })
    }

    const InstructionForms = () => {
        let i = -1
        return instructionArray.map(instruction => {
            i++
            return <InstructionFields key={i} index={i} instruction={instruction} />
        })
    }


    const IngredientFields = (props) => {
        const i = props.index
        const ingredient = props.ingredient
        return (
            <>
                <fieldset>
                    <label htmlFor="title">Name </label>
                    <input type="text" className="recipeForm" name="title" required
                        maxLength={100} placeholder="enter a name..." defaultValue={ingredient.title}
                        onBlur={e => changeCurrentIngredient(e, i)} />
                </fieldset>

                <fieldset>
                    <label htmlFor="amount">Amount </label>
                    <input type="number" className="recipeForm" name="amount" required
                        placeholder="0.5..." defaultValue={ingredient.amount}
                        onBlur={e => changeCurrentIngredient(e, i)}>
                    </input>

                    <label htmlFor="unit">Unit </label>
                    {editmode ?
                        <input type="text" className="recipeForm" name="unit" required
                            placeholder="choose a unit..." defaultValue={ingredient.unit}
                            onBlur={e => changeCurrentIngredient(e, i)}>
                        </input>
                        :
                        <select className="recipeForm" name="unit" required defaultValue={ingredient.unit}
                            onChange={e => changeCurrentIngredient(e, i)}>
                            <option htmlFor="unit" value={null}>Select a Unit</option>
                            <option htmlFor="unit" value={null}>None</option>
                            <option htmlFor="unit" value="teaspoon">Teaspoons</option>
                            <option htmlFor="unit" value="tablespoon">Tablespoons</option>
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
                            <option htmlFor="unit" value="slice">Slices</option>
                            <option htmlFor="unit" value="serving">Servings</option>
                            <option htmlFor="unit" value="piece">Pieces</option>
                            <option htmlFor="unit" value="stick">Sticks</option>
                            <option htmlFor="unit" value="pinch">Pinches</option>
                        </select>}
                </fieldset>

                <fieldset>
                    <label htmlFor="aisle">Grocery Aisle </label>
                    <select className="recipeForm" name="aisle" required defaultValue={ingredient.aisle}
                        onChange={event => changeCurrentIngredient(event, i)}>
                        <option htmlFor="aisle" value={null}>Select an Aisle </option>
                        <option htmlFor="aisle" value="Alcoholic Beverages">Alcoholic Beverages</option>
                        <option htmlFor="aisle" value="Baking">Baking</option>
                        <option htmlFor="aisle" value="Bakery/Bread">Bakery/Bread</option>
                        <option htmlFor="aisle" value="Beverages">Beverages</option>
                        <option htmlFor="aisle" value="Bread">Bread</option>
                        <option htmlFor="aisle" value="Canned and Jarred">Canned and Jarred</option>
                        <option htmlFor="aisle" value="Cereal">Cereal</option>
                        <option htmlFor="aisle" value="Cheese">Cheese</option>
                        <option htmlFor="aisle" value="Condiments">Condiments</option>
                        <option htmlFor="aisle" value="Dried Fruits">Dried Fruits</option>
                        <option htmlFor="aisle" value="Ethnic Foods">Ethnic Foods</option>
                        <option htmlFor="aisle" value="Frozen">Frozen</option>
                        <option htmlFor="aisle" value="Gourmet">Gourmet</option>
                        <option htmlFor="aisle" value="Gluten Free">Gluten Free</option>
                        <option htmlFor="aisle" value="Grilling Supplies">Grilling Supplies</option>
                        <option htmlFor="aisle" value="Health Foods">Health Foods</option>
                        <option htmlFor="aisle" value="Milk, Eggs, Other Dairy">Milk, Eggs, Other Dairy</option>
                        <option htmlFor="aisle" value="Meat">Meat</option>
                        <option htmlFor="aisle" value="Nut Butters, Jams, and Honey">Nut Butters, Jams, and Honey</option>
                        <option htmlFor="aisle" value="Nuts">Nuts</option>
                        <option htmlFor="aisle" value="Oil, Vinegar, Salad Dressing">Oil, Vinegar, Salad Dressing</option>
                        <option htmlFor="aisle" value="Pasta and Rice">Pasta and Rice</option>
                        <option htmlFor="aisle" value="Produce">Produce</option>
                        <option htmlFor="aisle" value="Refrigerated">Refrigerated</option>
                        <option htmlFor="aisle" value="Savory Snacks">Savory Snacks</option>
                        <option htmlFor="aisle" value="Seafood">Seafood</option>
                        <option htmlFor="aisle" value="Spices and Seasonings">Spices and Seasonings</option>
                        <option htmlFor="aisle" value="Sweet Snacks">Sweet Snacks</option>
                        <option htmlFor="aisle" value="Tea and Coffee">Tea and Coffee</option>
                        <option htmlFor="aisle" value="Online">Online</option>
                        <option htmlFor="aisle" value="Not in Grocery Store/Homemade">Not in Grocery Store/Homemade</option>
                    </select>
                </fieldset>

                <button type="button"
                    onClick={() => {
                        const newIngredientArray = [...ingredientArray]
                        newIngredientArray.splice(i, 1)
                        setIngredientArray(newIngredientArray)
                        console.log(ingredientArray)
                    }}>-
                </button>
            </>
        )
    }

    const EquipmentFields = (props) => {
        const i = props.index
        const equipment = props.equipment
        return (
            <>
                <fieldset>
                    <label htmlFor="name">Name </label>
                    <input type="text" className="recipeForm" name="name" required
                        maxLength={50} placeholder="enter a name..." defaultValue={equipment.name}
                        onBlur={e => { changeCurrentEquipment(e, i); console.log(e) }}
                    />
                </fieldset>
                <button type="button"
                    onClick={() => {
                        const newEquipmentArray = [...equipmentArray]
                        newEquipmentArray.splice(i, 1)
                        setEquipmentArray(newEquipmentArray)
                    }}>-
                </button>
            </>
        )
    }

    const InstructionFields = (props) => {
        const i = props.index
        const n = i + 1
        const instruction = props.instruction
        return (
            <>
                <fieldset>
                    <label htmlFor="instruction">Step {n} </label>
                    <textarea type="text" className="recipeForm" name="instruction" required
                        maxLength={500} placeholder="enter an instruction..." defaultValue={instruction.instruction}
                        onBlur={e => changeCurrentInstruction(e, i)} />
                </fieldset>
                <button type="button"
                    onClick={() => {
                        const newInstructionArray = [...instructionArray]
                        newInstructionArray.splice(i, 1)
                        setInstructionArray(newInstructionArray)
                    }}>-
                </button>
            </>
        )
    }

    return (
        <>
            <header className="savedRecipe--header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
                <h1 className="title" >Create a New Recipe</h1>
                <h3 className="link"><Link to={'/savedrecipes'}>Back</Link></h3></header>

            {editmode ?
                <button type="button"
                    onClick={() => {
                        constructRecipe()
                    }}>Save Changes
                </button>
                :
                <button type="button"
                    onClick={() => {
                        constructRecipe()
                    }}>Save Recipe
                </button>}


            <form className="recipeForm" key={"recipeForm"}>
                <h3 className="formSection">Recipe</h3>
                <fieldset>
                    <label htmlFor="title">Name </label>
                    <input type="text" className="recipeForm" name="title" required
                        maxLength={100} placeholder="enter a name..." defaultValue={newRecipe.title}
                        onBlur={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="image">Image </label>
                    <input type="url" className="recipeForm" name="image" required
                        placeholder="https://..." defaultValue={newRecipe.image}
                        onBlur={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="servings">Servings </label>
                    <input type="number" className="recipeForm" name="servings" required
                        placeholder="2..." defaultValue={newRecipe.servings}
                        onBlur={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="readyInMinutes">Ready in Minutes </label>
                    <input type="number" className="recipeForm" name="readyInMinutes" required
                        placeholder="120..." defaultValue={newRecipe.readyInMinutes}
                        onBlur={changeCurrentRecipe} />
                </fieldset>
                <fieldset>
                    <label htmlFor="summary">Summary </label>
                    <textarea type="textArea" className="recipeForm" name="summary" maxLength={500} required
                        placeholder="briefly explain this recipe..." defaultValue={newRecipe.summary}
                        onBlur={changeCurrentRecipe} />
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
                    }}>+
                </button>
            </form>

            <form className="recipeForm">
                <h3 className="formSection">Equipment</h3>
                <EquipmentForms />
                <button type="button"
                    onClick={() => {
                        const newEquipmentArray = [...equipmentArray]
                        newEquipmentArray.push({
                            name: ""
                        })
                        setEquipmentArray(newEquipmentArray)
                    }}>+
                </button>
            </form>
            <form className="recipeForm">
                <h3 className="formSection">Instructions</h3>
                <InstructionForms />
                <button type="button"
                    onClick={() => {
                        const newInstructionArray = [...instructionArray]
                        newInstructionArray.push({
                            instruction: ""
                        })
                        setInstructionArray(newInstructionArray)
                    }}>+
                </button>
            </form>
        </>
    )
}