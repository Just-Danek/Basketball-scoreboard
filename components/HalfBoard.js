import React from "react" 
import AddScoreButton from "./AddScoreButton" 
import buttonsData from "./buttonsData" 

export default function HalfBoard(props){ 
    const [points, setPoints] = React.useState(0) 
    const scoreButtons = buttonsData.map(scoreButton => ( 
            <AddScoreButton 
                key={scoreButton.id} 
                id={scoreButton.id} 
                func={() => addPoints(scoreButton.addScore, scoreButton.id)} 
            /> 
        ) 
    ) 
    
    function addPoints(countToAdd, numb){ 
        const buttonComments = buttonsData[numb-1].comments 
        const randomNumber = Math.floor(Math.random() * buttonComments.length) 
        setPoints(points+countToAdd) 
        console.log( 
            `${props.min}:${props.sec} - ${props.team} team +${countToAdd}: ${buttonComments[randomNumber]}` 
        ) 
    } 

    return( 
        <div class="half-board"> 
            <h3>{props.team}</h3> 
            <div class="bg-score"> 
                <p>{points}</p> 
            </div> 
            <nav> 
                {scoreButtons} 
            </nav> 
        </div>   
    ) 
}