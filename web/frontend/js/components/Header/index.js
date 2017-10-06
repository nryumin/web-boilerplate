import React, { Component } from 'react';
import {NavLink,Link} from "react-router-dom"

import logo from "../../../images/logo_black.png"
import fb from "../../../images/fb.png"
import twitter from "../../../images/twitter.png"
import vk from "../../../images/vk.png"
import user from "../../../images/user.png"
import "./style.scss"

export default class Header extends Component {
    render() {
        let headerLinks = [
            ['/','каталог франшиз'],
            ['/education','обучение'],
            ['/about','о проекте']
        ]
        return <header>
            <Link to="/" className="logo">
                <img src={logo}/>
            </Link>
            <ul className="header-links">
                {headerLinks.map(([path,title])=>
                    <li key={title}>
                        <NavLink exact={true} to={path} activeClassName="selected">{title}</NavLink>
                    </li>
                )}
            </ul>

            <div className="empty-space"></div>

            <ul className="social-links">
                <li><a><img src={fb}/></a></li>
                <li><a><img src={vk}/></a></li>
                <li><a><img src={twitter}/></a></li>
            </ul>

            {true && <Link to="/intro" className="user-link">
                <span>Регистрация</span>
            </Link>}

            {false && <a className="user-link">
                <span>Имя пользователя</span>
                <img src={user}/>
            </a>}
        </header>
    }
}

