import React from "react"
import { Link, useHistory } from "react-router-dom"
import cookit_logo from "../../images/cookit_logo.png"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()

    return (
        <>
            <header className="navbar--header">
                <img className="logo" src={cookit_logo} alt={"Logo"} />
            </header>
            <ul className="navbar">
                <Link className="navbar__link" to="/">Home</Link>
                <Link className="navbar__link" to="/savedrecipes">My Recipes</Link>
                <Link className="navbar__link" to="/grocerylist">GroceryList</Link>
                <Link className="navbar__link" to="/login" onClick={() => {localStorage.removeItem("cookit_user")}}>Logout</Link>
            </ul>
        </>
    )
}
