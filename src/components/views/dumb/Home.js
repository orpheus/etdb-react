import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../../assets/img/etdb-logo.png'
import homePic from '../../../assets/img/etdb-home.png'

const Home = ({speciesCount = 0, tomogramCount = 0}) => {
	return (
		<div>
			<div id="headerfixed">
				<div className="transparent" id="topbar">
					<div className="row">
						<div className="col-sm-6"><a href="/">
							<img className="black-logo"
							     alt={'black-logo'}
							     src="/src/assets/img/logo.png"/></a>
						</div>
						<div className="col-sm-6">
							<div id="menu">
								<a href="/about">About</a>
								<a href="/browse">Browse Database</a>
								<a href="/featured">Featured Tomograms</a>
								<a href="/challenges">Scientific Challenges</a>
								<a href="/contact">Contact</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="home-image">
				<div id="home-image-container"><img src={homePic}/>
				</div>
			</div>
			<div className="row" id="homecontent">
				<div className="col-sm-6" id="homehero"/>
				<div className="col-sm-6" id="homesecondary">
					<div>
						<h4>Welcome to the</h4>
						<h3>Caltech Electron Tomography Database</h3>
						<h6>A public repository featuring {tomogramCount} electron tomography datasets of
							intact bacterial and archaeal cells, representing {speciesCount} species.</h6>
						<a className="browse" href="/browse">Browse database <i className="fa fa-arrow-right"
							aria-hidden="true"/></a>
						<a className="termsandconditions" href="/terms">View our terms and conditions</a>
					</div>
				</div>
			</div>
		</div>
	)
}

Home.propTypes = {
	tomogramCount: PropTypes.number.isRequired,
	speciesCount: PropTypes.number.isRequired,
}

export default Home;
