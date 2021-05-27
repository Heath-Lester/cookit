
import React, { useContext } from "react"
import { ViewPortContext } from "./ViewPortContext"
import { DetailedResult } from "./DetailedResult"
import { SearchResults } from "./SearchResults"
import { DetailedSavedRecipe } from "./DetailedSavedRecipe"
import "./ViewPort.css"

export const ViewPort = props => {
    
    const {viewPort} = useContext(ViewPortContext)

    
    if ( viewPort === 1 ) {
        return <SearchResults  {...props} />

    } else if ( viewPort === 2 ) {
        return <DetailedResult  {...props} />

    } else if ( viewPort === 3 ) {
        return <DetailedSavedRecipe {...props} />
    } else {
        return <></>
    }

}

