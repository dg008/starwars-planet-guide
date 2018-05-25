import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import  _  from 'lodash';
import { PropTypes } from 'prop-types';
import { PlanetSummaryModel } from '../../models'
import { PlanetSummaryFilter } from '../PlanetSummaryFilter';

/**
 * 
 * @param {string[]} planets - The star wars planets to be displayed with filtering and sorting
 */
class PlanetSummaryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planetsSource: [],
            planets: [],
            sortKey: '',
            sortDir: '',
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { planets } = prevState.planets.length === 0 ? nextProps : prevState;
        return {
            planets,
            planetsSource: nextProps.planets,
        };
    }
    onSort = (e, key) => {
        const { planets, sortKey: prevSortKey, sortDir: prevSortDir } = this.state;
        const sortDir = key !== prevSortKey
            ? 'ASC'
            : prevSortDir === 'ASC' ? 'DESC' : 'ASC';
        
        const sortedPlanets = _.orderBy(planets, [key], [sortDir.toLowerCase()]);
        this.setState({planets: sortedPlanets, sortKey: key, sortDir })
    }
    filterList = (filterPredicate) => {
        const { planetsSource } = this.state;
        const filteredPlanets = planetsSource.filter(filterPredicate);
        // Filter and reset sort
        this.setState({planets: filteredPlanets, sortKey: '', sortDir: 'ASC' });
    }
    viewPlanetDetail = (planetName) => {
        this.props.viewPlanetDetail(planetName);
    }
    render() {
        const { planets } = this.state;
        return (
            <div>
                <PlanetSummaryFilter onFilterUpdated={this.filterList} />
                <Table className="PlanetList">
                    <thead>
                        <tr>
                            <th onClick={e => this.onSort(e, 'name')}>Planet Name</th>
                            <th onClick={e => this.onSort(e, 'population')}>Population</th>
                            <th onClick={e => this.onSort(e, 'terrain')}>Terrain</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        planets.map((p, index) => {
                            return (
                                <tr key={index} onClick={e => this.viewPlanetDetail(p.name)} >
                                    <td>{p.name}</td>
                                    <td>{p.population || 'Unknown'}</td>
                                    <td>{p.terrain}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

PlanetSummaryList.propTypes = {
    planets: PropTypes.arrayOf(PlanetSummaryModel).isRequired,
}

export default PlanetSummaryList;