import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friends from './Friends'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])

    return(
        <>
            <h4>Friends List</h4>
            {friends && friends.map( friend => {
                return <Friends key ={friend.id} friend={friend}/>
            })}
        </>
    )
}

export default FriendsList