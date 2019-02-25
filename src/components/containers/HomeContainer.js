import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Home from '../views/dumb/Home'
import {fetchTomograms} from "../../../redux/actions/Database/thunks";

const HomeContainer = (props) => {
	//getTomograms
	useEffect(() => {
		props.fetchTomograms()
	}, [])
	
	return <Home
		tomogramCount={props.tomogramCount}
		speciesCount={props.speciesCount}
	/>
}


const mapDispatchToProps = {
	fetchTomograms
}

const mapStateToProps = (state) => {
	return {
		tomograms: state.Database.tomograms,
		tomogramCount: state.Database.tomogramCount,
		speciesCount: state.Database.speciesCount,
	}
}

HomeContainer.propTypes = {
	tomograms: PropTypes.array.isRequired,
	tomogramCount: PropTypes.number.isRequired,
	speciesCount: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)