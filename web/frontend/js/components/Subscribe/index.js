import React, {Component} from 'react';
import "./style.scss"
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import {connect} from "react-redux";
import {skipIntro} from "../../redux/actions";
import { push } from 'react-router-redux'
import SimpleHeader from "../SimpleHeader/index";

class Subscribe extends Component {
    render() {
        return <div className="register subscribe">
            <SimpleHeader/>
            <h1>Прежде чем зарегистрироваться, просим пройти<br/> Вас быстрое анкетирование. Это поможет Вам<br/> в
                дальнейшей работе с сервисом. Это быстро.</h1>

            <p className="question">
                Подпишитесь на нашу новостную рассылку,<br/>чтобы всегда быть в курсе событий мира франчайзи
            </p>

            <div className="email-form">
                <input type="text" placeholder="Ваш Email"/>
                <a><span>подписаться</span></a>
            </div>

            <div className="step-counter">
                <span className="number">1</span>
                <span className="number selected">2</span>
                <span className="number">3</span>
            </div>
        </div>
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        submit: () => {
            dispatch(skipIntro());
            dispatch(push("/"));
        }
    }
};

const mapStateToProps = state => {
    return {
        showIntro: state.showIntro
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe)