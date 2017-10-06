import React, { Component } from 'react';
import {Link} from "react-router-dom"

import location_icon from "./images/map.png"
import franchisePic from "./images/cafe.jpg"
import sharePic from "./images/share.png"
import likePic from "./images/like.png"

import "./style.scss"
import {numberWithSpaces} from "../../helpers/string";

export default class FranchiseList extends Component {
    render() {
        return <div className="franchise-list">
                    {this.props.items.map((item,index)=>
                        <div className="item" key={index}>
                            <span className="area">{item.area}</span>

                            <div className="pic" style={{backgroundImage: `url(${item.pics[0] || franchisePic})`}}></div>

                            {item.is_invest &&
                                <span className="invest-project">инвестпроект</span>}

                            {false && <a className="like-btn"><img src={likePic}/></a>}

                            {false && <a className="share-btn"><img src={sharePic}/></a>}

                            <div className="info">
                                <p className="location">
                                    <img src={location_icon}/>&nbsp;
                                    Санкт-Петербург
                                </p>
                                <h4>{item.name}</h4>
                                <p>Окупаемость: {item.payback_period}год</p>
                                <p>Прибыль: {numberWithSpaces(item.month_revenues)}р в мес.</p>
                                <p>Роялти: {numberWithSpaces(item.royalty)}р в мес.</p>
                                <p className="price">
                                    <span>{numberWithSpaces(item.price)} р</span>
                                </p>
                                <p className="more">
                                    <Link to={"/franchise/" + item.id}>Подробнее ></Link>
                                </p>
                            </div>
                        </div>)}
                </div>
    }
}

