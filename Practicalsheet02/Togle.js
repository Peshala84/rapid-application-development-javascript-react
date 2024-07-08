import React,{useState} from "react";

function Toggle(){
    const [isOn,setIsOn]=useState(false);

    const toggleMessage=()=>{
        setIsOn(!isOn);
    };

    return(
        <div>
            <button onClick={toggleMessage}>
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}

export default Toggle;