// import React from 'react';
import './Nayok.css'

function Nayok(props){


    return (
        
            <div className="nayokContainer">
            <h1>Hero Name:  {props.hero}</h1>
            <h3>Heroien Name :  {props.heroien}</h3>
            </div>

    );
}

export default Nayok;