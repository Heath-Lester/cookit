
import React from "react"
import { ViewPortDisplay } from "./viewport/ViewPortContext"
import { AllSavedRecipes } from "./savedRecipes/AllSavedRecipes"
import { GroceryProvider } from "./groceryList/GroceryProvider"
import { SearchProvider } from "./search/SearchProvider"
import { RecipeProvider } from "./savedRecipes/RecipeProvider"
import { MealProvider } from "./meal/MealProvider"
import { GroceryList } from "./groceryList/GroceryList"
import { NewRecipe } from "./savedRecipes/NewRecipe"
import { HomeView } from "./Home"
import { Route } from "react-router-dom"




export const ApplicationViews = (props) => {
    return (
        <>
            <RecipeProvider>
                <SearchProvider>
                    <Route exact path="/savedRecipes" render={
                        props => <AllSavedRecipes {...props} />
                    } />
                </SearchProvider>
            </RecipeProvider>

            <RecipeProvider>
                <Route exact path="/newRecipe" render={
                    props => <NewRecipe {...props} />
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
                <Route path="/groceryList" render={
                    props => <GroceryList {...props} />
                } />
            </GroceryProvider>
        </>
    )
}