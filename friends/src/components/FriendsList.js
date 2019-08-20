import React, {useState, useEffect} from 'react'
import Friends from './Friends'
import { connect } from 'react-redux';
import { getData, postData } from '../actions'

const FriendsList = props => {
    console.log(props.friends)
    const [friends, setFriends] = useState({
        name: '',
        age: Number,
        email: '',
    });

    const handleInput = e => {
        setFriends({...friends, [e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.postData(friends)
        setFriends({
            name: '',
            age: Number,
            email: ''
        })
    }
    return(
        <>
            <h3>Add A friend</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={friends.name} onChange={handleInput} placeholder='name'/>
              <input type="number" name="age" value={friends.age} onChange={handleInput} placeholder='age'/>
              <input type="email" name="email" value={friends.height} onChange={handleInput} placeholder='email'/>
              <button type="submit">Add Smurf</button>
            </form>
        
        <>
               <button onClick={props.getData}>Show Friend List</button>
               {props.friends && props.friends.map(friend => 
                <p key={friend.id}> {friend.name}</p>)}
        </>
        </>
    )
}

const mapStateToProps = state => {
    
    return {
        friends: state.friends,
        isLoaded: state.isLoaded
    }
}

export default connect(mapStateToProps, {getData, postData})(FriendsList)