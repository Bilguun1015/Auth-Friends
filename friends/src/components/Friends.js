import React from 'react';

const Friends = props => {
    console.log(props)
    return(
        <>
            <p>hi:{props.name} {props.age} {props.email}</p>
        </>
    )
}
  
    
    

export default Friends