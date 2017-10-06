import React, {Component} from 'react';
import "./style.scss"
import {connect} from "react-redux";
import {skipIntro} from "../../redux/actions";
import {Link} from "react-router-dom"
import SimpleHeader from "../SimpleHeader/index";
import DynamicNet from "../DynamicNet/index";
import mask from "./first.png";
import logo from "../../../images/logo_white.png"

class Intro extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="intro">
            <DynamicNet/>
            <div className="content">
                <img className="mask" src={mask}/>
                <h1>
                    <img className="logo" src={logo}/>
                   Поможем подобрать, научим управлять и запустим бизнес по франшизе</h1>
                <Link to="/register" className="register"><span>зарегистрируйтесь</span></Link>
                <span className="or">или</span>
                <a className="login">войдите</a>
            </div>
            <Link className="skip-intro" to="/">ПРОПУСТИТЬ</Link>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        skip: () => {
            dispatch(skipIntro())
        }
    }
};

const mapStateToProps = state => {
    return {
        showIntro: state.showIntro
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro)

