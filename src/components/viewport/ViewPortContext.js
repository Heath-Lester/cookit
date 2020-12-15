
import React, { useState } from "react"
import "./ViewPort.css"

export const ViewPortContext = React.createContext()

export const ViewPortDisplay = props => {

    const [viewPort, setViewPort] = useState(0)

    console.log("View Port Context", viewPort)


    return (
        <ViewPortContext.Provider value={{
            viewPort, setViewPort
        }}>
            {props.children}
        </ViewPortContext.Provider>
    )
}