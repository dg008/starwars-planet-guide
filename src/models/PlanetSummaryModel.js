import PropTypes from 'prop-types';

const PlanetSummaryModel = PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.number,
    terrain: PropTypes.string,
});

export default PlanetSummaryModel;