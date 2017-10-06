import React, {Component} from 'react';
import "./style.scss"
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import {connect} from "react-redux";
import {skipIntro} from "../../redux/actions";
import { push } from 'react-router-redux'
import SimpleHeader from "../SimpleHeader/index";
import DynamicNet from "../DynamicNet/index";
import {Link} from "react-router-dom";

class RegisterSeller extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentStep: "already"
        };
    }

    getAlreadyStep() {
        return <div className="register register-seller">
            <DynamicNet/>
            <SimpleHeader/>
            <h1>Прежде чем, мы сможем помочь развивать ваш бизнес<br/>посредством продажи франшиз, скажите</h1>

            <p className="question">
                Продавали ли вы уже франшизу своего бизнеса?
            </p>

            <div className="btns">
                <a onClick={()=>this.setState({currentStep:"ask_brief"})}>да</a>
                <Link to="/contact">нет</Link>
            </div>

            <div className="step-counter">
                <span className="number selected">2</span>
                <span className="number">3</span>
            </div>
        </div>
    }

    getAskBriefStep() {
        return <div className="register register-seller">
            <DynamicNet/>
            <SimpleHeader/>
            <h1>Прежде чем зарегистрироваться, просим пройти<br/> Вас быстрое анкетирование. Это поможет Вам<br/> в
                дальнейшей работе с сервисом. Это быстро.</h1>

            <p className="question">
                Перекрасно!<br/>
                Теперь Вам нужно заполнить бриф о Вашем продукте.
            </p>

            <div className="btns">
                <Link to="/contact">перейти</Link>
            </div>

            <div className="step-counter">
                <span className="number selected">3</span>
                <span className="number">4</span>
            </div>
        </div>
    }

    render() {
        switch (this.state.currentStep){
            case "already": return this.getAlreadyStep();
            case "contact": return this.getContactStep();
            case "contact_brief": return this.getContactBriefStep();
            case "ask_brief": return this.getAskBriefStep();
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        submit: () => {
            dispatch(skipIntro());
            dispatch(push("/franchise/1"));
        }
    }
};

const mapStateToProps = state => {
    return {
        showIntro: state.showIntro
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSeller)