import React, {Component} from 'react'
import {Col, Row} from "react-flexbox-grid";
import {FaTrashO} from 'react-icons/lib/fa';
import './Items.css';

class Items extends Component {
    createTasks = item => {
        return (
            <Row center="xs" key={item.key}>
                <Col xs={10}>
                    <Row between="xs" className="Item">
                        <Col xs={1} start>
                            {item.text}
                        </Col>
                        <Col xs={1}>
                            <FaTrashO onClick={() => this.props.deleteItem(item.key)}/>
                        </Col>
                    </Row>

                </Col>
            </Row>
        )
    };

    render() {
        const todoEntries = this.props.entries;
        return todoEntries.map(this.createTasks)
    }
}

export default Items
