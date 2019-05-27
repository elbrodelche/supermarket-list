import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "react-flexbox-grid";
import './Modal.css';


class Modal extends React.Component {

    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }


        return (
            <Col className="Modal-backdrop" >
                <div className="Modal">
                    <Row center="xs">
                        <Col><h1>Add Item</h1></Col>
                    </Row>
                    <form onSubmit={this.props.addItem} className="Modal">
                        <Row center="xs">
                            <Col xs={12} >
                                <input
                                    placeholder="Item"
                                    ref={this.props.inputElement}
                                    value={this.props.currentItem.text}
                                    onChange={this.props.handleInput}
                                    className="Input"
                                />
                            </Col>
                        </Row>
                        <Row between="xs">
                            <Col xs={5}>
                                <button className="Modal-button Modal-button1" onClick={this.props.onClose}>Cancel</button>
                            </Col>
                            <Col xs={5}>
                                <button className="Modal-button" type="submit">Add</button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Col>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;
