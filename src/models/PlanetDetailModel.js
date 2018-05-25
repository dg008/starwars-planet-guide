import PropTypes from 'prop-types';

const PlanetDetailModel = PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.number,
    terrain: PropTypes.string,
    rotation_period: PropTypes.number,
    orbital_period: PropTypes.number,
    diameter: PropTypes.number,
    climate: PropTypes.string,
    surface_water: PropTypes.number,
    residents: PropTypes.arrayOf(String),
    residentNames: PropTypes.arrayOf(String),
    edited: PropTypes.instanceOf(Date),
    created: PropTypes.instanceOf(Date),
    url: PropTypes.string,
});

export default PlanetDetailModel;