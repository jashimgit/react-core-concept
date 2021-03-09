import React from 'react';
import { useState, useEffect } from 'react';

import SingleCountry from './SingleCountry';

const Countries = () => {

    const [allCountry, setAllCountry] = useState([])
    useEffect(() => {
        const URL = 'https://restcountries.eu/rest/v2/all';
        fetch(URL)
            .then(res => res.json())
            .then(data => setAllCountry(data));
    });
    // const [SingleCountry, setSingleCountry] = useState({});
    const viewDetails = (name) => {
        console.log(name);
    }
    // useEffect((name) => {
    //     const url = `https://restcountries.eu/rest/v2/name/${name}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setSingleCountry(data));
    // })

    console.log(SingleCountry);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-9">
                    <p>all country will show here</p>
                    <div className="row">
                        {
                            allCountry.map(singleCountryCard => <SingleCountry showDetails={viewDetails} data={singleCountryCard}></SingleCountry>)
                        }
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Country Name</div>
                            <p className="card-text">Country details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countries;