import React from 'react';
import { useParams } from 'react-router-dom';
import {useState,useEffect } from 'react';

const boxStyle={
    height : '300px',
    width: '400px',
    margin: '10px',
    padding: '10px',
    border: '2px solid tomato'
}
const FriendDetail = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    
    },[]);

// console.log(friend);

const [street] = friend.address.street;
    return (
        <div style={boxStyle}>
            <p>id : {id}</p>
            <h4>{friend.name}</h4>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <p>Address: <span>{street}</span></p>
        </div>
    );
};

export default FriendDetail;