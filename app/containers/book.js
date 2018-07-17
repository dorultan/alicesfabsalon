import React, {Component} from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import {getByName, makeBooking} from '../actions';
import Book from '../components/book';
import Loading from '../components/common/loading';
import {reduxForm}  from 'redux-form';

class BookContainer extends Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(formProps) {
		const service = this.props.serviceToBook;
		formProps.service = service;
		this.props.makeBooking(formProps);
	}

	componentDidMount() {
		let path = this.props.match.params.service;
		path = path.replace('_', ' ');
		path = path.replace('~', '/');
		path = path.replace('_', ' ');
		this.props.getByName(path);
	}

	render() {
		
		if(!this.props.serviceToBook) {

			return (
				<Loading/>
			)
		}
		else {
			return (
				<Book onSubmit={this.onSubmit} {...this.props}/>
			)
		}

	}
}

const mapStateToProps = (state) => {

	return {
		serviceToBook: state.serviceToBook,
		bookingStatus: state.bookingStatus
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		getByName: getByName,
		makeBooking: makeBooking
	}, dispatch)
}

export default compose(
	connect(mapStateToProps, bindActionCreatorsToProps),
	reduxForm({form: 'bookForm'})
)(BookContainer);