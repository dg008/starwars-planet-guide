import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/**
 * 
 * @param {string[]} residents - The list of resident names for a particular planet
 */
const PlanetResidentList = ({ residents }) => {
    return (            
        <ul className="left">
            {
                residents.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
    )
}

PlanetResidentList.propTypes = {
    residents: PropTypes.arrayOf(String).isRequired,
}

export default PlanetResidentList;