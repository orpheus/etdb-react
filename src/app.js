import React from 'react'
import {
	Router
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import MatomoReactRouter from 'piwik-react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import '@babel/polyfill'

import {createStore} from '../redux/store'

import AppRoutes from './components/appRoutes.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/jensen.css'
import './assets/css/contact.css'
import './assets/css/special-typekit-fonts.css'
import './assets/css/custom.css'

var history = createBrowserHistory();


var Matomo = MatomoReactRouter({
	url: 'https://etdb.caltech.edu/matomo',
	siteId: 1
});

const store = createStore()

const App = () => {
	var matHistory = Matomo.connectToHistory(history);
	return (
		<>
			<Provider store={store}>
				<Router history={matHistory}>
					<AppRoutes history={matHistory}/>
				</Router>
			</Provider>
		</>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
