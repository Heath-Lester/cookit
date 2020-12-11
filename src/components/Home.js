import { CompactResults } from "./search/CompactResults"
import { SelectedRecipe } from "./search/DetailedResult"
import cookit_logo from "../images/cookit_logo.png"
import { SearchBar } from "./search/SearchBar"
import React from "react"
import "./Home.css"

export const HomeView = props => {
    return (
        <main className="container--home">
            <title>Cookit!</title>
            <header className="cookit header">
                <img src={cookit_logo} alt={"Logo"} />
                <h1 className="title">Cookit!</h1>
            </header>
            <section className="container--left"></section>
            <section className="container--center">
                <div className="search">
                    <SearchBar />
                </div>
                <div className="results">
                    <CompactResults />
                    <SelectedRecipe />
                </div>

            </section>
            <section className="container--right"></section>
        </main>
    )
}