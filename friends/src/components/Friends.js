import React from 'react';

const Friends = props => {
    console.log('hi',props)
    return(
        <>
            <p>{props.name} {props.age} {props.email}</p>
        </>
    )
}
  
    
    

export default Friends