
import { SearchProvider } from "./search/SearchProvider"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { HomeView } from "./Home"
import React from "react"



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