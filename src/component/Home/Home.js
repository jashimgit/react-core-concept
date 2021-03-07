import React from 'react';
import Friend from '../Friend/Friend';
import { useState, useEffect } from 'react';

const Home = () => {
    const [friend, setFriend] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    return (

        <div className="friends-container">
            {
                friend.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Home;