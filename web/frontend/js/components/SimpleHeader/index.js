import React, { Component } from 'react';
import {NavLink,Link} from "react-router-dom"

import logo from "../../../images/logo_white.png"
import user from "../../../images/user.png"
import "../Header/style.scss"

export default class SimpleHeader extends Component {
    render() {
        return <header
            style={{width:'1200px',marginLeft:'auto',marginRight:'auto'}}>
            <Link to="/" className="logo">
                <img src={logo}/>
            </Link>
            <div className="empty-space"></div>
            {true && <Link to="/intro" className="user-link">
                <span style={{color:'white'}}>В начало</span>
            </Link>}
            {false && <a className="user-link">
                <span>Имя пользователя</span>
                <img src={user}/>
            </a>}
        </header>
    }
}