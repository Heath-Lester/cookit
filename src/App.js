
import React from "react"
import { ApplicationViews } from "./components/ApplicationViews"
import { Route, Redirect } from "react-router-dom"
import { Register } from "./components/auth/Register"
import { NavBar } from "./components/nav/NavBar"
import { Login } from "./components/auth/Login"
import './App.css';


export const App = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("cookit_user")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)

export default App;
