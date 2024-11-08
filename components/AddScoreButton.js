import React from "react"

export default function AddScoreButton(props){
    return(
        <button onClick={props.func}>{`+${props.id}`}</button>
    )
}