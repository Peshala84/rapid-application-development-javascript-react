import React from "react";

function CardList(){
    const list=[
        {
            Title:"Card 1",
            Content:"This is a content of card 1",
        },
        {
            Title:"Card 2",
            Content:"This is a content of card 2",
        },
        {
            Title:"Card 3",
            Content:"This is a content of card 3",
        },
    ];
    const listItems = list.map((element,index)=>{
        return(
            <div type="disc" className="item">
                <h2>{element.Title}</h2>
                <p>{element.Content}</p>
            </div>
        );
            
    });
    return(
        <div>
            <h1>Card List</h1>
            <div>{listItems}</div>
        </div>
    )
}

export default CardList;