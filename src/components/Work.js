import React, { Component } from 'react';
import Block from './misc/Block';
import {Grid, Col, Row} from 'react-bootstrap';
class News extends Component {
    state ={
        blocks: 
            [
                {   id:1,
                    isStarting:true,
                    heading: 'IoT Project',
                    img: '/assets/person-2.jpg',
                    title:'How to start test',
                    para:'Just go back and put one little more happy tree in there. Just relax and let it flow. That easy. Everythings not great in life,You just practice and find out which way works best for you.',
                    to:'/'
                    },
                {   id:2,
                    heading: 'Android',
                    img: '/assets/mountain-man.jpg',
                    title:'React Js',
                    para:'Just go back and put one little more happy tree in there. Just relax and let it flow. That easy. Everythings not great in life,You just practice and find out which way works best for you.',
                    to:'/'
                    },
                {   id:3,
                    heading: 'Kotlin',
                    img: '/assets/cover.jpg',
                    title:'Html',
                    para:'Just go back and put one little more happy tree in there. Just relax and let it flow. That easy. Everythings not great in life,You just practice and find out which way works best for you.',
                    to:'/'
                    },
                    {   id:4,
                        isStarting:true,
                        heading: 'Kotlin',
                        img: '/assets/cover.jpg',
                        title:'Html',
                        para:'Just go back and put one little more happy tree in there. Just relax and let it flow. That easy. Everythings not great in life,You just practice and find out which way works best for you.',
                        to:'/'
                        },
                        {   id:5,
                            isStarting:false,
                            heading: 'Kotlin',
                            img: '/assets/cover.jpg',
                            title:'Html',
                            para:'Just go back and put one little more happy tree in there. Just relax and let it flow. That easy. Everythings not great in life,You just practice and find out which way works best for you.',
                            to:'/'
                            },
                            {   id:6,
                                isStarting:false,
                                heading: 'Kotlin',
                                img: '/assets/cover.jpg',
                                title:'Html',
                                para:'Just go back and put one little more happy tree in there. Just relax and let it flow. That easy. Everythings not great in life,You just practice and find out which way works best for you.',
                                to:'/'
                                },
                                    
                        
                        
            ],

        
        }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this.state.blocks.map((block)=>(
                            <Col xs={6} sm={6} md={3} xsOffset={block.isStarting ? 0: 1}>
                            <Block
                             key ={block}
                            heading={block.heading}
                            img={block.img}
                            title={block.title}
                            para={block.para}
                            to={block.to}
                            ></Block>
                            </Col>

                        ))}
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default News;