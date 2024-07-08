import React,{useState} from "react";

function Form(){
    const [InputValue,setInputvalue]=useState("");

    const changeInput=(Event)=>{
        setInputvalue(Event.target.value);
    };
    const showAlert=()=>{
        alert(InputValue);
    };
    return(
    <form>
        <lable>Enter your name:
            <input type="text" value={InputValue} onChange={changeInput}/>
        </lable>
        <button onClick={showAlert}>Click me</button>
    </form>
    )

}

export default Form;