
import React from "react"
import { Route } from "react-router-dom"
import { HomeView } from "./Home"
import { Link } from "react-router-dom"
import { SearchProvider } from "./search/SearchProvider"



export const ApplicationViews = () => {
    return (
        <>
            <SearchProvider>
                <Route exact path="/">
                    <HomeView />
                </Route>
            </SearchProvider>
        </>
    )
}