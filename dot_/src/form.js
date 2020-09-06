import React, { Component } from "react";
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render() {
        return (
            <form>
                <p>Nome:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>E-mail:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <p>Telefone:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <p>Mensagem:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}

export default MyForm;