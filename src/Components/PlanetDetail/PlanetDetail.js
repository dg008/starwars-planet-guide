import React, { Component } from 'react';
import { Button, Grid, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { PlanetResidentList } from '../PlanetResidentList';
import { PlanetDetailModel } from '../../models';

/**
 **/
class PlanetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { planet } = this.props;
        return (
            <div className="displayForm" style={{ marginTop: '10px'}}>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Planet Name:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.name}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Rotation Period:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.rotation_period}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Orbital Period:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.orbital_period}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Diameter:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.diameter}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Climate:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.climate}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Gravity:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.gravity}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Terrain:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.terrain}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Surface Water:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.surface_water}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Population:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.population}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Residents:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        {
                            planet.residentNames
                            ? <PlanetResidentList residents={planet.residentNames} />
                            : null
                        }                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Created:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.created}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Edited:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.edited}</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ControlLabel className="right">Url:</ControlLabel>
                    </Col>
                    <Col xs={6}>
                        <ControlLabel className="left">{planet.url}</ControlLabel>
                    </Col>
                </Row>
                <Button style={{marginTop: '10px'}} bsStyle="warning" onClick={this.props.onClose}>Close</Button>
            </div>
        );
    }
}

PlanetDetail.propTypes = {
    planet: PropTypes.arrayOf(PlanetDetailModel).isRequired,
}

export default PlanetDetail;