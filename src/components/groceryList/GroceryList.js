
import React, { useContext, useEffect } from "react"
import { GroceryRecipe } from "./GroceryRecipe"
import { GroceryContext } from "./GroceryProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./GroceryList.css"

export const GroceryList = props => {

    const { groceryList, getGroceryList } = useContext(GroceryContext)

    const AlcoholicBeverages = []
    const Baking = []
    const BakeryBread = []
    const Beverages = []
    const Bread = []
    const CannedAndJarred = []
    const Cereal = []
    const Cheese = []
    const Condiments = []
    const DriedFruits = []
    const EthnicFoods = []
    const Frozen = []
    const Gourmet = []
    const GlutenFree = []
    const GrillingSupplies = []
    const HealthFoods = []
    const MilkEggsOtherDairy = []
    const Meat = []
    const NutButtersJamsAndHoney = []
    const Nuts = []
    const OilVinegarSaladDressing = []
    const PastaAndRice = []
    const Produce = []
    const Refrigerated = []
    const SavorySnacks = []
    const Seafood = []
    const SpicesAndSeasonings = []
    const SweetSnacks = []
    const TeaAndCoffee = []
    const Online = []
    const NotInGroceryStoreHomemade = []

    useEffect(() => {
        getGroceryList()
    }, [])

    let i = 0

    useEffect(() => {
        if (groceryList.length > 0) {
            for (const item of groceryList) {
                if (item.aisle === "Alcoholic Beverages") { AlcoholicBeverages.push(item); i++ }
                else if (item.aisle === "Baking") { Baking.push(item); i++ }
                else if (item.aisle === "Bakery/Bread") { BakeryBread.push(item); i++ }
                else if (item.aisle === "Beverages") { Beverages.push(item); i++ }
                else if (item.aisle === "Bread") { Bread.push(item); i++ }
                else if (item.aisle === "Canned and Jarred") { CannedAndJarred.push(item); i++ }
                else if (item.aisle === "Cereal") { Cereal.push(item); i++ }
                else if (item.aisle === "Cheese") { Cheese.push(item); i++ }
                else if (item.aisle === "Condiments") { Condiments.push(item); i++ }
                else if (item.aisle === "Dried Fruits") { DriedFruits.push(item); i++ }
                else if (item.aisle === "Ethnic Foods") { EthnicFoods.push(item); i++ }
                else if (item.aisle === "Frozen") { Frozen.push(item); i++ }
                else if (item.aisle === "Gourmet") { Gourmet.push(item); i++ }
                else if (item.aisle === "Gluten Free") { GlutenFree.push(item); i++ }
                else if (item.aisle === "Grilling Supplies") { GrillingSupplies.push(item); i++ }
                else if (item.aisle === "Health Foods") { HealthFoods.push(item); i++ }
                else if (item.aisle === "Milk, Eggs, Other Dairy") { MilkEggsOtherDairy.push(item); i++ }
                else if (item.aisle === "Meat") { Meat.push(item); i++ }
                else if (item.aisle === "Nut Butters, Jams, and Honey") { NutButtersJamsAndHoney.push(item); i++ }
                else if (item.aisle === "Nuts") { Nuts.push(item); i++ }
                else if (item.aisle === "Oil, Vinegar, Salad Dressing") { OilVinegarSaladDressing.push(item); i++ }
                else if (item.aisle === "Pasta and Rice") { PastaAndRice.push(item); i++ }
                else if (item.aisle === "Produce") { Produce.push(item); i++ }
                else if (item.aisle === "Refrigerated") { Refrigerated.push(item); i++ }
                else if (item.aisle === "Savory Snacks") { SavorySnacks.push(item); i++ }
                else if (item.aisle === "Seafood") { Seafood.push(item); i++ }
                else if (item.aisle === "Spices and Seasonings") { SpicesAndSeasonings.push(item); i++ }
                else if (item.aisle === "Sweet Snacks") { SweetSnacks.push(item); i++ }
                else if (item.aisle === "Tea and Coffee") { TeaAndCoffee.push(item); i++ }
                else if (item.aisle === "Online") { Online.push(item); i++ }
                else { NotInGroceryStoreHomemade.push(item); i++ }

            console.log("Pushing is done!")
            }
        }
    }, [groceryList])



    if (i === groceryList.length && groceryList.length > 0) {
        debugger
        return (
            <>
                <header className="GroceryList--header">
                    <img className="logo" src={cookit_logo} alt={"Logo"} />
                    <h1 className="groceryList__title">Grocery List</h1>
                    <h3 className="link"><Link to={'/'}>Back</Link></h3>
                </header>


                {AlcoholicBeverages.length > 0 ? <section className="ingredientCategory"><h3>Alcoholic Beverages</h3>{AlcoholicBeverages.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Baking.length > 0 ? <section className="ingredientCategory"><h3>Baking</h3>{Baking.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {BakeryBread.length > 0 ? <section className="ingredientCategory"> <h3>Bakery/Bread</h3>{BakeryBread.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Beverages.length > 0 ? <section className="ingredientCategory"><h3>Beverages</h3>{Beverages.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Bread.length > 0 ? <section className="ingredientCategory"><h3>Bread</h3>{Bread.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {CannedAndJarred.length > 0 ? <section className="ingredientCategory"><h3>Canned and Jarred</h3>{CannedAndJarred.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Cereal.length > 0 ? <section className="ingredientCategory"><h3>Cereal</h3>{Cereal.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Cheese.length > 0 ? <section className="ingredientCategory"><h3>Cheese</h3>{Cheese.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Condiments.length > 0 ? <section className="ingredientCategory"><h3>Condiments</h3>{Condiments.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {DriedFruits.length > 0 ? <section className="ingredientCategory"><h3>Dried Fruits</h3>{DriedFruits.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {EthnicFoods.length > 0 ? <section className="ingredientCategory"> <h3>Ethnic Foods</h3>{EthnicFoods.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Frozen.length > 0 ? <section className="ingredientCategory"><h3>Frozen</h3>{Frozen.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Gourmet.length > 0 ? <section className="ingredientCategory"><h3>Gourmet</h3>{Gourmet.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {GlutenFree.length > 0 ? <section className="ingredientCategory"><h3>Gluten Free</h3>{GlutenFree.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {GrillingSupplies.length > 0 ? <section className="ingredientCategory"><h3>Grilling Supplies</h3>{GrillingSupplies.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {HealthFoods.length > 0 ? <section className="ingredientCategory"><h3>Health Foods</h3>{HealthFoods.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {MilkEggsOtherDairy.length > 0 ? <section className="ingredientCategory"><h3>Milk, Eggs, Other</h3>{MilkEggsOtherDairy.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Meat.length > 0 ? <section className="ingredientCategory"><h3>Meat</h3>{Meat.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {NutButtersJamsAndHoney.length > 0 ? <section className="ingredientCategory"><h3>Nut Butters, Jams,</h3>{NutButtersJamsAndHoney.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Nuts.length > 0 ? <section className="ingredientCategory"><h3>Nuts</h3>{Nuts.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {OilVinegarSaladDressing.length > 0 ? <section className="ingredientCategory"><h3>Oil, Vinegar, Salad</h3>{OilVinegarSaladDressing.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {PastaAndRice.length > 0 ? <section className="ingredientCategory"><h3>Pasta and Rice</h3>{PastaAndRice.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Produce.length > 0 ? <section className="ingredientCategory"><h3>Produce</h3>{Produce.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Refrigerated.length > 0 ? <section className="ingredientCategory"><h3>Refrigerated</h3>{Refrigerated.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {SavorySnacks.length > 0 ? <section className="ingredientCategory"><h3>Savory Snacks</h3>{SavorySnacks.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Seafood.length > 0 ? <section className="ingredientCategory"><h3>Seafood</h3>{Seafood.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {SpicesAndSeasonings.length > 0 ? <section className="ingredientCategory"><h3>Spices and Seasonings</h3>{SpicesAndSeasonings.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {SweetSnacks.length > 0 ? <section className="ingredientCategory"><h3>Sweet Snacks</h3>{SweetSnacks.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {TeaAndCoffee.length > 0 ? <section className="ingredientCategory"><h3>Tea and Coffee</h3>{TeaAndCoffee.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {Online.length > 0 ? <section className="ingredientCategory"><h3>Online</h3>{Online.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
                {NotInGroceryStoreHomemade.length > 0 ? <section className="ingredientCategory"><h3>Not in Grocery Store/Homemade</h3>{NotInGroceryStoreHomemade.map(i => {
                    return <GroceryRecipe ingredient={i} key={"groceryItem--" + i.id} />
                })})</section> : <> </>}
            </>
        )
    } else {
        return <> </>
    }
}