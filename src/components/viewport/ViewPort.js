
import React, { useState, useEffect, useContext } from "react"
import { ViewPortContext } from "./ViewPortContext"
import { DetailedResult } from "./DetailedResult"
import { SearchResults } from "./SearchResults"
import "./ViewPort.css"


export const ViewPort = props => {
    
    const {viewPort} = useContext(ViewPortContext)
    
    console.log("props", props)

    console.log("ViewPort", viewPort)

    
    
    if ( viewPort === 1 ) {
        return <SearchResults  {...props}/>

    } else if ( viewPort === 2 ) {
        return <DetailedResult  {...props}/>

    } else {
        return <h3>Nothing to Render</h3>
    }

}

