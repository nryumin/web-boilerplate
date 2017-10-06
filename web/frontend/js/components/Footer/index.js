import React, { Component } from 'react';
import "./style.scss"
import logo from "../../../images/logo_black.png"
import fb from "../../../images/fb.png"
import twitter from "../../../images/twitter.png"
import vk from "../../../images/vk.png"

export default class Footer extends Component {
    render() {
        return <footer>
            <a className="logo">
                <img src={logo}/>
            </a>
            <div className="site-map">
                <h4>Каталог франшиз</h4>
                <a>Новости</a>
                <a>Обучение</a><br/>
                <a>Блог</a>
                <a>FAQ</a><br/>
                <a>Об Indagate</a>
                <a>Доп. услуги</a>
            </div>
            <div className="social-links">
                <h4>Соцсети</h4>
                <a><img src={fb}/></a>
                <a><img src={vk}/></a>
                <a><img src={twitter}/></a>
            </div>
        </footer>
    }

}