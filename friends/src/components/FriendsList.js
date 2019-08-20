import React, {useState, useEffect} from 'react'
import Friends from './Friends'
import { connect } from 'react-redux';
import { getData } from '../actions'

const FriendsList = props => {
    console.log(props.friends)
    const [friends, setFriends] = useState([]);
    return(
        <>
           {/* {!mapStateToProps.isLoading ? (
               <button onClick={props.getData}>Show Friends</button>
           ) : (
               <>
               
               </>
           )} */}
           <button onClick={props.getData}>Show Friends</button>
           <h4>Friends List</h4>
               {props.friends && props.friends.map(friend => 
                <p key={friend.id}> {friend.name}</p>)}
        </>
    )
}

const mapStateToProps = state => {
    
    return {
        friends: state.friends,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {getData})(FriendsList)