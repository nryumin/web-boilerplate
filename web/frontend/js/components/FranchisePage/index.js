import React, {Component} from 'react';
import location_icon from "./images/map.png"
import placeholderImage from "../../../images/placeholder-image.png"
import userPic from "../../../images/user.png"
import "./style.scss"
import FranchiseList from "../FranchiseList/index";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {numberWithSpaces} from "../../helpers/string";

class FranchisePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            franchise:this.props.franchises.find(f=>f.id==this.props.match.params.id)
        };
        this.state.currentOpened = this.state.franchise.opened[0];
    }

    render() {
        let latinNumbers = ['I','II','III','IV','V','VI','VII'];

        let similar = this.state.franchise.similar.map(id=>this.props.franchises.find(f=>f.id==id));

        return <div className="franchise-page">
            <div className="short-info">
                <div className="adv">
                    {this.state.franchise.intro}
                </div>
                <h1>{this.state.franchise.name}</h1>
                <div className="facts">
                    <div className="item">
                        <b>{this.state.franchise.birth_year}</b>
                        <small>год основания</small>
                    </div>
                    <div className="item">
                        <b>{this.state.franchise.start_year}</b>
                        <small>год запуска<br/>франчайзи</small>
                    </div>
                    <div className="item">
                        <b>{this.state.franchise.franchise_count}</b>
                        <small>франшизных<br/>предприятий</small>
                    </div>
                    <div className="item">
                        <b>{this.state.franchise.own_count}</b>
                        <small>собственных<br/>предприятий</small>
                    </div>
                    <Link to="/contact"  className="ask-btn"><span>задать вопрос</span></Link>
                </div>
                <span className="location">
                    <img src={location_icon}/>&nbsp;
                    Санкт-Петербург
                </span>
                <span className="pic" style={{backgroundImage:`url(${this.state.franchise.pics[0] || placeholderImage})`}}></span>

            </div>

            <div className="numbers">
                <div className="text">
                    {this.state.franchise.description}
                </div>
                <div className="skills">
                    <b>Требует навыков:</b><br/>
                    <ul>
                        {this.state.franchise.skills.map(skill=>
                            <li key={skill}>{skill}</li>
                        )}
                    </ul>
                </div>
                <div className="check-yourself">
                    <b>проверьте себя! &nbsp;</b>
                    <Link to="/contact" >начать тест</Link>
                </div>
                <div className="facts">
                    <div className="item">
                        <b>{this.state.franchise.payback_period} год</b>
                        <small>срок<br/>окупаемости</small>
                    </div>
                    <div className="item">
                        <b>{numberWithSpaces(this.state.franchise.month_revenues)} р</b>
                        <small>прибыль в месяц</small>
                    </div>
                    <div className="item">
                        <b>{numberWithSpaces(this.state.franchise.paush_price)} р</b>
                        <small>паушальный<br/>взнос (в месяц)</small>
                    </div>
                    <div className="item">
                        <b>{numberWithSpaces(this.state.franchise.royalty)} %</b>
                        <small>роялти</small>
                    </div>

                    <div className="price">
                        {numberWithSpaces(this.state.franchise.price)} р
                    </div>
                    <div className="btns">
                        <Link to="/contact"  className="download-fin-model">скачать финмодель</Link>
                        <Link to="/contact" className="buy">оформить</Link>
                    </div>
                </div>
            </div>

            <div className="opened">
                <h2>Нами успешно открыто:</h2>
                <div className="list">
                    {this.state.franchise.opened.map((item,index) =>
                        <div key={index} className={"item" + (item==this.state.currentOpened ? " selected":"")}
                             onClick={()=>this.setState({currentOpened:item})}>
                            <div className="pic" style={{backgroundImage: `url(${this.state.franchise.pics[index] || placeholderImage})`}}/>
                            <h3>антикафе<br/>{this.state.franchise.name}</h3>
                            <p className="location">
                                Санкт-Петербург
                            </p>
                            <p>Окупаемость: {item.payback} год</p>
                            <p>Прибыль: {numberWithSpaces(item.month_revenues)} мес.</p>
                        </div>
                    )}
                </div>
                <div className="facts">
                    <div className="item">
                        <b>{this.state.franchise.birth_year}</b>
                        <small>год основания</small>
                    </div>
                    <div className="item">
                        <b>{this.state.franchise.start_year}</b>
                        <small>год запуска<br/>франчайзи</small>
                    </div>
                    <div className="item">
                        <b>{this.state.franchise.franchise_count}</b>
                        <small>франшизных<br/>предприятий</small>
                    </div>
                    <div className="item">
                        <b>{this.state.franchise.own_count}</b>
                        <small>собственных<br/>предприятий</small>
                    </div>
                </div>

                <div className="text">
                    {this.state.currentOpened.description}
                </div>

                <div className="images">
                    {this.state.franchise.pics.map((pic,index)=>
                        <span key={index} style={{backgroundImage: `url(${pic})`}}></span>
                    )}
                </div>

                {this.state.currentOpened.text && <h2>Отзыв владельца</h2>}

                {this.state.currentOpened.text && <div className="feedback">
                    <div className="pic"></div>
                    <h3>{this.state.currentOpened.owner}</h3>
                    <h4>{this.state.currentOpened.position}</h4>
                    <p>
                        {this.state.currentOpened.text}
                    </p>
                </div>}
            </div>

            {!!this.state.franchise.formats.length && <div className="format">
                <h2>Формат раншизы</h2>

                <div className="list">
                    {this.state.franchise.formats.map((format,index)=>
                        <div key={index} className={"item" + (index==2 ? " selected":"")}>
                            <div className="header">Тариф #{index+1}</div>
                            <ul>
                                <li>
                                    <b>франшиза</b>
                                    {format.name}
                                </li>
                                <li>
                                    <b>бюджет открытия</b>
                                    {numberWithSpaces(format.budget[0])} - {numberWithSpaces(format.budget[1])} Р
                                </li>
                                <li>
                                    <b>помещение</b>
                                    от {numberWithSpaces(format.office_size[0])} м2 - {numberWithSpaces(format.office_size[1])} м2
                                </li>
                                <li>
                                    <b>оборудование</b>
                                    от {numberWithSpaces(format.equipment[0])} - {numberWithSpaces(format.equipment[1])} единиц
                                </li>
                                <li>
                                    <b>выручка</b>
                                    от {numberWithSpaces(format.revenues[0])} -<br/>{numberWithSpaces(format.revenues[0])} Р в мес
                                </li>
                                <li>
                                    <b>роялти</b>
                                    от {numberWithSpaces(format.royalty)} % в мес.
                                </li>
                            </ul>

                            <div className="price">{numberWithSpaces(format.price)} Р</div>
                            <Link to="/contact"  className="buy-btn">ОФОРМИТЬ</Link>
                        </div>
                    )}
                </div>
            </div>}

            {!!this.state.franchise.steps.length &&
                <div className="steps">
                    <h2>Этапы запуска</h2>

                    <div className="list">
                        {this.state.franchise.steps.map((step,index)=>
                            <div className="item" key={index}>
                                <span className="number">{latinNumbers[index]}</span>
                                <label>{step}</label>
                            </div>)}
                    </div>
                </div>}

            <div className="benefits">
                <h2>Что вы получаете?</h2>
                <div className="list">
                    {this.state.franchise.benefits.map((benefit,index)=>
                        <div key={index} className="item">
                            <img src={placeholderImage}/>
                            <b>{benefit.name}</b>
                            <small>{benefit.description}</small>
                        </div>
                    )}
                </div>
            </div>

            {!!similar.length && <div className="similar">
                <h2>Похожие франшизы</h2>
                <FranchiseList items={similar}/>
            </div>}

            <div className="interested">
                <h2>Заинтересовала франшиза?</h2>
                <Link to="/contact"  className="btn">перейти</Link>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        franchises: state.model.franchises
    }
};

export default connect(mapStateToProps, null)(FranchisePage)

