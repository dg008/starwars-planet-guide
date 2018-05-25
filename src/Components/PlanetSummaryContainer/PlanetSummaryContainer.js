import React, { Component } from 'react';
import { PlanetSummaryList } from '../PlanetSummaryList';
import { PlanetDetail } from '../PlanetDetail';

/**
 
 */
class PlanetSummaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      planetDetail: null,
    };
  }
  componentDidMount() {
    // TODO: Fetch this url from a config file
    fetch('https://swapi.co/api/planets')
    .then(results => {
      return results.json();
    })
    .then(data => {
      const planets = data.results.map(p => {
        return {
          ...p,
          population: p.population === 'Unknown' ? null : parseInt(p.population),
        }
      });
      this.setState({ planets });
    });
  }
  viewPlanetDetail = (planetName) => {
    const { planets } = this.state;

    const planet = planets.find(p => p.name === planetName);

    this.setState({
      showPlanetDetail: true,
      planetDetail: {
        ...planet,
        residentNames: []
      }
    });

    if (planet.residents) {
      planet.residents.forEach(r => {
        fetch(r)
        .then(results => {
          return results.json();
        })
        .then(data => {
          console.log('data', data);
          const { planetDetail } = this.state;
          const residentNames = planetDetail.residentNames.concat([data.name])
          this.setState({ planetDetail: {...planetDetail, residentNames } });
        });
      })
    }
  }
  viewPlanetList = () => {
    this.setState({
      showPlanetDetail: false,
      planetDetail: null,
    })
  }
  render() {
    const { planets, planetDetail } = this.state;
    return (
        <div>
          {
            !this.state.showPlanetDetail
              ? <PlanetSummaryList planets={planets} viewPlanetDetail={this.viewPlanetDetail} />
              : null
          }
          {
            this.state.showPlanetDetail
              ? <PlanetDetail planet={planetDetail} onClose={this.viewPlanetList} />
              : null
          }
        </div>
    );
  }
}

export default PlanetSummaryContainer;
