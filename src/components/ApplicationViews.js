
import React from "react"
import { ViewPortDisplay } from "./viewport/ViewPortContext"
import { AllSavedRecipes } from "./savedRecipes/AllSavedRecipes"
import { GroceryProvider } from "./groceryList/GroceryProvider"
import { SearchProvider } from "./search/SearchProvider"
import { RecipeProvider } from "./savedRecipes/RecipeProvider"
import { MealProvider } from "./meal/MealProvider"
import { GroceryList } from "./groceryList/GroceryList"
import { HomeView } from "./Home"
import { Route } from "react-router-dom"




export const ApplicationViews = (props) => {
    return (
        <>

            <RecipeProvider>
                <SearchProvider>
                    <Route path="/savedRecipes" render={
                        props => <AllSavedRecipes {...props} />
                    } />
                </SearchProvider>
            </RecipeProvider>

            <SearchProvider>
                <RecipeProvider>
                    <MealProvider>
                        <GroceryProvider>
                            <ViewPortDisplay>
                                <Route exact path="/">
                                    <HomeView {...props} />
                                </Route>
                            </ViewPortDisplay>
                        </GroceryProvider>
                    </MealProvider>
                </RecipeProvider>
            </SearchProvider>

            <GroceryProvider>
                <MealProvider>
                    <SearchProvider>
                        <Route path="/groceryList" render={
                            props => <GroceryList {...props} />
                        } />
                    </SearchProvider>
                </MealProvider>
            </GroceryProvider>
        </>
    )
}