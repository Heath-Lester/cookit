
import React from "react"
import { ViewPortDisplay } from "./viewport/ViewPortContext"
import { AllSavedRecipes } from "./savedRecipes/AllSavedRecipes"
import { GroceryProvider } from "./groceryList/GroceryProvider"
import { SearchProvider } from "./search/SearchProvider"
import { RecipeProvider } from "./savedRecipes/RecipeProvider"
import { MealProvider } from "./meal/MealProvider"
import { GroceryList } from "./groceryList/GroceryList"
import { RecipeForm } from "./savedRecipes/RecipeForm"
import { HomeView } from "./Home"
import { Route } from "react-router-dom"




export const ApplicationViews = props => {
    return (
        <>
            <RecipeProvider>
                <SearchProvider>
                    <Route exact path="/savedrecipes" render={
                        props => <AllSavedRecipes {...props} />
                    } />
                </SearchProvider>
            </RecipeProvider>

            <RecipeProvider>
                <Route exact path="/newrecipe" render={
                    props => <RecipeForm {...props} />
                } />
                <Route path="/editrecipe" render={
                    props => <RecipeForm {...props} />
                } />
            </RecipeProvider>

            <SearchProvider>
                <RecipeProvider>
                    <MealProvider>
                        <ViewPortDisplay>
                            <Route exact path="/">
                                <HomeView {...props} />
                            </Route>
                        </ViewPortDisplay>
                    </MealProvider>
                </RecipeProvider>
            </SearchProvider>

            <GroceryProvider>
                <Route path="/grocerylist" render={
                    props => <GroceryList {...props} />
                } />
            </GroceryProvider>
        </>
    )
}