
import { SearchProvider } from "./search/SearchProvider"
import { RecipeProvider } from "./savedRecipes/RecipeProvider"
import { MealProvider } from "./meal/MealProvider"
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
                    <MealProvider>
                        <ViewPortDisplay>
                            <Route exact path="/">
                                <HomeView />
                            </Route>
                        </ViewPortDisplay>
                    </MealProvider>
                </RecipeProvider>
            </SearchProvider>
        </>
    )
}