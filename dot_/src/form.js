import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './form.css'

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
                    {/*onChange={this.myChangeHandler}*/}
                <div className="box4">
                    {/*<form name="form">*/}
                        <div className="form_line">
                            <label className="caption_form" htmlFor="name">*Nome: </label>
                            <input id="name" type="text" placeholder="Seu nome" ></input>
                        </div>
                        <div className="form_container">
                            <div className="form_half">
                                <label htmlFor="email" className="caption_form label_email">*Email: </label>
                                <input id="email" type="email" placeholder="Informe seu e-mail"></input>
                            </div>
                            <div className="form_space_between"></div>
                            <div className="form_half tooltip">
                                <label className="caption_form label_phone" htmlFor="phone">*Telefone:
                                    <span className="tooltiptext">O telefone deve ter DDD: (  )_____-____</span></label>
                                <input id="phone" type="text"></input>
                            </div>
                        </div>
                        <div className="form_line">
                            <label className="caption_form label_message" htmlFor="message">*Mensagem: </label>
                            <textarea id="message" type="message" placeholder="Escreva aqui" ></textarea>
                        </div>
                        <button className="form_button" onClick="">Enviar</button>
                    {/*</form>*/}
                </div>
            </form>

        );
    }
}

export default MyForm;