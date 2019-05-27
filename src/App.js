import React, {Component} from 'react'
import './App.css';
import Items from "./Items/Items";
import {Grid} from "react-flexbox-grid";
import Head from "./Head/Head";
import Modal from "./Modal/Modal";


class App extends Component {
    inputElement = React.createRef();

    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
            },
            isOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        });
        this.setState({
            items: filteredItems,
        });
    };

    handleInput = e => {
        const itemText = e.target.value;
        const currentItem = {text: itemText, key: Date.now()};
        this.setState({
            currentItem,
        })
    };
    addItem = e => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {text: '', key: ''},
            });
            this.toggleModal();
        }

    };

    render() {
        return <Grid className="App">
            <header className="App-header">
                <Head count={this.state.items.length}/>
            </header>

            {!this.state.items.length && <h3>List is empty</h3>}

            <Items entries={this.state.items} deleteItem={this.deleteItem}/>

            <button className="button" onClick={this.toggleModal}>
                Add Item
            </button>
            <Modal show={this.state.isOpen}
                   onClose={this.toggleModal}
                   addItem={this.addItem}
                   inputElement={this.inputElement}
                   handleInput={this.handleInput}
                   currentItem={this.state.currentItem}
            />
        </Grid>
    }
}

export default App
