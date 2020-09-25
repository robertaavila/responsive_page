import React from "react";
import './form.css';

const txtFieldState = {
    value: "",
    valid: true,
    typeMismatch: false,
    errMsg: "" //this is where our error message gets across
};

const ErrorValidationLabel = ({txtLbl}) => (
    <label htmlFor="" style={{color: "red"}}>
        {txtLbl}
    </label>
);

class MyForm extends React.Component {

    state = {
        email: {
            ...txtFieldState,
            fieldName: "email",
            required: true,
            requiredTxt: "O e-mail deve ser preenchido.",
            formatErrorTxt: "E-mail inválido."
        },
        phone: {
            ...txtFieldState,
            fieldName: "phone",
            required: true,
            requiredTxt: "Telefone é obrigatório no formato: 99 99999 9999."
        },
        name: {
            ...txtFieldState,
            fieldName: "name",
            required: true,
            requiredTxt: "O nome deve ser preenchido."
        },
        message: {
            ...txtFieldState,
            fieldName: "message",
            required: false,
            requiredTxt: "A mensagem deve ser preenchida."
        },
        allFieldsValid: false
    };

    reduceFormValues = formElements => {
        const arrElements = Array.prototype.slice.call(formElements); //we convert elements/inputs into an array found inside form element

        //we need to extract specific properties in Constraint Validation API using this code snippet
        const formValues = arrElements
            .filter(elem => elem.name.length > 0)
            .map(x => {
                const {typeMismatch} = x.validity;
                const {name, type, value} = x;

                return {
                    name,
                    type,
                    typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
                    value,
                    valid: x.checkValidity()
                };
            })
            .reduce((acc, currVal) => {
                //then we finally use reduce, ready to put it in our state
                const {value, valid, typeMismatch, type} = currVal;
                const {fieldName, requiredTxt, formatErrorTxt} = this.state[
                    currVal.name
                    ]; //get the rest of properties inside the state object

                //we'll need to map these properties back to state so we use reducer...
                acc[currVal.name] = {
                    value,
                    valid,
                    typeMismatch,
                    fieldName,
                    requiredTxt,
                    formatErrorTxt
                };

                return acc;
            }, {});

        return formValues;
    };

    checkAllFieldsValid = formValues => {
        return !Object.keys(formValues)
            .map(x => formValues[x])
            .some(field => !field.valid);
    };

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;

        //we need to extract specific properties in Constraint Validation API using this code snippet
        const formValues = this.reduceFormValues(form.elements);
        const allFieldsValid = this.checkAllFieldsValid(formValues);
        //note: put ajax calls here to persist the form inputs in the database.

        //END

        this.setState({...formValues, allFieldsValid}); //we set the state based on the extracted values from Constraint Validation API
    };


    render() {
        const ErrorValidationLabel = ({txtLbl}) => (
            <label htmlFor="" style={{color: "red"}}>
                {txtLbl}
            </label>
        );
        const {email, phone, name, message, allFieldsValid} = this.state;
        const successFormDisplay = allFieldsValid ? "block" : "none";
        const inputFormDisplay = !allFieldsValid ? "block" : "none";
        const renderEmailValidationError = email.valid ?
            "" :
            <ErrorValidationLabel txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt}/>;
        const renderMessageValidationError = message.valid ? "" : <ErrorValidationLabel txtLbl={message.requiredTxt}/>;
        const renderPhoneValidationError = name.valid ? "" : <ErrorValidationLabel txtLbl={phone.requiredTxt}/>
        const renderNameValidationError = name.valid ? "" :
            <ErrorValidationLabel txtLbl={name.requiredTxt}/>;
        return (
            <>
                <div style={{display: successFormDisplay}}>
                    <h1 style={{textAlign: "center", color: "white"}}>Sucesso!</h1>
                    <p style={{textAlign: "center", color: "white"}}>
                        Formulário enviado.
                    </p>
                </div>
                <div className="form-input box4" style={{display: inputFormDisplay}}>
                    <form
                        className="form-inside-input"
                        onSubmit={this.onSubmit}
                        noValidate
                    >
                        <div className="form_line">
                            <label className="form_caption" htmlFor="name">*Nome: </label>
                            <input id="name" type="text" name="name" placeholder="Nome" required/>
                            <br/>
                        </div>
                        <div className="form_container">
                            <div className="form_half">
                                <label htmlFor="email" className="form_caption label_email">*Email: </label>
                                <input id="email" type="email" name="email" placeholder="E-mail" required/>
                            </div>
                            <div className="form_space_between"></div>
                            <div className="form_half tooltip">
                                <label className="form_caption label_phone" htmlFor="phone">
                                    *Telefone:
                                    <span className="tooltiptext">O telefone deve ter DDD: (  )_____-____</span></label>
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="(  )_____-____"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form_line">
                            <label className="form_caption label_message" htmlFor="message">*Mensagem: </label>
                            <textarea
                                id="message"
                                type="text"
                                name="message"
                                placeholder="Mensagem"
                                required
                            />
                        </div>
                        <div className="resultValidation">
                            <p>
                                {renderNameValidationError}
                            </p>
                            <p>
                                {renderEmailValidationError}
                            </p>
                            <p>
                                {renderPhoneValidationError}
                            </p>
                            <p>
                                {renderMessageValidationError}
                            </p>
                        </div>
                        <button className="form_button" type="submit" value="Submit">Enviar</button>
                    </form>
                </div>
            </>
        );
    }
}

export default MyForm;