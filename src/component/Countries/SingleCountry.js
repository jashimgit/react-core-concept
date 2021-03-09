import React from 'react';
import './country.css'

const SingleCountry = (props) => {
    console.log(props.data);
    const showDetails = props.showDetails;
    const { name, capital, flag } = props.data;
    return (
        <div className="col-md-4">
            <div className="card mt-3">
                <img src={flag} className="card-img-top img-fluid" alt="flag" />
                <div className="card-body">
                    <p>{name}</p>
                    <p>{capital}</p>
                    <button onClick={() => showDetails(name) } className="btn btn-outline-primary btn-sm">View Details</button>
                </div>

            </div>
        </div>
    );
};

export default SingleCountry;