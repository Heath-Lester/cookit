
import React from "react"
import { ApplicationViews } from "./components/ApplicationViews"
import { Route, Redirect } from "react-router-dom"
import { Register } from "./components/auth/Register"
import { Login } from "./components/auth/Login"
import './App.css';


export const App = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("app_user_id")) {
                return (
                    <>
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
