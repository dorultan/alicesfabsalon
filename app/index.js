import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import promiseMiddleware from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import Home from './components/home';
import App from './components/app';
import Services from './components/services';
import About from './components/about';
import ServicesByCategory from './components/services-by-category';
import BookContainer from './containers/book';


const history = createBrowserHistory();
const store = createStore(rootReducer,{}, applyMiddleware(promiseMiddleware));

ReactDOM.render(
	<Provider store={store}>
	 <Router history={history}>
	  <App>
	   <Route exact path="/" component={Home}/>
	   <Route path="/home" component={Home}/>
	   <Route path="/who-we-are" component={About}/>
	   <Route exact path="/services" component={Services}/>
	   <Route path="/services/:category" component={ServicesByCategory}/>
	   <Route path="/book/:service" component={BookContainer}/>
	  </App>
	 </Router>
	</Provider>
	,document.getElementById('root')
)