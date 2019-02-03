import React, { Component } from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css'
class About extends Component {
    render() {
        return (
            <div>
                <Image src='assets/cover.jpg' className="header-image"></Image>
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/about.jpeg" className="about-profile-pic" thumbnail></Image>
                        <h3>Sree Sai Raghava</h3>
                        <p>If what you're doing doesn't make you happy - you're doing the wrong thing. It's so important to do something every day that will make you happy. Fluff that up. Let's put some highlights on these little trees. The sun wouldn't forget them. The shadows are just like the highlights, but we're going in the opposite direction. Sometimes you learn more from your mistakes than you do from your masterpieces. Use absolutely no pressure. Just like an angel's wing. Let's build an almighty mountain.</p>

<p>Now we don't want him to get lonely, so we'll give him a little friend. Of course he's a happy little stone, cause we don't have any other kind. That's a crooked tree. We'll send him to Washington. Don't fight it, use what happens. This is gonna be a happy little seascape. Everything's not great in life, but we can still find beauty in it. How do you make a round circle with a square knife? That's your challenge for the day.</p>

<p>We want to use a lot pressure while using no pressure at all. This is your world, whatever makes you happy you can put in it. Go crazy. We don't have to be committed. We are just playing here. Just a happy little shadow that lives in there. Isn't it great to do something you can't fail at? We must be quiet, soft and gentle. See how easy it is to create a little tree right in your world. Anytime you learn something your time and energy are not wasted.</p>

<p>Don't hurry. Take your time and enjoy. You have freedom here. The only guide is your heart. Let's put some happy trees and bushes back in here. The little tiny Tim easels will let you down. You want your tree to have some character. Make it special.</p>

<p>Just go out and talk to a tree. Make friends with it. Be so very light. Be a gentle whisper. Imagination is the key to painting. This is truly an almighty mountain. Use what happens naturally, don't fight it. Remember how free clouds are. They just lay around in the sky all day long. Isn't that fantastic that you can make whole mountains in minutes?</p>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default About;