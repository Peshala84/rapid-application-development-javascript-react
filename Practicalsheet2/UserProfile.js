import React from 'react';

function Details(props){
    return(
        <div>
            <h1>Profile</h1>
            <p>Name: {props.prof.name}</p>
            <p>Age: {props.prof.age}</p>
            <p>Email: {props.prof.email}</p>
        </div>
    );
};
function Profile(){
    const profile1={name:"Kavindu",age:"23",email:"lakshankavindu2725@gmail.com"};
    const profile2={name:"Pramodi",age:"22",email:"pramodip@gmail.com"};
    return(
        <>
            <Details prof={profile1}/>
            <Details prof={profile2}/>
        </>
    );
}

export default Profile;