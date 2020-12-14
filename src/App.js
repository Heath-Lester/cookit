
import { ApplicationViews } from "./components/ApplicationViews"
import { Register } from "./components/auth/Register"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login"
import React from "react"
import './App.css';


export const App = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("app_user_id")) {
                return (
                    <>
                        {/* <Route render={props => <NavBar {...props} />} /> */}
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
