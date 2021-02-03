import React from "react"
import { SavedRecipeList } from "./savedRecipes/SavedRecipeList"
import { MealBuilder } from "./meal/MealBuilder"
import { ViewPort } from "./viewport/ViewPort"
import { SearchBar } from "./search/SearchBar"
import cookit_logo from "../images/cookit_logo.png"
import "./Home.css"




export const HomeView = (props) => {

    return (
        <>
            <header className="cookit header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
            </header>

            <main className="container--home">
                <section className="container--left">
                    <SavedRecipeList />
                </section>

                <section className="container--center">
                    <div className="search">
                        <SearchBar />
                    </div>
                    <div id="viewport">
                        <ViewPort />
                    </div>
                </section>

                <section className="container--right">
                    <MealBuilder {...props} />
                </section>
            </main>
        </>
    )
}