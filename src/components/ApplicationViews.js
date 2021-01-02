
import { ViewPortDisplay } from "./viewport/ViewPortContext"
import { AllSavedRecipes } from "./savedRecipes/AllSavedRecipes"
import { SearchProvider } from "./search/SearchProvider"
import { RecipeProvider } from "./savedRecipes/RecipeProvider"
import { MealProvider } from "./meal/MealProvider"
import { GroceryList } from "./groceryList/GroceryList"
import { HomeView } from "./Home"
import { Route } from "react-router-dom"
import React from "react"




export const ApplicationViews = () => {
    return (
        <>

            <RecipeProvider>
                <SearchProvider>
                    <Route path="/savedRecipes/" render={
                        props => <AllSavedRecipes {...props} />
                    } />
                </SearchProvider>
            </RecipeProvider>

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

            <MealProvider>
                <SearchProvider>
                    <Route path="/groceryList/" render={
                        props => <GroceryList {...props} />
                    } />
                </SearchProvider>
            </MealProvider>
        </>
    )
}