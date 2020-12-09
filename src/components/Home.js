import cookit_logo from "../images/cookit_logo.png"
import { Link } from "react-router-dom"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
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
                <div className="viewPort">
                    <SearchResults />
                </div>
            </section>
            <section className="container--right"></section>
        </main>
    )
}