
import { SearchProvider } from "./search/SearchProvider"
import { RecipeProvider } from "./savedRecipes/RecipeProvider"
import { Route } from "react-router-dom"
import { HomeView } from "./Home"
import React from "react"



export const ApplicationViews = () => {
    return (
        <>
            <SearchProvider>
                <RecipeProvider>
                    <Route exact path="/">
                        <HomeView />
                    </Route>
                </RecipeProvider>
            </SearchProvider>
        </>
    )
}