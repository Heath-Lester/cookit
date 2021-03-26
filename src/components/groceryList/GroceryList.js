
import React, { useContext, useEffect } from "react"
import { GroceryRecipe } from "./GroceryRecipe"
import { GroceryContext } from "./GroceryProvider"
import { Link } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./GroceryList.css"

export const GroceryList = props => {

    const { groceryList, getGroceryList } = useContext(GroceryContext)

    useEffect(() => {
        getGroceryList()
    }, [])


    return (
        <>
            <header className="GroceryList--header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
                <h1 className="groceryList__title">Grocery List</h1>
                <h3 className="link"><Link to={'/'}>Back</Link></h3>
            </header>

            <form className="GroceryList">
                {
                    groceryList.map(ingredient => {
                        return <GroceryRecipe ingredient={ingredient} key={"groceryItem--" + ingredient.id} />
                    })
                }
            </form>
        </>
    )

}