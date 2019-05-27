import React, {Component} from 'react'
import {Col, Row} from "react-flexbox-grid";
import './Head.css';

class Head extends Component {
    render() {
        return (
            <Col xs={12}>
                <Row center="xs">
                    <Col xs={8} className="Head">
                        <h1>Supermarket List</h1>
                        <p>{this.props.count} ITEMS</p>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default Head
