
import React, { useContext, useEffect } from "react"
import { GroceryIngredient } from "./GroceryIngredient"
import { GroceryContext } from "./GroceryProvider"
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

    if (groceryList.length > 0) {
        for (const item of groceryList) {
            let aisle = item.aisle
            if (aisle !== null) {
                if (aisle.includes(";")) {
                    const [firstAisle, secondAisle] = aisle.split(";")
                    aisle = firstAisle
                }
            }
            if (aisle === "Alcoholic Beverages") { AlcoholicBeverages.push(item); i++ }
            else if (aisle === "Baking") { Baking.push(item); i++ }
            else if (aisle === "Bakery/Bread") { BakeryBread.push(item); i++ }
            else if (aisle === "Beverages") { Beverages.push(item); i++ }
            else if (aisle === "Bread") { Bread.push(item); i++ }
            else if (aisle === "Canned and Jarred") { CannedAndJarred.push(item); i++ }
            else if (aisle === "Cereal") { Cereal.push(item); i++ }
            else if (aisle === "Cheese") { Cheese.push(item); i++ }
            else if (aisle === "Condiments") { Condiments.push(item); i++ }
            else if (aisle === "Dried Fruits") { DriedFruits.push(item); i++ }
            else if (aisle === "Ethnic Foods") { EthnicFoods.push(item); i++ }
            else if (aisle === "Frozen") { Frozen.push(item); i++ }
            else if (aisle === "Gourmet") { Gourmet.push(item); i++ }
            else if (aisle === "Gluten Free") { GlutenFree.push(item); i++ }
            else if (aisle === "Grilling Supplies") { GrillingSupplies.push(item); i++ }
            else if (aisle === "Health Foods") { HealthFoods.push(item); i++ }
            else if (aisle === "Milk, Eggs, Other Dairy") { MilkEggsOtherDairy.push(item); i++ }
            else if (aisle === "Meat") { Meat.push(item); i++ }
            else if (aisle === "Nut Butters, Jams, and Honey") { NutButtersJamsAndHoney.push(item); i++ }
            else if (aisle === "Nuts") { Nuts.push(item); i++ }
            else if (aisle === "Oil, Vinegar, Salad Dressing") { OilVinegarSaladDressing.push(item); i++ }
            else if (aisle === "Pasta and Rice") { PastaAndRice.push(item); i++ }
            else if (aisle === "Produce") { Produce.push(item); i++ }
            else if (aisle === "Refrigerated") { Refrigerated.push(item); i++ }
            else if (aisle === "Savory Snacks") { SavorySnacks.push(item); i++ }
            else if (aisle === "Seafood") { Seafood.push(item); i++ }
            else if (aisle === "Spices and Seasonings") { SpicesAndSeasonings.push(item); i++ }
            else if (aisle === "Sweet Snacks") { SweetSnacks.push(item); i++ }
            else if (aisle === "Tea and Coffee") { TeaAndCoffee.push(item); i++ }
            else if (aisle === "Online") { Online.push(item); i++ }
            else { NotInGroceryStoreHomemade.push(item); i++ }
        }

        return (
            <>
                <main className="groceryList--container">
                    {AlcoholicBeverages.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Alcoholic Beverages</h3><div className="categoryList">{AlcoholicBeverages.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Baking.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Baking</h3><div className="categoryList">{Baking.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {BakeryBread.length > 0 ? <section className="ingredientCategory"> <h3 className="categoryTitle">Bakery/Bread</h3><div className="categoryList">{BakeryBread.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Beverages.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Beverages</h3><div className="categoryList">{Beverages.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Bread.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Bread</h3><div className="categoryList">{Bread.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {CannedAndJarred.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Canned and Jarred</h3><div className="categoryList">{CannedAndJarred.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Cereal.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Cereal</h3><div className="categoryList">{Cereal.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Cheese.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Cheese</h3><div className="categoryList">{Cheese.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Condiments.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Condiments</h3><div className="categoryList">{Condiments.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {DriedFruits.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Dried Fruits</h3><div className="categoryList">{DriedFruits.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {EthnicFoods.length > 0 ? <section className="ingredientCategory"> <h3 className="categoryTitle">Ethnic Foods</h3><div className="categoryList">{EthnicFoods.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Frozen.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Frozen</h3><div className="categoryList">{Frozen.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Gourmet.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Gourmet</h3><div className="categoryList">{Gourmet.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {GlutenFree.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Gluten Free</h3><div className="categoryList">{GlutenFree.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {GrillingSupplies.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Grilling Supplies</h3><div className="categoryList">{GrillingSupplies.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {HealthFoods.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Health Foods</h3><div className="categoryList">{HealthFoods.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {MilkEggsOtherDairy.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Milk, Eggs, and other Dairy</h3><div className="categoryList">{MilkEggsOtherDairy.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Meat.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Meat</h3><div className="categoryList">{Meat.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {NutButtersJamsAndHoney.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Nut Butters, Jams,</h3><div className="categoryList">{NutButtersJamsAndHoney.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Nuts.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Nuts</h3><div className="categoryList">{Nuts.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {OilVinegarSaladDressing.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Oil, Vinegar, Salad</h3><div className="categoryList">{OilVinegarSaladDressing.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {PastaAndRice.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Pasta and Rice</h3><div className="categoryList">{PastaAndRice.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Produce.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Produce</h3><div className="categoryList">{Produce.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Refrigerated.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Refrigerated</h3><div className="categoryList">{Refrigerated.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {SavorySnacks.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Savory Snacks</h3><div className="categoryList">{SavorySnacks.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Seafood.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Seafood</h3><div className="categoryList">{Seafood.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {SpicesAndSeasonings.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Spices and Seasonings</h3><div className="categoryList">{SpicesAndSeasonings.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {SweetSnacks.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Sweet Snacks</h3><div className="categoryList">{SweetSnacks.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {TeaAndCoffee.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Tea and Coffee</h3><div className="categoryList">{TeaAndCoffee.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {Online.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Online</h3><div className="categoryList">{Online.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                    {NotInGroceryStoreHomemade.length > 0 ? <section className="ingredientCategory"><h3 className="categoryTitle">Other/Homemade</h3><div className="categoryList">{NotInGroceryStoreHomemade.map(i => {
                        return <GroceryIngredient ingredient={i} key={"groceryItem--" + i.id} />
                    })}</div></section> : <></>}
                </main>
            </>
        )
    } else {
        return <></>
    }
}