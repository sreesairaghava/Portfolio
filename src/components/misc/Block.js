import React, { Component } from 'react';
import './Block.css'
import {Link} from 'react-router-dom';
class Block extends Component {
    render() {
        return (
            <div className="block_wrapper">
                <h3 className="block_heading">{this.props.heading}</h3>
                <img src={this.props.img} className="block_image" alt="title"/>
                <p className="block_title">{this.props.title}</p>
                <p className="block_desc">{this.props.para}</p>
                <Link to={`${this.props.to}`}><button className="block_btn"><span>Read More</span></button></Link>
            </div>
        );
    }
}

export default Block;