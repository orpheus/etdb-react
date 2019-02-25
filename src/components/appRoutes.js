import React, { Component } from 'react'
import {
	Route,
	Switch
} from 'react-router-dom'

import About from './about.js';
import HomeContainer from './containers/HomeContainer.js';
import Contact from './contact.js';
import Challenges from './challenges.js';
import Featured from './featured.js';
import Browse from './browse.js';
import TomogramView from './tomogramView.js';
import FeaturedCollection from './FeaturedCollection.js'
import TermsAndConditions from './termsAndConditions.js'
import NotFoundPage from './NotFoundPage.js'
import Thirdpartyapps from './thirdpartyapps.js'


class AppRoutes extends Component {
	render(){
		return(
			<Switch>
				<Route path="/" exact render={props => <HomeContainer {...props} />} />
				
				<Route path="/about" render={props => <About {...props} />} />
				<Route path="/contact" render={props => <Contact {...props} />} />
				<Route path="/featured" exact render={props => <Featured {...props} />} />
				<Route path="/challenges" render={props => <Challenges {...props} />} />
				<Route path="/browse" render={props => <Browse {...props} />} />
				<Route path="/tomogram/:id" render={props => <TomogramView history={this.props.history} {...props} />} />
				<Route path="/featured/:id" render={props => <FeaturedCollection {...props} />} />
				<Route path="/terms" render={props => <TermsAndConditions {...props} />} />
				<Route path="/thirdpartyapps" render={props => <Thirdpartyapps {...props} />} />
				
				<Route render={props => <NotFoundPage />} />
			</Switch>
		)
	}
}

export default AppRoutes;
