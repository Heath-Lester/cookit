
import React, { useState } from "react"
import "./ViewPort.css"



export const ViewPortContext = React.createContext()


export const ViewPortDisplay = props => {

    const [viewPort, setViewPort] = useState(0)


    return (
        <ViewPortContext.Provider value={{
            viewPort, setViewPort
        }}>
            {props.children}
        </ViewPortContext.Provider>
    )
}