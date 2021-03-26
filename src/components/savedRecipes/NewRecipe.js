import React, { useContext, useState } from "react"
import { SavedRecipeContext } from "../savedRecipes/RecipeProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./SavedRecipes.css"


export const NewRecipe = props => {

    const { saveRecipe, saveNewRecipe } = useContext(SavedRecipeContext)
    
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
    

    const constructRecipe = () => {
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
        .then(props.history.push(`/savedRecipes`))
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
                        onBlur={e => changeCurrentIngredient(e, i)} />
                    <label htmlFor="unit">Unit </label>
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
                        <option htmlFor="unit" value="piece">Pieces</option>
                        <option htmlFor="unit" value="stick">Sticks</option>
                        <option htmlFor="unit" value="pinch">Pinches</option>
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
                        maxLength={100} placeholder="enter an instruction..." defaultValue={instruction.instruction}
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
                <h3 className="link"><Link to={'/savedRecipes'}>Back</Link></h3></header>

            <button type="button"
                onClick={() => {
                    constructRecipe()
                }}>Save Recipe
                </button>


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