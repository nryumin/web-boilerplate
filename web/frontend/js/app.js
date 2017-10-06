import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Route, Switch} from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import uiReducer from "./redux/ui_reducer"
import modelReducer from "./redux/model_reducer"
import Header from "./components/Header";
import Footer from "./components/Footer";
import FranchiseCatalogPage from "./components/FranchiseCatalogPage";
import FranchisePage from "./components/FranchisePage";
import Intro from "./components/Intro";
import Register from "./components/Register";
import Subscribe from "./components/Subscribe";
import RegisterBuyer from "./components/RegisterBuyer/";
import RegisterSeller from "./components/RegisterSeller/";

import "../style/style.scss"
import Contact from "./components/Contact/index";

class App extends Component {
    render() {
        return <div className="app-container">
            <Header/>
            <Switch>
                <Route exact path="/" component={FranchiseCatalogPage}/>
                <Route exact path="/intro" component={Intro}/>

                <Route path="/register/buyer" component={RegisterBuyer}/>
                <Route path="/register/seller" component={RegisterSeller}/>
                <Route path="/subscribe" component={Subscribe}/>
                <Route path="/register" component={Register}/>

                <Route path="/contact" component={Contact}/>

                <Route path="/franchise/:id" component={FranchisePage}/>
                <Route path="/education" render={() => <h1>Education</h1>}/>
                <Route path="/about" render={() => <h1>About</h1>}/>
            </Switch>
            <Footer/>
        </div>
    }
}

const history = createHistory();
const middleware = routerMiddleware(history);

console.log("fwefwefewf324234")



const store = createStore(
  combineReducers({
    ui:uiReducer,
    router: routerReducer,
    model:modelReducer
  }),
  {ui:{showIntro: true}},
  applyMiddleware(middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter >
    </Provider>,
    document.getElementById('root')
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))