import React, {Component} from 'react';
import "./style.scss"
import 'react-rangeslider/lib/index.css'
import SimpleHeader from "../SimpleHeader/index";
import DynamicNet from "../DynamicNet/index";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            phone: "",
            login: ""
        }
    }

    send() {
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                phone: this.state.phone,
                login: this.state.login
            })
        }).then(()=>alert("успех"))
    }

    render() {
        return <div className="register register-seller">
            <DynamicNet/>
            <SimpleHeader/>
            <h1>Прежде чем зарегистрироваться, просим пройти<br/> Вас быстрое анкетирование. Это поможет Вам<br/> в
                дальнейшей работе с сервисом. Это быстро.</h1>

            <p className="question">
                Для получения бонуса и интересного предложения оставьте<br/> свои данные и наш специалист свяжется с
                вами в ближайшее время.
            </p>

            <div className="form">
                <input type="text" placeholder="Ваш Email" onChange={(ev) => this.setState({email: ev.target.value})}
                       defaultValue={""}/>
                <input type="text" placeholder="+7 (9__) ___-___-__"
                       onChange={(ev) => this.setState({phone: ev.target.value})} defaultValue={""}/>
                <input type="text" placeholder="Ваш логин" onChange={(ev) => this.setState({login: ev.target.value})}
                       defaultValue={""}/>
                <a onClick={() => this.send()}>оставить заявку</a>
            </div>

            <div className="step-counter">
                <span className="number selected">4</span>
            </div>
        </div>
    }
}