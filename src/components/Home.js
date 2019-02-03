import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Jumbotron>
                        <h2>Welcome to RaghavaCodes.io</h2>
                        <p>This website is mainly to understand working of an app
                            with React-Router and React-Bootstrap along with React 
                            Router Dom                        </p>
                            <Link to='/about'>
                            <Button bsStyle="primary">About</Button>
                            </Link>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={12} className="heading-wrapper">
                            <h1>Top Skills</h1>
                        </Col>
                    </Row>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-1.png" circle className="profile-pic"></Image>
                            <h3>React Js</h3>
                            <p>Now, we're going to fluff this cloud. Even the worst thing we can do here is good. 
                                All you need to paint is a few tools, a little instruction, and a vision in your mind. 
                                It takes dark in order to show light. Maybe there's a happy little bush
                                that lives right there.
                            </p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-2.png" circle className="profile-pic"></Image>
                            <h3>HTML</h3>
                            <p>I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a 
                                pursued interest. Anybody can do what I do. Isn't that fantastic? If it's not what you want - 
                                stop and change it. Don't just keep going and expect it will get better. You can't have 
                                light without dark. You can't know happiness unless you've known sorrow. We need dark in order to 
                                show light.
                            </p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-3.png" circle className="profile-pic"></Image>
                            <h3>CSS</h3>
                            <p>We don't make mistakes we just have happy little accidents. 
                                Here we're limited by the time we have. Let's have a little bit of fun today.
                                 God gave you this gift of imagination. Use it.
                            </p>

                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        );
    }
}

export default Home;