import React from 'react';
import { useState, useEffect } from 'react';
import SingleCountry from './SingleCountry';
import './country.css';
import Loader from "react-loader-spinner";


const Countries = () => {
    const [loading, setLoading] = useState(false)
    const [allCountry, setAllCountry] = useState([])
    // const [SingleCountry, setSingleCountry] = useState('bangladesh');
    useEffect(() => {
        const URL = 'https://restcountries.eu/rest/v2/all';
        fetch(URL)
            .then(res => res.json())
            .then(data => setAllCountry(data));
        setLoading(true);
    }, []);

    // const viewDetails = (name) => {
    //     console.log(name);

    // }
    // useEffect(() => {
    //     // viewDetails();
    //     const url = `https://restcountries.eu/rest/v2/name/${SingleCountry}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }, [SingleCountry])

    if (loading) {
        return (
            <div className="container-fluid pt-4 bg-tomato">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                allCountry.map(singleCountryCard => <SingleCountry data={singleCountryCard}></SingleCountry>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Country details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={2000} //3 secs
            />
        );
    }
};

export default Countries;