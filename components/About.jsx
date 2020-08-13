import React, { Component } from 'react'
import { Container, Col, Image, Row, } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/dog-people.jpg" className="header-image" />
                <Container>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>Frank the Tank</h3>
                        <p>  Google for a solution and variations of importing (impo
                             </p>
                        <p> Google for a solution and variations of importing (impo</p>
                        <p> Google for a solution and variations of importing (impo</p>
                    </Col>
                </Container>
                <Container>
                    <Row>
                        <Col>React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there are significant breaking changes from the pre v1 react-bootstrap.</Col>
                        <Col>React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there are significant breaking changes from the pre v1 react-bootstrap.</Col>
                    </Row>
                    <Row>
                        <Col>React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there are significant breaking changes from the pre v1 react-bootstrap.</Col>
                        <Col><Image src="assets/person-2.jpg" className="second-pic" /></Col>
                        <Col>React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there are significant breaking changes from the pre v1 react-bootstrap.</Col>
                    </Row>
                    <Row>
                        <Col>React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there are significant breaking changes from the pre v1 react-bootstrap.</Col>
                        <Col>React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there are significant breaking changes from the pre v1 react-bootstrap.</Col>
                        <Col>React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there are significant breaking changes from the pre v1 react-bootstrap.</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
