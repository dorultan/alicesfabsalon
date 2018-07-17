import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getServices} from '../actions';
import {bindActionCreators} from 'redux';
import Loading from '../components/common/loading';

const ServicesContainer = (ChildComponent) => {

	class ServicesHoc extends Component {
		constructor(props) {
			super(props);
		}

		componentDidMount() {
			this.props.getServices()
		}

		componentDidUpdate() {
			sr.reveal('.category-image', {
				delay: 300,
				duration: 1000
			})
		}

		render() {

			if(this.props.services.length === 0) {
				return (
					<Loading/>
				)
			}

			else {
				return (
					<ChildComponent {...this.props}/>
				)
			}
			
		}
	}

	const mapStateToProps = (state) => {

		return {
			services: state.services
		}
	}

	const bindActionstoProps = (dispatch) => {

		return bindActionCreators({
			getServices: getServices
		}, dispatch)
	}

	return connect(mapStateToProps, bindActionstoProps)(ServicesHoc);
}

export default ServicesContainer;
