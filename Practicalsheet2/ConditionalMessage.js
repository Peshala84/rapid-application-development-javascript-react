import React from "react";

function Condition(props){
    return(
        <div>
            {props.isLoggIn? <h3>Welcome back!</h3> : <h3>Please log in</h3>}
        </div>
    );
}
function Massage(){
    const isLoggIn = true;

    return(
        <div>
            <Condition isLoggIn={isLoggIn}/>
        </div>
    );
}

export default Massage;