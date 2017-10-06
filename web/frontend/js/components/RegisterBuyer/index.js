import React, {Component} from 'react';
import "./style.scss"
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import {connect} from "react-redux";
import {skipIntro} from "../../redux/actions";
import { push } from 'react-router-redux'
import SimpleHeader from "../SimpleHeader/index";
import DynamicNet from "../DynamicNet/index";

class RegisterBuyer extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentStep: "experience",
            experience:0,
            areas: []
        };
    }

    getExperienceStep() {
        let labels = [["0 лет",-4],[1,11],[2,20.5],[3,30],[4,39.5],[5,49],[6,58.5],[7,68],[8,77.5],[9,87],["10 лет и более",92]];

        return <div className="register register-buyer">
            <DynamicNet/>
            <SimpleHeader/>
            <h1>Немного о вашем прошлом </h1>

            <p className="question">
                Имеется ли у вас управленческий опыт?
            </p>

            <Slider
                onChange={(val)=>this.setState({experience:val})}
                value={this.state.experience}
                tooltip={false}
                min={0} max={10}/>
            <div className="slider-labels">
                {labels.map(([label,left],index)=>
                    <span key={index} className={this.state.experience == index ? "selected":""}
                          style={{left:left+'%'}}>{label}</span>)}
            </div>
            <div className="btns">
                <a onClick={()=>this.setState({currentStep:"sure"})}>подтвердить</a>
            </div>

            <div className="step-counter">
                <span className="number selected">2</span>
                <span className="number">3</span>
            </div>
        </div>
    }

    getSureStep() {
        return <div className="register register-buyer">
            <DynamicNet/>
            <SimpleHeader/>
            <h1>Осталось всего пару вопросов...</h1>

            <p className="question">
                Вы уже знаете сферу, в которой хотите купить франшизу?
            </p>
            <div className="btns">
                <a onClick={()=>this.setState({currentStep:"area"})}>да</a>
                <a onClick={()=>this.setState({currentStep:"budget"})}>нет</a>
            </div>

            <div className="step-counter">
                <span className="number selected">3</span>
                <span className="number">4</span>
            </div>
        </div>
    }

    getAreaStep() {
        let values = [
            ["service","Услуги"],
            ["real_estate","Недвижимость"],
            ["food","Общепит"],
            ["factory","Производство"]
        ];

        return <div className="register register-buyer">
            <DynamicNet/>
            <SimpleHeader/>
            <h1>Последний. Честно</h1>

            <p className="question">
                Выберите одну или несколько интересных вам сфер
            </p>
            <div className="check-boxes">
                {values.map(([key,title])=>
                    <span key={key} className={"checkbox" + (this.state.areas.indexOf(key)!=-1 ? " selected":"")}>
                        <a onClick={()=>this.toggleArea(key)}></a>
                        <label>{title}</label>
                    </span>)}
            </div>
            <div className="btns">
                <a onClick={()=>this.setState({currentStep:"budget"})}>подтвердить</a>
            </div>

            <div className="step-counter">
                <span className="number selected">4</span>
            </div>
        </div>
    }

    toggleArea(area) {
        let index = this.state.areas.indexOf(area);
        if(index!=-1){
            this.state.areas.splice(index,1);
            this.forceUpdate();
        }else
            this.setState({areas:this.state.areas.concat([area])});
    }

    getBudgetStep() {
        return <div className="register register-buyer">
            <DynamicNet/>
            <SimpleHeader/>
            <h1><br/><br/></h1>

            <p className="question">
                На какой бюджет при покупке франшизы вы рассчитываете?
            </p>
            <div className="btns">
                <a onClick={()=>this.props.submit()}>до 300 000 р</a>
                <a onClick={()=>this.props.submit()}>до 1 000 000 р</a>
                <a onClick={()=>this.props.submit()}>свыше 1 000 000 р</a>
            </div>

            <div className="step-counter">
                <span className="number selected">4</span>
            </div>
        </div>
    }

    render() {
        switch (this.state.currentStep){
            case "experience": return this.getExperienceStep();
            case "sure": return this.getSureStep();
            case "area": return this.getAreaStep();
            case "budget": return this.getBudgetStep();
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBuyer)