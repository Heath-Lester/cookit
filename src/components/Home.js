import { SavedRecipeList } from "./savedRecipes/SavedRecipeList"
import { SearchResults } from "./viewport/SearchResults"
import { DetailedResult } from "./viewport/DetailedResult"
import { ViewPort } from "./viewport/ViewPort"
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
                    <SearchBar setSelectedRecipeId={setSelectedRecipeId}/>
                </div>
                <div id="viewport">
                    {/* {selectedRecipeId === 0 ? <SearchResults setSelectedRecipeId={setSelectedRecipeId}/> : <DetailedResult selectedRecipeId={selectedRecipeId}/>} */}
                    
                    <ViewPort />
                </div>
            </section>
            <section className="container--right"></section>
        </main>
    )
}