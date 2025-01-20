import React from "react" 
import HalfBoard from "./components/HalfBoard" 
import Timer from "./components/Timer" 
import "./style.css"


export default function App(){ 
    const [time, setTime] = React.useState(0) 
    React.useEffect(function(){ 
        const updateTime = () => {setTime(time+1)} 
        const intId = setInterval(updateTime, 1000) 
        return () => clearInterval(intId) 
    }, [time]) 
    const minutes = String(Math.floor(time / 60)).padStart(2, '0'); 
    const seconds = String(time % 60).padStart(2, '0'); 

    return( 
        <div className='container'> 
            <HalfBoard  
                team="HOME"  
                min={minutes} 
                sec={seconds} 
            /> 
            <HalfBoard  
                team="GUEST" 
                min={minutes} 
                sec={seconds}  
            />     
            <Timer  
                min={minutes} 
                sec={seconds} 
            /> 
        </div> 
    ) 
}