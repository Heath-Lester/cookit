
import React from "react"
import { Route, Redirect } from "react-router-dom"
import './App.css';

export const App = () => (
  <>
      <Route render ={ () => {
          if (localStorage.getItem("kennel_customer")) {
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
