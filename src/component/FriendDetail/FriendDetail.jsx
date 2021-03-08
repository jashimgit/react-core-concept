import React from 'react';
import { useParams } from 'react-router-dom';
import {useState,useEffect } from 'react';

const boxStyle = {
    height : '300px',
    width: '400px',
    margin: '10px',
    padding: '10px',
    border: '2px solid tomato'
}
const FriendDetail = () => {
    const {id} = useParams();
    
    const [sfriend, setSfriend] = useState({});
   
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSfriend(data))
    }, [id]);



    return (
        <div style={boxStyle} className="mx-auto">
          <p>{id}</p>
          <h3>Hi, I'm {sfriend.name}</h3>
           <p> {sfriend.address.street},{sfriend.address.suite},{sfriend.address.city}</p>
        </div>
    );
};

export default FriendDetail;