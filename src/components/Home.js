import { SavedRecipeList } from "./savedRecipes/SavedRecipeList"
import { CompactResults } from "./search/CompactResults"
import { SelectedRecipe } from "./search/DetailedResult"
import cookit_logo from "../images/cookit_logo.png"
import { SearchBar } from "./search/SearchBar"
import React, { useState } from "react"
import "./Home.css"




export const HomeView = props => {

    const [selectedRecipeId , setSelectedRecipeId] = useState(0)

    return (
        <main className="container--home">
            <header className="cookit header">
                <img src={cookit_logo} alt={"Logo"} />
                <h1 className="title">Cookit!</h1>
            </header>
            <section className="container--left">
                <SavedRecipeList />
            </section>
            <section className="container--center">
                <div className="search">
                    <SearchBar />
                </div>
                <div className="results">
                    {selectedRecipeId === 0 ? <CompactResults setSelectedRecipeId={setSelectedRecipeId}/> : <SelectedRecipe selectedRecipeId={selectedRecipeId}/>}
                </div>

            </section>
            <section className="container--right"></section>
        </main>
    )
}