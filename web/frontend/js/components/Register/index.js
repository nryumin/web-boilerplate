import React, {Component} from 'react';
import "./style.scss"
import {Link} from "react-router-dom"
import SimpleHeader from "../SimpleHeader/index";
import DynamicNet from "../DynamicNet/index";

export default class Register extends Component {
    render() {
        return <div className="register">
            <DynamicNet/>
            <SimpleHeader/>
            <h1>Прежде чем зарегистрироваться,<br/>ответьте на несколько простых вопросов.<br/>Расскажите нам немного о себе. Это быстро.</h1>

            <p className="question">
                Какая цель привела Вас к нам?
            </p>

            <div className="btns">
                <Link to="/register/buyer">купить франшизу</Link>
                <Link to="/register/seller">продать франшизу</Link>
                <Link to="/subscribe">буть в курсе!</Link>
            </div>

            <div className="step-counter">
                <span className="number selected">1</span>
                <span className="number">2</span>
            </div>
        </div>
    }
}

