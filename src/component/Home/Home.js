import React from 'react';
import Friend from '../Friend/Friend';
import { useState, useEffect } from 'react';

const Home = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);

    return (

        <div className="container mt-4">
            <div className="row">


                {
                    friends.map(friend => <Friend friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Home;