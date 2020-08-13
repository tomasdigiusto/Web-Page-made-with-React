import React, { Component } from 'react'
import { Container, Row, Col, Image, Media } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-man.jpg" className="header-image" />
                <Container className="container-media">
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="assets/person-3.jpg"
                            alt="" />

                        <Media.Body>
                            <h5>Media Heating</h5>
                            <p>The media object helps build complex and repetitive components (e.g. blog comments, tweets, the like and more) where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox. Below is an example of a single media object. Only two classes are required—the wrapping Media and the Media.Body around your content. Optional padding and margin can be controlled through spacing utilities.</p>
                            <Media>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="assets/person-2.jpg"
                                    alt="" />

                                <Media.Body>
                                    <h5>Media Nesting</h5>
                                    <p>Media objects can be infinitely nested, though we suggest you stop at some point. Place nested Media within the Media.Body of a parent media object.</p>
                                    <Media>
                                        <img
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src="assets/person-1.jpg"
                                            alt="" />

                                        <Media.Body>
                                            <h5>Media Nesting</h5>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.</p>
                                        </Media.Body>
                                    </Media>
                                </Media.Body>
                            </Media>
                        </Media.Body>
                    </Media>
                </Container>
            </div>
        )
    }
}
