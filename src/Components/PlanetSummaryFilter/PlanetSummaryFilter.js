import React, { Component } from 'react';
import { Form, Button, Grid, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

/**
 * Provides ability to filter the Planet Summary List
 */
class PlanetSummaryFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', population: '', terrain: '',
        }
    }
    filterChanged = (e, key) => {
        const filterVal = e.target.value;
        this.setState({
            [key]: filterVal,
        })
    }
    clearFilters = () => {
        const newFilterVals = { name: '', population: '', terrain: '' };
        this.setState(newFilterVals)
        this.props.onFilterUpdated(() => true);
    }
    updateFilter = () => {
        const { name, population, terrain } = this.state;
        const filterPredicate = p => {
            return (
                (name === '' ? true : p.name.indexOf(name) > -1)
                && (population === '' || isNaN(population) ? true : p.population === parseInt(population))
                && (terrain === '' ? true : p.terrain.indexOf(terrain) > -1));
        };
        this.props.onFilterUpdated(filterPredicate);
    }
    render() {
        const { name, population, terrain } = this.state;
        return (
            <Form>
                <Row>
                    <Col xs={2}>
                        <ControlLabel>{ 'Planet Name:' }</ControlLabel>
                        <FormControl text="text"
                            value={name}
                            onChange={e => this.filterChanged(e, 'name')} />
                    </Col>
                    <Col xs={2}>
                        <ControlLabel>{ 'Population:' }</ControlLabel>
                        <FormControl text="number"
                            value={population}
                            onChange={e => this.filterChanged(e, 'population')} />
                    </Col>
                    <Col xs={2}>
                        <ControlLabel>{ 'Terrain:' }</ControlLabel>
                        <FormControl text="text"
                            value={terrain}
                            onChange={e => this.filterChanged(e, 'terrain')} />
                    </Col>
                    <Col xs={4}>
                        <Button bsStyle="success" className="filterButton" onClick={this.updateFilter}>Search!</Button>
                        <Button bsStyle="warning" className="filterButton" onClick={this.clearFilters}>Clear!</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

PlanetSummaryFilter.propTypes = {
    filterUpdated: PropTypes.func
}

export default PlanetSummaryFilter;