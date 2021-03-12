import React from 'react';
import './nomatch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Nomatch = () => {
    return (
        <div className="container-fluid p-0 my-err text-center">
            <div className=" mx-auto  d-flex flex-column align-items-center">
                <h2 className="display-4 text-danger"> Sorry !! Requested Page NOT FOUND</h2>
                <h3 className="text-danger">
                    <FontAwesomeIcon icon={faExclamationCircle} /> Error 404 <FontAwesomeIcon icon={faExclamationCircle} /> </h3>
            </div>
        </div>
    );
};

export default Nomatch;