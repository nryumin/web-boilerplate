import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import "./style.scss"
import FranchiseList from "../FranchiseList/index";
import {connect} from "react-redux";

class FranchiseCatalogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bizTypes: [
                {value: 1, label: 'Кофейня'},
                {value: 2, label: 'Антикафе'}
            ]
        }
    }
    render() {
        return <div className="franchise-catalog">
            <div className="filters-container">
                <h2>хочу купить франшизу</h2>
                <h3>Какая сфера бизнеса вам интересна?</h3>

                <div className="filters">
                    <Dropdown placeholder="Тип бизнеса" options={this.state.bizTypes}/>
                    <Dropdown placeholder="Стоимость" options={this.state.bizTypes}/>
                    <Dropdown placeholder="Город" options={this.state.bizTypes}/>

                    <a className="more"><span>Еще фильтры +</span></a>
                    <a className="submit"><span>подобрать</span></a>
                </div>
            </div>
            <div className="results top">
                <p className="results-count">
                    топовые франшизы
                </p>
                <FranchiseList items={this.props.franchises}/>

            </div>
            <div className="results">
                <p className="results-count">
                    новые франшизы
                </p>
                <FranchiseList items={this.props.franchises}/>
            </div>
            <a className="more-btn">загрузить еще</a>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        franchises: state.model.franchises
    }
};

export default connect(mapStateToProps, null)(FranchiseCatalogPage)

