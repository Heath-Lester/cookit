import React from "react"
import { Link } from "react-router-dom"
import cookit_logo from "../images/cookit_logo.png"
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
                <div className="searchBar"></div>
                <div className="viewPort"></div>
            </section>
            <section className="container--right"></section>
        </main>
    )
}