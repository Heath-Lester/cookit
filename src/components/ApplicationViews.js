
import React from "react"
import { Route } from "react-router-dom"
import { HomeView } from "./Home"
import { Link } from "react-router-dom"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <HomeView />
            </Route>
        </>
    )
}