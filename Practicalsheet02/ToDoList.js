import React from "react";

function todolist(){
    const tasks=['Learn React','Build a project','Go for a walk','Do some exercises','Join a music class','Daed a novel'];

    const listItems=tasks.map((task,index)=>{
        return(
            <li key={index} className="item">{task}</li>
        );
    });
    return (
        
        <div >
            <h1>To Do List</h1>
            <div>{listItems}</div>
        </div>
    );
}

export default todolist;
