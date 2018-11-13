import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import DetailPage from "./components/detail";
import {productsReducer,cartReducer} from "./redux/reducers";
import "./App.css";
  

const store = createStore(productsReducer, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/" component={Header} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/products/:id" component={DetailPage} />
                        </Switch>
                        <Route path="/" component={Footer} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;