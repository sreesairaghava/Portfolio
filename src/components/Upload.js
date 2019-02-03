import React, { Component } from 'react';
import './misc/Misc.css';
import {Grid, Col, Row,Button} from 'react-bootstrap';
class Upload extends Component {
    render() {
        return (
            <Grid>
                    <div className="upload_form_wrapper">
                        <Row>
                           <h2 className="upload_title"> Upload Work Details</h2>
                        </Row>
                        <Row className="row_wrapper">
                            <form onSubmit={this.onSubmitHandler}>
                            <Col ld={8} className="col_wrapper"> 
                            <label className="label_text">Heading</label>
                            <input className="form_input" type="text"
                                placeholder="Enter Heading" 
                                name="heading"
                    
                                required
                            />
                            </Col>
                            <Col ld={8}  className="col_wrapper">
                            <label className="label_text">Title</label>
                            <input className="form_input" type="text"
                                placeholder="Enter Title"   
                                name="title"
                                
                                
                            />
                            </Col>

                            <Col ld={8}  className="col_wrapper">
                            <label className="label_text">Description</label>
                                <textarea name="para" id="" cols="20" rows="2" className="text_area_input"
                                    placeholder="Enter your description"
                                    
                                ></textarea>
                            </Col>
                            <Col ld={8}  className="col_wrapper">
                                    <Button bsStyle="primary" className="btn_submit" type="submit">Submit</Button>
                            </Col> 
                            </form>
                        </Row>
                    </div>
                   
            </Grid>
            
            
        );
    }
}

export default Upload;