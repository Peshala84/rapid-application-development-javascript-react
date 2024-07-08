import React,{useState,useEffect} from "react";

function Timer(){
    const [count,setCount]=useState(0);

    var timer;
    useEffect(()=>{
        timer=setInterval(()=> {
            setCount((Count)=>Count+1);
        },1000);
        return () => clearInterval(timer);
    });
    
    const stop=() =>{
        clearInterval(timer);
    }

    return(
        <div className="App">
            <h1>Countdown:{count}</h1>
            <button onClick={stop}>Stop</button>
        </div>
    );
}

export default Timer;