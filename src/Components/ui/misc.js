import React from 'react';
import {Link} from 'react-router-dom';


export const Tag = (props)=>{
    const template = <div
            style={{
                background: props.bck,
                fontSize:props.size,
                color:props.color,
                padding: '5px 10px',
                display: 'inline-block',
                fontFamily: 'Righteous',
                //additional props (future usage)
                ...props.add
            }}
        > 
        
            {props.children}
         </div>

    if(props.link){
        return (
            <Link to={props.linkTo}>
                {template}
            </Link>
        )

    }else{
        return template
    }
}
//gia na parw ta dedomena apo tin firebase me
//tin morfi antikeimenou pou thelw.
export const firebaseLooper = (snapshot) =>{
    let data=[];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data
}

export const reverseArray = (actualArray)=>{
    let reversedArray = [];

    for(let i=actualArray.length-1;i>=0;i--){
        reversedArray.push(actualArray[i]);
    }
    return reversedArray
}