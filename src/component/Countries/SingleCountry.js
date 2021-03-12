import React from 'react';
import './country.css'

const SingleCountry = (props) => {
    // console.log(props.data);
    // const showDetails = props.showDetails;
    const { name, capital, flag, population } = props?.data;
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card mb-3">
                <img src={flag} className="card-img-top img-fluid" alt="flag" />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p>Capital{capital}</p>
                    <h6>{population}</h6>
                    <button className="btn btn-success btn-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCountry;