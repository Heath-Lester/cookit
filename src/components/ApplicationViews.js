
import { SearchProvider } from "./search/SearchProvider"
import { RecipeProvider } from "./savedRecipes/RecipeProvider"
import { ViewPortDisplay } from "./viewport/ViewPortContext"
import { Route } from "react-router-dom"
import { AllSavedRecipes } from "./savedRecipes/AllSavedRecipes"
import { HomeView } from "./Home"
import React from "react"




export const ApplicationViews = () => {
    return (
        <>

            <SearchProvider>
                <RecipeProvider>
                    <Route path="/savedRecipes/" render={
                        props => <AllSavedRecipes {...props} />
                    } />
                </RecipeProvider>
            </SearchProvider>

            <SearchProvider>
                <RecipeProvider>
                    <ViewPortDisplay>
                        <Route exact path="/">
                            <HomeView />
                        </Route>
                    </ViewPortDisplay>
                </RecipeProvider>
            </SearchProvider>
        </>
    )
}