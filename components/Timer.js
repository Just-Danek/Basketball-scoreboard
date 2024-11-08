import React from "react" 

export default function Timer(props){ 
    return( 
        <div className='timer'> 
            {props.min}:{props.sec} 
        </div> 
    ) 
}